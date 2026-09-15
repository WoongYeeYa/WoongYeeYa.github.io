import n8nThumbnail from '../assets/thumbnail/post-n8n.svg'
import cloudflaredImage from '../assets/screenshot/n8n-study-1/cloudflared설정.png'
import environmentImage from '../assets/screenshot/n8n-study-1/N8N 환경설정.png'
import ownerImage from '../assets/screenshot/n8n-study-1/기본 로그인.png'
import loginImage from '../assets/screenshot/n8n-study-1/n8n기본화면.png'
import overviewImage from '../assets/screenshot/n8n-study-1/기본화면.png'
import resetImage from '../assets/screenshot/n8n-study-1/비밀번호 초기화.png'

export const n8nStudy1 = {
    id: 'n8n-study-1',
    title: 'N8N 공부 1 · 환경 설정과 기본 개념',
    date: '2026.09.11',
    topic: 'AI',
    category: 'N8N',
    thumbnail: n8nThumbnail, // 추후 전달받은 썸네일로 교체
    excerpt: 'Docker에서 localhost로 설정되는 Webhook URL 문제를 Cloudflared 임시 주소로 해결하고 n8n 실행 환경을 구성했습니다. 계정 설정과 기본 화면, 자동화·API·HTTP·노드의 기본 개념과 계정 초기화 방법을 함께 정리합니다.',
    readTime: '10 min read',
    explanationOnly: true,
    explanationTitle: '환경 설정과 기본 개념',
    explanationDescription: '실행 환경 구성부터 기본 사용과 계정 초기화까지',
    sections: {
      pipeline: ['자동화·API·HTTP·Webhook·Node 기본 개념', 'localhost Webhook URL 문제 확인', 'Cloudflared 터널로 외부 임시 주소 발급', 'Docker 컨테이너의 WEBHOOK_URL 설정', '소유자 계정 생성', '로그인과 기본 화면', '비밀번호를 잊었을 때 계정 초기화'],
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
      {
        title: '환경 설정 1. CLOUDFLARED · 로컬 n8n을 외부 주소로 연결',
        image: cloudflaredImage,
        imageAlt: 'localhost 5678을 대상으로 cloudflared 터널을 실행하고 trycloudflare 주소를 발급받은 터미널',
        paragraphs: ['Docker에서 WEBHOOK_URL 값을 따로 입력하지 않으면 n8n의 Webhook 주소가 localhost를 기준으로 만들어집니다. localhost는 현재 PC 내부를 가리키므로 외부 서비스가 해당 주소로 요청을 보낼 수 없고, 외부 이벤트를 기다리는 Webhook 노드가 실행되지 않습니다.', '외부 서비스가 로컬 n8n의 Webhook에 접근할 수 있도록 Cloudflared로 임시 공개 주소를 발급받았습니다. 터미널에서 아래 명령어를 실행하면 localhost의 5678 포트가 임시 주소와 연결됩니다.', '발급된 임시 주소는 Docker의 WEBHOOK_URL에 입력합니다. 이후 n8n에서 생성되는 Test URL과 Production URL이 외부에서 접근 가능한 주소를 사용하게 됩니다. Quick Tunnel을 새로 실행해 주소가 바뀌면 WEBHOOK_URL도 새 주소로 맞춥니다.'],
        command: 'cloudflared tunnel --url http://localhost:5678',
        result: 'localhost:5678과 연결된 외부 HTTPS 임시 주소가 발급되어, 외부 서비스가 n8n Webhook URL로 요청을 보낼 수 있는 경로가 만들어졌습니다.',
      },
      {
        title: '환경 설정 2. N8N · Docker 실행 환경과 로컬 저장',
        image: environmentImage,
        imageAlt: 'Docker Desktop에서 n8n 컨테이너의 포트, 로컬 폴더 연결과 WEBHOOK_URL을 지정한 화면',
        paragraphs: ['Docker Desktop에서 n8nio/n8n 이미지를 실행할 때 포트, 저장 위치와 환경 변수를 지정하는 화면입니다. 컨테이너 이름은 n8n-docker이고, 호스트의 5678 포트를 컨테이너의 5678 포트와 연결합니다.', '로컬 폴더 C:/workspace/n8n-data를 컨테이너의 /home/node/.n8n에 연결해 n8n 데이터가 PC에 저장되도록 구성했습니다. WEBHOOK_URL에는 앞에서 발급받은 Cloudflared HTTPS 주소를 입력합니다.'],
        items: ['Ports: 5678 → 5678/tcp로 연결합니다.', 'Volumes: 로컬 데이터 폴더 → /home/node/.n8n을 연결합니다.', 'WEBHOOK_URL: 외부에서 n8n Webhook에 요청을 보낼 때 사용하는 기본 주소입니다.', 'Run: 지정한 설정으로 컨테이너를 실행합니다.'],
        result: 'n8n 컨테이너가 5678 포트로 실행되고, Webhook URL에는 Cloudflared 주소가 적용되었습니다. 워크플로와 설정 데이터는 연결한 로컬 폴더에 저장됩니다.',
      },
      {
        title: '환경 설정 3. 기본 로그인 · 소유자 계정 생성',
        image: ownerImage,
        imageAlt: 'n8n 소유자 계정의 이메일, 이름과 비밀번호를 입력하는 초기 설정 화면',
        paragraphs: ['n8n을 처음 사용할 때 소유자 계정을 만드는 화면입니다. 브라우저에서 http://localhost:5678로 접속하고 Set up owner account에서 이메일, 이름과 비밀번호를 입력한 뒤 Next로 진행합니다.'],
        result: '소유자 계정이 생성되어 n8n 로그인 화면과 워크플로 관리 기능을 사용할 수 있게 되었습니다.',
      },
      {
        title: '환경 설정 4. N8N 기본화면 · 계정으로 로그인',
        image: loginImage,
        imageAlt: '이메일과 비밀번호로 접속하는 n8n Sign in 화면',
        paragraphs: ['계정 설정 이후 n8n에 접속할 때 사용하는 로그인 화면입니다. 앞에서 만든 계정의 Email과 Password를 입력하고 Sign in으로 들어갑니다.'],
        result: '생성한 계정으로 인증되어 n8n 기본 화면으로 이동했습니다.',
      },
      {
        title: '로그인 후 기본화면 · 워크플로와 실행 기록 관리',
        image: overviewImage,
        imageAlt: '워크플로 목록과 Credentials, Executions, Data tables 탭을 보여 주는 n8n Overview 화면',
        paragraphs: ['로그인 후 워크플로를 만들고 관리하는 Overview 화면입니다. Create Workflow로 새 워크플로를 만들고, 목록에서 기존 작업을 열 수 있습니다.'],
        items: ['Workflows: 자동화 작업 목록을 관리합니다.', 'Credentials: 외부 서비스 연결에 사용하는 자격 증명을 관리합니다.', 'Executions: 워크플로 실행 기록을 확인합니다.', 'Data tables: n8n 내부에서 사용할 테이블 데이터를 관리합니다.'],
        result: '로그인 후 워크플로 목록과 Credentials, Executions, Data tables 메뉴에 접근할 수 있는 실행 환경을 확인했습니다.',
      },
      {
        title: '비밀번호를 잊었을 때 · Exec에서 계정 초기화',
        image: resetImage,
        imageAlt: 'Docker Desktop의 n8n-docker 컨테이너 Exec 탭에서 user-management reset 명령어를 입력한 화면',
        paragraphs: ['비밀번호를 잊어 로그인할 수 없을 때 Docker Desktop의 n8n 컨테이너 안에서 사용자 관리를 초기화하는 방법입니다. 기존 사용자 계정을 초기화해 소유자 계정을 다시 만드는 초기 설정 상태로 돌아갑니다.'],
        steps: ['Docker Desktop에서 Containers → n8n-docker로 이동합니다.', 'Exec 탭을 열고 아래 명령어를 입력한 뒤 Enter로 실행합니다.', '명령어 완료 후 n8n 컨테이너를 재시작하고 브라우저에서 n8n에 다시 접속합니다.', 'Set up owner account에서 이메일, 이름과 새 비밀번호를 설정합니다.'],
        command: 'n8n user-management:reset',
        afterParagraphs: ['현재 환경에서는 /home/node/.n8n이 로컬 폴더 C:/workspace/n8n-data에 연결되어 있으므로, 이 계정 초기화 명령만으로 기존 워크플로와 자격 증명 데이터가 삭제되지는 않습니다. 같은 로컬 저장 폴더를 유지한 상태에서 계정을 다시 설정해 사용합니다.'],
        result: '사용자 관리 정보가 초기 상태로 돌아가 소유자 계정을 다시 만들 수 있으며, 로컬 볼륨에 저장된 기존 워크플로 데이터는 유지됩니다.',
      },
    ],
  }
