---
title: "LLM Classification via Logprobs (Threads)"
type: clipping
category: 기술
tags: [logprobs, classification, routing, LLM, inference]
clipped: 2026-09-27T13:18:20.344958
clipped_by: "taeyeon"
clip_type: URL
url: https://www.threads.com/share/BAQ8ORYU4r/
notion_page_id: 3e80c76f-6ccb-8177-b360-d4a011c4dfbb
notion_url: https://app.notion.com/p/https-www-threads-com-share-BAQ8ORYU4r-3e80c76f6ccb8177b360d4a011c4dfbb
---

# LLM Classification via Logprobs (Threads)

## 요약

LLM을 분류/라우팅 작업에 활용하는 기법. 별도 결정 모델 없이 기존 LLM에서 단일 토큰만 생성하고 logprobs로 확률 점수를 읽는 방식. RTX 3090 기준 Gemma 4 12B로 웹캠 프레임 처리 시 ~1fps, 상용 API(gpt-6-luna)는 ~0.2fps로 API 연결 오버헤드 차이가 큼. logprobs 기반 분류가 경량 라우팅에 유효함을 확인.

## 원본 링크

- https://www.threads.com/share/BAQ8ORYU4r/

## 원문 발췌

Threads post discussing using LLMs for classification/routing without dedicated decision models. Technique: generate only a single token and read probability scores via logprobs. Performance: Gemma 4 12B on RTX 3090 ~1fps for webcam frames; gpt-6-luna ~0.2fps due to API connection overhead. Experiment processes webcam input answering questions about people visibility and brightness. Concludes by asking readers about their classification/routing methods.
