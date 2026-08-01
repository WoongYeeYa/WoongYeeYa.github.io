# 컴포넌트 가이드라인

이 프로젝트를 수정하기 전에 이 문서를 먼저 확인한다.

## 폴더 역할

- `src/App.jsx`: 앱 전체 조합과 최상위 탭 상태를 관리한다.
- `src/components`: 재사용 가능한 UI 조각과 페이지 단위 섹션을 둔다.
- `src/data`: 탭 라벨, 기본 게시글, 토픽처럼 정적인 표시 데이터를 둔다.
- `src/hooks`: 재사용 가능한 상태 로직과 브라우저 저장소 로직을 둔다.
- `src/styles`: CSS를 목적별로 나눠 둔다. `styles/app.css`는 스타일 import 진입점으로만 사용한다.
- `src/utils`: React 훅이나 컴포넌트가 아닌 작은 브라우저/파일 헬퍼를 둔다.
- `docs`: 프로젝트 유지보수 규칙을 둔다.

## 컴포넌트 규칙

- 같은 UI 패턴이 두 번 이상 나오거나 앞으로 커질 가능성이 있으면 컴포넌트로 분리한다.
- 컴포넌트 이름은 역할이 드러나게 짓는다. 예: `PageTabs`, `PostCard`, `PostList`, `SectionHeading`.
- 페이지 단위 섹션에는 `Page` 접미사를 붙인다. 예: `AboutPage`, `PostsPage`.
- 작은 표시용 컴포넌트는 데이터를 props로 받는다.
- 정적인 목록 데이터는 표시 컴포넌트 안에 두지 말고 `src/data`에 둔다.
- 재사용하거나 독립적으로 테스트하기 좋은 공유 상태 로직은 `src/hooks`에 둔다.

## 게시글 기능 규칙

- `PostsPage`는 글쓰기 작업 공간의 흐름을 담당한다. 글 목록 탭, 글 작성 탭, 선택된 게시글, 수정 모드를 여기서 관리한다.
- `useStoredPosts`는 `localStorage`를 통한 게시글 임시 저장을 담당한다.
- `src/data/posts.js`는 GitHub Pages에 게시될 글의 커밋용 원본 데이터다.
- 게시글을 실제로 배포하려면 게시글 내보내기 흐름으로 새 `posts.js` 파일을 만든 뒤 커밋한다.
- `PostEditor`는 새 글 작성과 기존 글 수정 흐름을 모두 지원해야 한다.
- `RichTextEditor`는 본문 편집 기능을 담당한다. 글자 강조, 폰트 크기, 글자 색상, 이미지 업로드를 여기서 관리한다.
- `PostDetail`은 읽기 화면의 동작을 props로 처리한다. 예: 뒤로 가기, 수정, 삭제.
- `PostList`와 `PostCard`는 표시 역할에 집중하고 저장 로직을 갖지 않는다.
- 현재 이 사이트에는 백엔드가 없으므로 업로드한 이미지는 게시글 본문 안에 data URL로 저장한다.

## 레이아웃 규칙

- 메인 페이지 탭은 페이지 제목 아래에 두고, 페이지 전체 너비를 사용한다.
- 페이지 탭을 헤더 오른쪽 상단 영역으로 옮기지 않는다.
- 카드는 게시글, 프로필 패널, 토픽 패널처럼 실제 콘텐츠 그룹에만 사용한다.
- 모바일에서는 탭이 세로로 쌓일 수 있지만, 텍스트가 잘리면 안 된다.

## CSS 규칙

- 새 기능의 CSS를 큰 앱 스타일시트 하나에 바로 몰아넣지 않는다.
- 스타일은 `src/styles` 아래의 목적별 파일 중 가장 가까운 곳에 추가한다. 예: layout, navigation, home, posts, editor, responsive.
- `src/styles/app.css`는 프로젝트 전체 import 순서를 바꿔야 할 때를 제외하고 import 전용 진입점으로 유지한다.
- 새 페이지나 규모 있는 기능을 추가할 때는 `src/styles`에 대응하는 CSS 파일을 만들고 `styles/app.css`에서 import한다.
- 긴 글 작성 중에도 편집 도구를 찾기 쉽도록 sticky 에디터 컨트롤은 `src/styles/editor.css`에 둔다.

## 마무리 전 확인

- React 구조를 바꾼 뒤에는 `npm run build`를 실행한다.
- JSX나 스타일을 바꾼 뒤에는 `npm run lint`를 실행한다.
- 새 파일이 위의 component/data/hook/style/utils 분리 규칙을 따르는지 확인한다.
