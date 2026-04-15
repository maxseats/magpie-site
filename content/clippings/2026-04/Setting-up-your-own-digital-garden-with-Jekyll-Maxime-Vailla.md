---
title: "Setting up your own digital garden with Jekyll — Maxime Vaillancourt"
type: clipping
category: 기술
tags: [Digital Garden, Jekyll, PKM, Note-taking, Static Site]
clipped: 2026-04-15T16:45:01.053926
clipped_by: "web-clipper"
clip_type: URL
url: https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll
notion_page_id: 3430c76f-6ccb-81d9-9cbf-e3ffaf2ec7d7
notion_url: https://www.notion.so/3430c76f6ccb81d99cbfe3ffaf2ec7d7
---

# Setting up your own digital garden with Jekyll — Maxime Vaillancourt

## 요약

Jekyll 기반의 디지털 가든 템플릿으로 개인 지식 정원을 빠르게 구축하는 방법을 소개하는 튜토리얼이다. Ruby, RubyGems, Git을 설치한 뒤 GitHub에서 템플릿 저장소를 포크하고, Netlify에 연결하면 마크다운 노트를 인터넷에 자동 배포할 수 있다. Obsidian 사용자를 위한 연동 가이드와 Roam Research 백업 변환 도구도 함께 제공된다. GitHub에 push할 때마다 Netlify가 자동으로 배포하므로 유지 관리도 간편하다.

## 원본 링크

- https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll

## 원문 발췌

Eager to try the demo of the template? digital-garden-jekyll-template.netlify.app
Digital gardens and public note-taking spaces are all the rage these days, as they are a great way to foster an environment where ideas mesh together and others can take inspiration from. You can set up a digital garden of your own in a few minutes, and have your own personal corner of the Internet where you will seed and grow ideas.
If you are familiar with Markdown and/or HTML, you will be right at home, as that is how your notes will be formatted.
If you happen to use Obsidian to work on your notes, you will likely want to open this guide from Mike and read through it in parallel with this one.
Instructions:
0. Set up prerequisites: Ruby, RubyGems, Git. Create accounts on GitHub and Netlify.
1. Create a fork of the template repository (maximevaillancourt/digital-garden-jekyll-template).
2. Clone your repository locally.
3. Test out the site locally with bundle exec jekyll serve.
4. Connect your GitHub repository to Netlify for automatic deployments.
5. Start tending to your digital garden - update files, add notes, push to GitHub.
