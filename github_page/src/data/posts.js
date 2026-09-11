import webThumbnail from '../assets/post-web.svg'
import notesThumbnail from '../assets/post-notes.svg'
import reactThumbnail from '../assets/post-react.svg'

// 정적 게시글: thumbnail과 sections의 여섯 항목을 수정해 글을 관리합니다.
export const postCategories = ['AI', '코딩', '일상·기록']

export const posts = [
  {
    id: 'github-pages-blog-start',
    thumbnail: webThumbnail,
    sections: {
      pipeline: ['페이지 구조 설계', 'React 컴포넌트 구성', 'Vite로 빌드', 'GitHub Pages 배포'],
      problems: ['정적 사이트에서는 서버와 데이터베이스를 사용하는 글 저장 기능을 그대로 제공하기 어렵습니다.'],
      reframing: ['관리 화면을 먼저 완성하기보다, 작은 개인 사이트를 오래 운영할 수 있는 구조에 집중합니다.'],
      solution: ['게시글을 별도 데이터 파일로 관리하고 목록과 상세 화면을 컴포넌트로 분리합니다. 수정한 내용은 빌드한 정적 파일에 포함합니다.'],
      impact: ['서버 없이도 코드와 게시글을 함께 버전 관리할 수 있는 구조가 됩니다.'],
      reflection: ['처음에는 메인, 소개, 글 목록처럼 단순한 흐름으로 시작하고 실제 필요에 따라 기능을 확장합니다.'],
    },
    title: 'GitHub Pages로 나만의 블로그 시작하기',
    date: '2026.06.10',
    category: 'Web',
    topic: '코딩',
    excerpt:
      '정적 페이지부터 React 기반 블로그까지, 작은 개인 사이트를 오래 굴릴 수 있게 만드는 기본 구조를 정리합니다.',
    content:
      'GitHub Pages는 작은 개인 사이트를 시작하기에 부담이 적은 선택입니다. 정적 파일을 배포하는 방식이라 운영 비용이 거의 들지 않고, React와 Vite를 얹으면 컴포넌트 기반으로 화면을 관리할 수 있습니다.\n\n처음에는 페이지 구조를 단순하게 유지하는 것이 좋습니다. 메인 페이지, 소개, 작성 글처럼 큰 흐름을 나눈 뒤 글 목록과 상세 화면을 차근차근 붙이면 나중에 확장하기 쉽습니다.',
    contentHtml: '',
    readTime: '4 min read',
  },
  {
    id: 'small-notes-often',
    thumbnail: notesThumbnail,
    sections: {
      pipeline: ['오늘의 질문 수집', '짧은 메모 작성', '해결 과정 정리', '공개 후 보완'],
      problems: ['처음부터 완성된 글을 목표로 하면 기록을 시작하는 부담이 커집니다.'],
      reframing: ['기록의 단위를 완성된 글에서 오늘 막힌 문제와 해결한 코드로 줄입니다.'],
      solution: ['문제, 시도한 방법, 다음에 확인할 내용을 짧게 남기고 공개한 뒤 다시 다듬습니다.'],
      impact: ['작은 메모가 다음 글의 출발점이 되고, 해결 과정을 다시 찾아볼 수 있습니다.'],
      reflection: ['글의 길이보다 다시 읽었을 때 도움이 되는지 확인하며 기록의 흐름을 유지합니다.'],
    },
    title: '작게 기록하고 자주 배포하는 습관',
    date: '2026.06.08',
    category: 'Notes',
    topic: '일상·기록',
    excerpt:
      '완성된 글보다 지속 가능한 기록이 중요합니다. 아이디어를 짧게 붙잡고 공개하는 루틴을 소개합니다.',
    content:
      '글을 오래 쓰려면 처음부터 완성된 글을 목표로 삼기보다 작은 단위로 기록하는 편이 좋습니다. 오늘 막힌 문제, 해결한 코드, 다음에 다시 볼 메모만 남겨도 충분한 출발점이 됩니다.\n\n자주 배포하면 사이트가 살아 있는 공간처럼 느껴집니다. 짧은 글이라도 공개하고 다시 다듬는 흐름을 만들면 기록의 부담이 줄고 글감은 가까워집니다.',
    contentHtml: '',
    readTime: '3 min read',
  },
  {
    id: 'react-project-structure',
    thumbnail: reactThumbnail,
    sections: {
      pipeline: ['화면 역할 확인', '컴포넌트 경계 나누기', '상태 위치 결정', '스타일 규칙 정리'],
      problems: ['화면이 커질수록 UI, 데이터, 상태가 섞여 수정할 위치를 찾기 어려워집니다.'],
      reframing: ['파일 개수를 줄이는 것보다 각 파일의 역할과 변경 이유를 분명히 하는 데 집중합니다.'],
      solution: ['반복되는 UI를 컴포넌트로 분리하고 정적인 데이터는 별도 파일에 둡니다. 상태는 필요한 곳 가까이에 두고 공유가 필요할 때 상위로 올립니다.'],
      impact: ['화면과 데이터의 수정 위치가 명확해지고, 프로젝트를 다시 열었을 때 구조를 파악하기 쉬워집니다.'],
      reflection: ['분리 자체를 목표로 삼지 않고 실제로 반복되거나 독립적으로 바뀌는 부분부터 정리합니다.'],
    },
    title: 'React 프로젝트를 정리하며 보는 것들',
    date: '2026.06.03',
    category: 'React',
    topic: '코딩',
    excerpt:
      '컴포넌트 경계, 상태 위치, 스타일 규칙처럼 작은 선택에서 차이를 만드는 정리 기준을 다룹니다.',
    content:
      'React 프로젝트는 화면이 커질수록 파일을 어떻게 나누는지가 중요해집니다. 반복되는 UI는 컴포넌트로 분리하고, 정적인 데이터는 별도 파일로 빼두면 수정할 위치가 명확해집니다.\n\n상태는 가능한 한 필요한 곳 가까이에 두되, 여러 컴포넌트가 함께 써야 하는 값은 상위 컴포넌트에서 관리합니다. 이런 작은 기준이 쌓이면 프로젝트를 다시 열었을 때 훨씬 빠르게 이해할 수 있습니다.',
    contentHtml: '',
    readTime: '5 min read',
  },
]
