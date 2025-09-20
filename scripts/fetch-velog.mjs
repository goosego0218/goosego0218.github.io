// scripts/fetch-velog.mjs
import fs from 'node:fs';
import path from 'node:path';
import Parser from 'rss-parser';

const FEED_URL = 'https://v2.velog.io/rss/goosego'; // 주인님 Velog RSS
const OUT_DIR = path.join(process.cwd(), 'src', 'data');
const OUT_FILE = path.join(OUT_DIR, 'velog.json');

// 무엇: Velog RSS를 JSON으로 변환해 정적 파일로 저장
// 언제: 개발 서버 시작 전(prestart), 빌드 전(prebuild)
// 입출력: URL(string) -> { title, link, items[] }
async function fetchVelogRss(url) {
  const parser = new Parser({ headers: { 'User-Agent': 'docusaurus-rss-fetcher' } });
  console.log('[RSS] Fetching:', url);
  const feed = await parser.parseURL(url);

  const items = (feed.items || []).map((it) => ({
    title: it.title ?? '',
    link: it.link ?? '',
    pubDate: it.pubDate ?? '',
    contentSnippet: (it.contentSnippet || it.content || '')
      .replace(/\s+/g, ' ')
      .trim(),
  }));

  return {
    title: feed.title ?? 'Velog',
    link: feed.link ?? 'https://velog.io/@goosego/posts',
    items,
  };
}

async function main() {
  try {
    const data = await fetchVelogRss(FEED_URL);
    fs.mkdirSync(OUT_DIR, { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify(data, null, 2), 'utf-8');
    console.log('[RSS] Saved:', OUT_FILE, `(items: ${data.items.length})`);
  } catch (err) {
    console.error('[RSS] Failed:', err);
    process.exitCode = 1;
  }
}

main();
