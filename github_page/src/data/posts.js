import webThumbnail from '../assets/post-web.svg'
import notesThumbnail from '../assets/post-notes.svg'
import reactThumbnail from '../assets/post-react.svg'
import n8nThumbnail from '../assets/post-n8n.svg'
import { n8nStudy2 } from './n8nStudy2'

// 정적 게시글: thumbnail과 sections의 여섯 항목을 수정해 글을 관리합니다.
export const postCategories = ['AI', '코딩', '일상·기록']

export const posts = [
  n8nStudy2,
  {
    id: 'n8n-study-1',
    title: 'N8N 공부 1',
    date: '2026.09.11',
    topic: 'AI',
    category: 'N8N',
    thumbnail: n8nThumbnail, // 추후 전달받은 썸네일로 교체
    excerpt: '자동화의 첫걸음. 레스토랑 비유로 이해하는 API부터 HTTP 요청과 응답, 자격 증명, n8n 노드의 구성까지 정리한 첫 번째 공부 메모입니다.',
    readTime: '8 min read',
    sections: {
      pipeline: ['자동화란 무엇인가?', 'API와 Webhook 이해하기', 'HTTP 요청과 응답 정리', 'n8n 노드 살펴보기'],
      problems: [
        "API? Webhook? ??, ??? ??? ?? ??? ???? ??. ??? ??? ?? ? ??? ??? ??? ?? ???? ?? ???.",
      ],
      reframing: [
        "???? ??? ?? ? ?? ? ?? ? ???? ??? ???? ????. ??? ???? ? ??? ?? ??? ????.",
      ],
      solution: [
        "?? ??? ?Webhook ? ??? ?? ? ????? ????. ?? JSON ??? ?? ??? ?????? ?? ??? ??? ????.",
      ],
      impact: [
        "????API?HTTP???? ??? ???? ??? ??? ?? ??? ????. ?? ??? ?? ??? ?? ?? ? ????.",
      ],
      reflection: [
        "???? ?? ??? ??? ?? ??? ???? ??? ??? ????. ?? ????? ?? ??? ? ?? ?? ?? ? ???.",
      ],
    },
    studyNotes: [
      {
        title: '1. 자동화란 무엇인가?',
        paragraphs: [
          '자동화는 반복되는 작업의 시작 조건과 처리 규칙을 정해 시스템이 수행하도록 만드는 것이다. 예를 들어 신청서가 접수되면 내용을 정리하고 담당자에게 알림을 보내는 과정을 하나의 흐름으로 구성할 수 있다.',
          '기본 구조는 시작 조건(Trigger) → 데이터 처리 → 결과 전달이다. 모든 일을 한 번에 자동화하기보다 입력과 결과가 명확한 작은 작업부터 나누어 생각한다.',
        ],
      },
      {
        title: '2. API와 Webhook이란 무엇인가?',
        paragraphs: [
          'API (Application Programming Interface)',
          '요청(Request) → 인터페이스(Interface) → 애플리케이션(Application) → 응답(Response)',
          '레스토랑에서 음식을 주문한다고 생각해 보자. 나의 음식 주문 → 웨이터 → 주방 → 웨이터가 음식을 전달 → 나로 이어진다. 여기서 웨이터는 Interface, 주방은 Application에 비유할 수 있다.',
          '왜 API가 필요한가? 내부의 복잡한 구현을 직접 다루지 않고, 정해진 인터페이스로 필요한 기능을 사용할 수 있기 때문이다.',
        ],
      },
      {
        title: 'HTTP 요청의 네 가지 요소',
        items: ['URL: 요청을 보낼 주소', 'Method: 수행할 작업을 나타내는 HTTP 메소드', 'Header: 요청에 대한 부가 정보', 'Body: 전달할 데이터 (선택 사항)'],
      },
      {
        title: '기본 HTTP 메소드',
        items: ['GET: 정보 받기 (receive information)', 'POST: 정보 보내기 (send information)', '그 외 메소드: DELETE, PUT, PATCH'],
      },
      {
        title: '요청 Header',
        paragraphs: ['헤더는 요청에 대한 세부 정보를 전달한다. 원하는 응답 형식, 언어, 인증 정보 등을 담을 수 있다.', '예: Accept: application/json은 서버에게 JSON 형태의 응답을 받고 싶다고 알리는 것이다.'],
      },
      {
        title: 'Credential · 자격 증명',
        paragraphs: ['Credential은 애플리케이션에 자신을 증명하기 위한 정보다. Authentication(인증)과 함께 이해해야 하는 개념이다.', 'API를 사용하려면 인증이 필요한 경우가 많다. API Key는 자격 증명의 한 방법이며, 필요한 인증 방식은 API마다 다를 수 있다.'],
      },
      {
        title: 'HTTP 응답의 세 가지 요소',
        items: ['Status Code: 요청의 처리 결과를 나타내는 코드', 'Header: 응답에 대한 부가 정보 (Content-Length, Content-Type, Expires 등)', 'Body: 반환된 실제 데이터 (HTML, JSON 등)'],
      },
      {
        title: 'Status Code 예시',
        items: ['200: 성공 (OK)', '401: 인증이 필요하거나 인증에 실패함 (Unauthorized)', '404: 요청한 리소스를 찾을 수 없음 (Not Found)', '500: 서버 내부 오류 (Internal Server Error)'],
      },
      {
        title: 'Webhook',
        paragraphs: [
          'Webhook은 어떤 사건이 발생했을 때, 그 사건을 알리는 데이터를 미리 등록된 URL로 보내는 방식이다. 예를 들어 신청서 서비스가 새 제출을 감지하면 수신 URL로 제출 내용을 보내 후속 작업을 시작하게 할 수 있다.',
          '주기적으로 API를 호출해 새 데이터가 있는지 확인하는 방식이 폴링이라면, Webhook은 이벤트가 생긴 쪽이 알림을 보내는 방식이다. 이때 Webhook 알림 자체도 HTTP 요청으로 전달될 수 있다.',
          'n8n의 Webhook 노드는 외부 요청을 받아 워크플로를 시작하는 트리거다. Test URL과 Production URL을 구분하며, 테스트할 때는 Listen for Test Event로 수신을 시작한다. 운영 실행은 게시한 워크플로의 Production URL을 사용하고 Executions에서 결과를 확인한다.',
        ],
      },
      {
        title: '3. Node란 무엇인가?',
        paragraphs: ['Node는 n8n 워크플로를 구성하는 재료라고 생각할 수 있다.', '역할을 기준으로 이해한 세 가지 구분: Entry Point(진입점), Function(처리), Exit Point(출력).'],
        items: ['Triggers: 워크플로를 시작하는 조건이나 이벤트', 'Actions in app: 연결한 앱에서 데이터 조회·생성 등의 작업 수행', 'Data transformation: 다음 단계에 맞게 데이터 형태와 값을 정리', 'Flow: 조건에 따라 실행 경로를 나누거나 흐름을 제어', 'Files: 파일 데이터를 읽고 변환하는 작업', 'Advanced: 기본 노드 구성에서 더 나아간 처리에 사용할 기능'],
      },
    ],
  },
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
