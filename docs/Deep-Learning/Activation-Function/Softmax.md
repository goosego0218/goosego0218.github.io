---
sidebar_position: 1
---

## 1) 개요

Softmax는 다중 클래스 분류 문제에서 모델의 출력 값을 **확률 분포**로 변환하는 함수다. 각 클래스에 대한 "상대적인 확률"을 주어, 가장 큰 값이 예측 클래스가 된다.

---

## 2) 개념 정의

* **Logit (로짓)**: 신경망의 마지막 층(Dense layer 등)에서 나온 선형 출력 값(정규화되지 않은 점수).
* **Softmax 함수**: 여러 개의 로짓을 받아서, 전체 합이 1이 되는 확률 분포로 변환하는 함수.

---

## 3) 예시

예를 들어, 모델이 3개 클래스(cat, dog, rabbit)를 구분한다고 하자.
마지막 층 출력이 `[2.0, 1.0, 0.1]`일 때 Softmax를 적용하면:

* cat: 0.62
* dog: 0.23
* rabbit: 0.15
  처럼 총합이 1이 되는 확률로 변환된다.

---

## 4) 수학 공식 

Softmax 함수는 다음과 같이 정의된다.


$\text{Softmax}(z_i) = \frac{e^{z_i}}{\sum_{j=1}^K e^{z_j}} \\\
\quad (i = 1, 2, ..., K)$


* $z_i$: 클래스 i의 logit 값
* $K$: 전체 클래스 개수
* 분자: 해당 클래스의 점수 지수화
* 분모: 모든 클래스 점수의 지수화 합

---

## 5) 코드 예시 (Python, Numpy)

```python
import numpy as np

# Softmax 함수 정의
def softmax(logits):
    # logits: (n_classes,) 크기의 numpy 배열
    exp_vals = np.exp(logits - np.max(logits))  
    # np.max(logits) 빼는 이유: 오버플로우 방지
    probs = exp_vals / np.sum(exp_vals)
    return probs

# 예시 logits
logits = np.array([2.0, 1.0, 0.1])
print("Logits:", logits)

probs = softmax(logits)
print("Softmax 결과:", probs)
print("총합:", np.sum(probs))
```

### 실행 흐름 해설

1. `np.exp(logits - np.max(logits))`

   * 큰 값에서 작은 값을 뺀 후 지수화 → 수치 안정성 확보.
   * 예: \[2.0, 1.0, 0.1] → \[0.0, -1.0, -1.9] → exp → \[1.0, 0.3679, 0.1496].

2. `np.sum(exp_vals)`

   * 모든 지수화된 값 합 = 1.5175.

3. `exp_vals / sum`

   * 각각 나눠서 확률로 변환 → \[0.62, 0.24, 0.15].

---

## 6) 단계적 심화

* **Softmax와 Argmax 차이**

  * Argmax는 "가장 큰 값의 인덱스"만 반환.
  * Softmax는 "모든 클래스에 대한 확률"을 제공 → 불확실성까지 반영.

* **Loss 함수와 결합**

  * 다중 클래스 분류에서는 **Cross-Entropy Loss**와 함께 사용한다.
  * Softmax + CrossEntropy는 PyTorch/TensorFlow에서 하나의 함수(`CrossEntropyLoss`)로 구현 → 계산 안정성과 효율성 때문.

---

## 7) 요약

* Softmax = 로짓 → 확률 변환 함수.
* 모든 클래스 확률의 합은 1.
* 다중 클래스 분류의 출력층에서 필수.
* 실제 학습에서는 Cross-Entropy와 결합해 사용.

---