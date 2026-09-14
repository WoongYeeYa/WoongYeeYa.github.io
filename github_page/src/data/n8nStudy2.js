import thumbnail from '../assets/post-n8n-calendar.svg'

import workflowImage from '../assets/screenshot/n8n-study-2/캘린더.png'
import sheetsImage from '../assets/screenshot/n8n-study-2/구글 시트 테스트.png'
import emailImage from '../assets/screenshot/n8n-study-2/이메일 테스트.png'

export const n8nStudy2 = {
  id: 'n8n-study-2',
  title: 'N8N 공부 2 · 캘린더·시트·이메일 비서',
  date: '2026.09.11',
  topic: 'AI',
  category: 'N8N · App Tools',
  thumbnail,
  excerpt: "채팅과 외부 워크플로 요청으로 구글 시트, 이메일과 캘린더를 다루는 AI 비서입니다. 각 앱의 조회·수정·전송 작업을 Agent의 도구로 연결한 구성입니다.",
  readTime: '3 min read',
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
      ]
    }
  ],
  sources: [
    { title: 'n8n Docs · Google Sheets', url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/' },
    { title: 'n8n Docs · Gmail', url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/' },
    { title: 'n8n Docs · Execute Sub-workflow Trigger', url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger/' },
    { title: 'n8n Docs · AI Agent', url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent' },
    { title: 'n8n Docs · Google Calendar 이벤트 작업', url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/event-operations' },
    { title: 'n8n Docs · Simple Memory', url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorybufferwindow' },
  ],
}
