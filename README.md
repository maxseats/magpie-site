> ⚠️ **ARCHIVED (2026-09-05)** — Magpie 클리퍼 서비스는 2026-09-05에 종료되었습니다(IDEA-130). 사용 빈도가 낮아 유지 가치보다 운영 부담이 컸습니다. 코드·데이터는 보존용 읽기 전용 아카이브이며, 필요 시 `gh repo unarchive`로 부활할 수 있습니다. 수집 데이터 백업: Notion Clip DB 19건은 llm-wiki `raw_sources/clippings/magpie_notion_export_2026-09-05/`, 위키 본문은 `maxseats/magpie-wiki` main 브랜치.

# magpie-site

🐦 [magpie-wiki](https://github.com/maxseats/magpie-wiki) 콘텐츠의 Quartz 기반 퍼블리시 사이트.

- Quartz v4 (https://quartz.jzhao.xyz/)
- Cloudflare Pages 배포
- HTTP Basic Auth 보호 (`MAGPIE_PASSWORD` 환경변수)
- content/ 폴더는 magpie-wiki 레포에서 GitHub Actions로 자동 동기화됨
