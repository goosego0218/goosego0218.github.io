// src/pages/velog.tsx
import React from 'react';
import Layout from '@theme/Layout';
import data from '@site/src/data/velog.json';

type FeedItem = {
  title: string;
  link: string;
  pubDate?: string;
  contentSnippet?: string;
};

export default function VelogPage() {
  // 무엇: 날짜 포맷 함수
  // 언제: 렌더링 시
  // 입출력: string -> string
  const formatDate = (s?: string) => {
    if (!s) return '';
    const d = new Date(s);
    return isNaN(d.getTime()) ? '' : d.toLocaleDateString();
  };

  const items: FeedItem[] = (data as any).items || [];

  return (
    <Layout title="Velog Blog" description="Velog posts via prebuild RSS">
      <main className="container margin-vert--lg">
        <h1>Velog Blog</h1>
        <p>
          Source:{' '}
          <a href={(data as any).link} target="_blank" rel="noreferrer">
            {(data as any).title}
          </a>
        </p>

        {items.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((it, idx) => (
              <li key={idx} style={{ marginBottom: '1.25rem' }}>
                <a
                  href={it.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: '1.05rem', fontWeight: 600 }}
                >
                  {it.title}
                </a>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  {formatDate(it.pubDate)}
                </div>
                {it.contentSnippet && (
                  <p style={{ marginTop: '0.4rem' }}>
                    {it.contentSnippet.length > 160
                      ? `${it.contentSnippet.slice(0, 160)}...`
                      : it.contentSnippet}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </main>
    </Layout>
  );
}
