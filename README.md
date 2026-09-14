# WoongYeeYa.github.io

React + Vite 기반 개인 이력서 및 공부 기록 사이트입니다. 실제 앱은 `github_page` 폴더에 있습니다.

## GitHub Pages 배포

공개 주소: https://woongyeeya.github.io/

GitHub Pages는 `main` 브랜치의 `/ (root)`에 있는 빌드 파일을 사용합니다. 콘텐츠를 수정한 뒤 아래 명령을 실행하고, 소스와 루트 배포 파일을 함께 커밋·푸시합니다.

```powershell
cd github_page
npm.cmd run build:pages
cd ..
git add .
git commit -m "Update site"
git push origin main
```

`build:pages`는 Vite 빌드 후 루트의 `index.html`, `assets`, `favicon.svg`, `icons.svg`, `.nojekyll`을 갱신합니다. 루트 파일은 직접 편집하지 않고 `github_page`의 소스를 수정합니다. GitHub Pages 배포가 완료되면 공개 사이트에 반영됩니다.

- [프로젝트 가이드라인](github_page/docs/component-guidelines.md): 화면 구성, 게시글 형식, 요약 길이, 이미지 사용 및 개발 규칙
- [앱 안내](github_page/README.md): 콘텐츠 관리 방법
