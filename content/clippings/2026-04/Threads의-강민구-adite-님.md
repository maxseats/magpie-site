---
title: "Threads의 강민구(@adite)님"
type: clipping
category: 기술
tags: [RAG, 온톨로지, RDF, AI-에이전트, 문서검색, Knowledge-Graph]
clipped: 2026-04-16T09:20:18.799715
clipped_by: "web-clipper"
clip_type: URL
url: https://www.threads.com/@adite/post/DWd03MYD6T2
notion_page_id: 3440c76f-6ccb-81a0-90a0-f96f889cf498
notion_url: https://www.notion.so/3440c76f6ccb81a090a0f96f889cf498
---

# Threads의 강민구(@adite)님

## 요약

AI 에이전트 문서 검색을 RAG에서 온톨로지(RDF 트리플스토어)로 전환해 검색 속도를 2-3초에서 10ms로 약 288배 개선한 실전 사례. 기존 RAG+BM25 파이프라인은 구조적 질문에 한계. SPARQL로 관계 탐색 후 RAG 보완 방식으로 전환. 300개 문서에 1300개 트리플 구축. GraphRAG와 달리 LLM이 관계를 직접 정의하는 방식.

## 원본 링크

- https://www.threads.com/@adite/post/DWd03MYD6T2

## 원문 발췌

AI 에이전트의 문서 검색 속도를 2-3초에서 10ms로 줄였다. 온톨로지를 붙였다. 새로운 기술이 아니다. 오히려 아주 전통적인 거다. 처음에는 RAG로 시작했다. 마크다운 문서마다 YAML 프론트매터를 붙이고, ChromaDB에 임베딩을 넣고, DB 장애 검색하면 코사인 유사도로 관련 문서를 뱉어주는 구조. 하지만 DB 관련 문서 전부, 이 서버가 죽으면 뭐가 영향받아? 같은 구조적 질문에는 벡터 유사도가 무력하다. RDF 트리플스토어 온톨로지를 도입 후 쿼리 -> 용어 정규화 -> 쿼리 분류 -> SPARQL로 구조적 탐색 -> RAG로 보완 흐름으로 전환. 300개 미만 문서에 1300개 트리플. 초기 로딩 포함 34배, 캐싱 후 288배 빠른 검색 성능.
