import addedImage2_2_0 from '../assets/screenshot/n8n-study-2/캘린더 API.png'
import addedImage2_1_0 from '../assets/screenshot/n8n-study-2/이메일 에이전트 프롬프트 입력.png'
import addedImage2_1_1 from '../assets/screenshot/n8n-study-2/성공한 이메일 에이전트.png'
import addedImage2_0_0 from '../assets/screenshot/n8n-study-2/구글 api 콘솔 접속.png'
import addedImage2_0_1 from '../assets/screenshot/n8n-study-2/구글 sheet api.png'
import addedImage2_0_2 from '../assets/screenshot/n8n-study-2/구글시트 연결중1.png'
import addedImage2_0_4 from '../assets/screenshot/n8n-study-2/리디렉션 URL.png'
import addedImage2_0_5 from '../assets/screenshot/n8n-study-2/리디렉션입력.png'
import addedImage2_0_6 from '../assets/screenshot/n8n-study-2/성공시 팝업.png'
import addedImage2_0_7 from '../assets/screenshot/n8n-study-2/샘플데이타시트생성.png'
import addedImage2_0_8 from '../assets/screenshot/n8n-study-2/시트 노드 설정.png'
import addedImage2_0_9 from '../assets/screenshot/n8n-study-2/프롬프트 입력.png'
import addedImage2_0_10 from '../assets/screenshot/n8n-study-2/성공한 모습.png'
import thumbnail from '../assets/thumbnail/post-n8n-calendar.svg'

import workflowImage from '../assets/screenshot/n8n-study-2/캘린더.png'
import sheetsImage from '../assets/screenshot/n8n-study-2/구글 시트 테스트.png'
import emailImage from '../assets/screenshot/n8n-study-2/이메일 테스트.png'

