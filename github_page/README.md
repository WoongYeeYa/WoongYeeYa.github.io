# React + Vite

프로젝트 수정 전 [프로젝트 및 컴포넌트 가이드라인](docs/component-guidelines.md)을 확인합니다. 사용자가 정한 화면 구성, 이력서, 카테고리, N8N 글과 이미지 사용 기준을 정리한 문서입니다.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 게시글 관리

글 작성 UI는 데이터베이스 연동 전까지 주석 처리되어 있습니다.
기존 편집기와 저장 훅은 보관하며, 현재 화면은 `src/data/posts.js`의 정적 게시글을 표시합니다.

- `thumbnail`: 썸네일 이미지 경로 (현재 예시는 `src/assets/post-*.svg`를 import)
- `sections.pipeline`: 순서대로 표시할 공부 단계의 문자열 배열
- `sections.problems`: 진행하면서의 문제점 문단 배열
- `sections.reframing`: 리프레이밍 문단 배열
- `sections.solution`: 솔루션 문단 배열
- `sections.impact`: 임팩트 문단 배열
- `sections.reflection`: 리플렉션 문단 배열

각 문단은 일반 텍스트로 작성합니다. 기존 `content`, `contentHtml` 대신 위 여섯 항목을 상세 화면에 표시합니다.
카드는 넓은 화면에서 2열, 600px 이하에서는 1열입니다.

게시글의 `topic`은 왼쪽 카테고리 분류입니다(예: AI, 코딩, 일상·기록).
`postCategories`에 항목을 추가하면 글이 없어도 카테고리에 표시됩니다.
`category`는 카드에 표시하는 세부 주제(Web, React 등)로 유지됩니다.

메인 페이지의 이력서 정보는 `src/data/resume.js`에서 수정합니다.
이름, 소개, GitHub, 이메일, 기술 스택, 경력, 프로젝트, 학력을 관리할 수 있습니다.
비어 있는 경력·학력·이메일은 화면에 '작성 예정'으로 표시됩니다.
