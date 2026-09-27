# magpie-site

🐦 [magpie-wiki](https://github.com/maxseats/magpie-wiki) 콘텐츠의 Quartz 기반 퍼블리시 사이트.

- Quartz v4 (https://quartz.jzhao.xyz/)
- ♻️ 2026-09-27 부활: **GitHub Pages** 배포 (`.github/workflows/deploy.yml`) → https://maxseats.github.io/magpie-site/
- (구) Cloudflare Pages + Basic Auth(`functions/_middleware.ts`)는 GH Pages에선 미적용 — 레포가 public이라 노출 범위 동일
- content/ 폴더는 magpie-wiki 레포에서 GitHub Actions로 자동 동기화됨