export const n8nStudy2 = {
  id: 'n8n-study-2',
  title: 'N8N 공부 2 · 캘린더·시트·이메일 비서',
  topic: 'AI',
  category: 'N8N · App Tools',
  thumbnail,
  excerpt: "채팅과 외부 워크플로 요청으로 구글 시트, 이메일과 캘린더를 다루는 AI 비서입니다. 각 앱의 조회·수정·전송 작업을 Agent의 도구로 연결한 구성입니다.",
  explanationOnly: true,
  sections: { pipeline: ["구글 시트 조회·추가·수정·삭제","Gmail 메시지 조회·전송·삭제","캘린더 일정 조회·생성·삭제"] },
  studyNotes: [
    {
      "title": "1. 구글 시트 테스트 · 채팅으로 시트 데이터 관리",
      "image": sheetsImage,
      "imageAlt": "채팅 Agent에 모델, 메모리와 구글 시트 작업 도구를 연결한 구성",
      "paragraphs": [
        "사용자의 채팅 요청으로 Google Sheets 데이터를 조회하거나 변경하기 위한 워크플로입니다. 채팅 트리거가 요청을 AI Agent에 전달하고, Agent는 OpenAI Chat Model과 Simple Memory를 사용해 요청과 대화 맥락을 처리합니다."
      ],
      "items": [
        "Get row(s): 시트의 행 데이터를 조회합니다.",
        "Append or update row: 행을 추가하거나 기존 행을 갱신합니다.",
        "Update row: 기존 행의 값을 수정합니다.",
        "Delete rows or columns: 시트의 행 또는 열을 삭제합니다."
      ],
      "result": "Agent가 요청에 맞는 Google Sheets 도구를 선택해 행을 조회하고, 새 행 추가·기존 값 수정·행 또는 열 삭제 작업으로 연결할 수 있게 되었습니다."
    },
    {
      "title": "1-1. Google API Console 접속",
      "image": addedImage2_0_0,
      "imageAlt": "구글 api 콘솔 접속",
      "paragraphs": [
        "구글 시트 연동에 사용할 API를 가져오기 위해 Google API Console 사이트에 접속합니다."
      ]
    },
    {
      "title": "1-2. Google Sheets API 추가",
      "image": addedImage2_0_1,
      "imageAlt": "구글 sheet api",
      "paragraphs": [
        "API 라이브러리에서 Google Sheets API를 검색한 뒤, 사용할 프로젝트에 추가합니다."
      ]
    },
    {
      "title": "1-3. n8n의 OAuth 리디렉션 URL 복사",
      "image": addedImage2_0_2,
      "imageAlt": "n8n에서 구글 시트 계정 연결",
      "paragraphs": [
        "n8n에서 구글 시트 노드의 계정 연결 설정을 열고, OAuth Redirect URL을 확인해 복사합니다. 이 주소를 Google Cloud의 승인된 리디렉션 URI에 등록합니다."
      ]
    },
    {
      "title": "1-5. 승인된 리디렉션 URI 등록",
      "image": addedImage2_0_5,
      "imageAlt": "Google Cloud에 리디렉션 URI 입력",
      "paragraphs": [
        "Google Cloud의 OAuth 클라이언트 설정에서 승인된 리디렉션 URI 항목에 앞서 복사한 n8n의 URL을 붙여 넣고 저장합니다."
      ]
    },
    {
      "title": "1-6. 클라이언트 ID와 시크릿 키 입력",
      "image": addedImage2_0_4,
      "imageAlt": "n8n 구글 시트 노드의 클라이언트 ID와 시크릿 키 설정",
      "paragraphs": [
        "Google Cloud에서 발급받은 클라이언트 ID와 클라이언트 시크릿 키를 n8n 노드의 Connection 설정에 각각 입력한 뒤, Google 계정 연결을 진행합니다."
      ]
    },
    {
      "title": "1-7. Google 계정 접근 권한 동의",
      "image": addedImage2_0_6,
      "imageAlt": "Google 계정 접근 권한 동의",
      "paragraphs": [
        "연결 설정이 올바르면 이미지처럼 Google 계정 접근 권한을 선택하는 팝업이 나타납니다. 필요한 권한에 동의해 연결을 마무리합니다. 설정이 틀리면 이 팝업으로 넘어가지 못하고 오류가 표시될 수 있습니다."
      ]
    },
    {
      "title": "API 연결 중 겪었던 문제점",
      "paragraphs": [
        "구글 클라이언트 시크릿을 비롯해 여러 서비스의 API 키와 인증 정보를 관리하는 데 어려움을 겪었습니다."
      ]
    },
    {
      "title": "1-8. 실습용 샘플 시트 준비",
      "image": addedImage2_0_7,
      "imageAlt": "실습용 샘플 시트 준비",
      "paragraphs": [
        "시트 데이터 추가 기능을 테스트하기 위해 sample data라는 샘플 스프레드시트를 준비했습니다. 이름·이메일·소속·전화번호를 기록할 수 있도록 열을 구성했습니다."
      ]
    },
    {
      "title": "1-9. 시트 노드 설정",
      "image": addedImage2_0_8,
      "imageAlt": "시트 노드 설정",
      "paragraphs": [
        "n8n의 시트 노드에서 작업할 문서를 sample data로 선택하고, 대상 시트를 시트1로 설정했습니다. 이후 요청한 데이터가 이 시트에 입력되도록 연결했습니다."
      ]
    },
    {
      "title": "1-10. 채팅으로 시트 데이터 추가 요청",
      "image": addedImage2_0_9,
      "imageAlt": "채팅으로 시트 데이터 추가 요청",
      "paragraphs": [
        "채팅에 이름·이메일·소속·전화번호를 추가해 달라는 프롬프트를 입력한 뒤 실행합니다. Agent가 시트 도구를 호출해 데이터를 추가하고, 채팅으로 처리 결과를 응답합니다."
      ]
    },
    {
      "title": "1-11. 시트에 추가된 데이터 확인",
      "image": addedImage2_0_10,
      "imageAlt": "시트에 추가된 데이터 확인",
      "paragraphs": [
        "샘플 시트에 이름·이메일·소속·전화번호 행이 추가된 모습입니다."
      ]
    },
    {
      "title": "2. 이메일 테스트 · 이메일 작업을 처리하는 전담 Agent",
      "image": emailImage,
      "imageAlt": "외부 워크플로 실행 트리거와 AI Agent에 OpenAI 모델 및 Gmail 도구를 연결한 구성",
      "paragraphs": [
        "다른 워크플로에서 받은 요청으로 Gmail 작업을 처리하기 위한 구성입니다. When Executed by Another Workflow가 입력을 받고, OpenAI Chat Model을 사용하는 AI Agent가 이메일 작업 도구를 사용합니다."
      ],
      "items": [
        "Get many messages in Gmail: 메시지 목록을 조회합니다.",
        "Send Email: 이메일을 작성해 전송합니다.",
        "Delete Email: 지정한 메시지를 삭제합니다."
      ],
      "result": "외부 워크플로의 입력이 이메일 Agent로 전달되고, 요청에 따라 Gmail 메시지 조회·메일 전송·메일 삭제 작업을 수행하는 흐름이 완성되었습니다."
    },
    {
      "title": "2-1. 이메일 에이전트 프롬프트 입력",
      "image": addedImage2_1_0,
      "imageAlt": "이메일 에이전트 프롬프트 입력",
      "paragraphs": [
        "이메일 에이전트 프롬프트 입력 화면입니다."
      ]
    },
    {
      "title": "2-2. 성공한 이메일 에이전트",
      "image": addedImage2_1_1,
      "imageAlt": "성공한 이메일 에이전트",
      "paragraphs": [
        "성공한 이메일 에이전트 화면입니다."
      ]
    },
    {
      "title": "3. 캘린더 비서 · 일정과 연락처 조회",
      "image": workflowImage,
      "imageAlt": "채팅 Agent에 Gemini, Simple Memory와 캘린더 및 연락처 시트 도구를 연결한 구성",
      "paragraphs": [
        "채팅으로 일정을 조회·생성·삭제하고 연락처 시트를 조회하기 위한 AI 비서입니다. Google Gemini Chat Model은 요청 처리를, Simple Memory는 대화 맥락 유지를 담당합니다."
      ],
      "items": [
        "Get Schedule: 캘린더 일정 목록을 조회합니다.",
        "CreateEvent: 새 일정을 생성합니다.",
        "EventDelete: 지정한 일정을 삭제합니다.",
        "Google Sheets 조회: 팀 연락처 시트의 행 데이터를 가져옵니다."
      ],
      "result": "채팅 요청을 기준으로 캘린더 일정을 조회·생성·삭제하고, 필요한 연락처 정보는 Google Sheets에서 가져오는 비서 흐름이 구성되었습니다."
    },
    {
      "title": "3-1. 캘린더 API",
      "image": addedImage2_2_0,
      "imageAlt": "캘린더 API",
      "paragraphs": [
        "캘린더도 구글 시트와 마찬가지로 Google API Console에서 Google Calendar API를 추가하고, n8n에서 사용할 수 있도록 계정을 연결해야 합니다."
      ]
    }
  ],
}
