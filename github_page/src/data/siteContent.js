export const tabs = [
  { id: 'home', label: '메인 페이지' },
  { id: 'about', label: '내 소개' },
  { id: 'posts', label: '작성 글' },
]

export const featuredPosts = [
  {
    id: 'github-pages-blog-start',
    title: 'GitHub Pages로 나만의 블로그 시작하기',
    date: '2026.06.10',
    category: 'Web',
    excerpt:
      '정적 페이지부터 React 기반 블로그까지, 작은 개인 사이트를 오래 굴릴 수 있게 만드는 기본 구조를 정리합니다.',
    content:
      'GitHub Pages는 작은 개인 사이트를 시작하기에 부담이 적은 선택입니다. 정적 파일을 배포하는 방식이라 운영 비용이 거의 들지 않고, React와 Vite를 함께 쓰면 컴포넌트 기반으로 화면을 관리할 수 있습니다.\n\n처음에는 페이지 구조를 단순하게 유지하는 것이 좋습니다. 메인 페이지, 소개, 작성 글처럼 큰 흐름을 나눈 뒤 글 목록과 상세 화면을 차근차근 붙이면 나중에 확장하기 쉽습니다.',
    readTime: '4 min read',
  },
  {
    id: 'small-notes-often',
    title: '작게 기록하고 자주 배포하는 습관',
    date: '2026.06.08',
    category: 'Notes',
    excerpt:
      '완벽한 글보다 지속 가능한 기록이 중요합니다. 아이디어를 짧게 붙잡고 공개하는 루틴을 소개합니다.',
    content:
      '글을 오래 쓰려면 처음부터 완성된 글을 목표로 두기보다 작은 단위로 기록하는 편이 좋습니다. 오늘 막힌 문제, 해결한 코드, 다음에 다시 볼 메모만 남겨도 충분히 쌓입니다.\n\n자주 배포하면 사이트가 살아 있는 공간처럼 느껴집니다. 짧은 글이라도 공개하고 다시 다듬는 흐름을 만들면 기록이 부담이 아니라 습관에 가까워집니다.',
    readTime: '3 min read',
  },
  {
    id: 'react-project-structure',
    title: 'React 프로젝트를 정리하며 보는 것들',
    date: '2026.06.03',
    category: 'React',
    excerpt:
      '컴포넌트 경계, 상태 위치, 스타일 규칙처럼 작은 선택에서도 차이를 만드는 정리 기준을 다룹니다.',
    content:
      'React 프로젝트는 화면이 커질수록 파일을 어떻게 나누는지가 중요해집니다. 반복되는 UI는 컴포넌트로 분리하고, 정적 데이터는 별도 파일로 빼두면 수정할 위치가 명확해집니다.\n\n상태는 가능한 한 필요한 곳 가까이에 두되, 여러 컴포넌트가 함께 써야 하는 값은 상위 컴포넌트에서 관리합니다. 이런 작은 기준이 쌓이면 프로젝트를 다시 열었을 때 훨씬 빠르게 이해할 수 있습니다.',
    readTime: '5 min read',
  },
]

export const topics = ['React', 'GitHub Pages', 'Frontend', 'Daily Log', 'Projects']
