import thumbnail from '../assets/post-n8n-calendar.svg'

import workflowImage from '../assets/screenshot/캘린더.png'

export const n8nStudy2 = {
  id: 'n8n-study-2',
  title: 'N8N 공부 2',
  date: '2026.09.11',
  topic: 'AI',
  category: 'N8N · Calendar',
  thumbnail,
  workflowImage,
  workflowImageAlt: '채팅 트리거와 AI Agent에 Gemini, Simple Memory, 캘린더 조회·삭제·생성 및 Google Sheets 조회 도구를 연결한 n8n 워크플로',
  workflowImageCaption: '캘린더 AI 비서 워크플로 · 원본 이미지를 클릭하면 크게 볼 수 있습니다.',
  excerpt: '채팅으로 일정을 관리하는 AI 비서의 구조를 살펴봅니다. Gemini와 메모리, Google Calendar 도구, 연락처 시트를 연결한 워크플로를 분석합니다.',
  readTime: '7 min read',
  sections: {
    pipeline: ['채팅으로 일정 요청', 'Agent가 의도와 맥락 해석', '필요한 캘린더·시트 도구 선택', '도구 결과를 바탕으로 응답'],
    problems: [
      "Sheets ??? ??? ??, ??? ?? ??? ?? ??? ??? ??? ???. ?? ??? ????? ??? ??? ?????? ?? ??? ????.",
    ],
    reframing: [
      "Agent? ??? ?? ??? ???? ??? ????. ?? ??? ????, ?? ??? ??? ??? ????.",
    ],
    solution: [
      "???? Sheets ??? ???? ???????? ??? ?? ???. ??? ????? ?? ? ?? ? ??? ? ?? ?? ? ??? ????, ??? ?? ??? ????.",
    ],
    impact: [
      "??? ??? ??? ??? ??? ??? ? ?? ????. ?? ??? ?? ?? ??? ?? ???? ???? ??.",
    ],
    reflection: [
      "?? ?? ???? ???????? ?? ??? ????. ?? ???? ??? ? ?????? ??? ??? ????? ????.",
    ],
  },
  studyNotes: [
    {
      title: '분석 범위: 화면에서 확인한 구조',
      paragraphs: ['이 글은 제공된 워크플로 스크린샷을 바탕으로 정리했다. 노드의 내부 설정, 시스템 프롬프트, 인증 상태, 실행 로그는 포함되어 있지 않다. 아래의 개선안과 예시 요청은 실제 실행 결과와 구분한다.'],
    },
    {
      title: '채팅 입력 → AI Agent',
      paragraphs: ['왼쪽에 수동 실행 노드와 When chat message received가 있고, 채팅 노드에서 AI Agent로 실선이 이어진다. 사용자 메시지를 받아 처리하려는 구성으로 읽을 수 있다.', 'Agent 아래 점선은 모델·메모리·도구 연결이다. 아래에 놓인 모든 도구가 왼쪽부터 차례대로 실행된다는 의미가 아니다.'],
    },
    {
      title: '모델과 메모리의 역할',
      items: ['Google Gemini Chat Model: Agent의 Chat Model 포트에 연결된 언어 모델. 구체적인 모델 버전은 이미지에 보이지 않는다.', 'Simple Memory: 대화 맥락을 제공하는 메모리. 후속 질문을 이해하는 데 활용할 수 있지만 세션 식별과 저장 범위는 별도 설정을 확인해야 한다.'],
    },
    {
      title: '캘린더와 연락처 도구',
      items: ['Get Schedule · getAll: event — 일정 목록 조회 도구. 조회 범위와 대상 캘린더 설정은 확인이 필요하다.', 'EventDelete · delete: event — 일정 삭제 도구. 정확한 Event ID를 전달해야 한다.', 'CreateEvent · create: event — 일정 생성 도구. 제목, 시작·종료 시각 등 입력 매핑을 확인한다.', 'Get row(s) in sheet in Google Sheets · read: sheet — 시트 행 조회 도구. 메모상 팀 연락처 조회 용도로 보이지만 실제 열 구성은 보이지 않는다.'],
    },
    {
      title: '예시 요청으로 생각해 보는 실행 흐름',
      paragraphs: ['“내일 일정 알려줘” → 기준 날짜와 시간대 해석 → Get Schedule로 해당 기간 조회 → 반환된 일정 요약.', '“내일 오후 3시에 30분 회의 잡아줘” → 날짜·종료 시각·제목 확인 → CreateEvent 호출 → 반환된 결과 확인.', '“그 회의 지워줘” → 맥락과 최신 조회 결과로 대상 식별 → 대상 확인 → EventDelete 호출. 세 예시는 권장 설계이며 실제 테스트 기록은 아니다.'],
    },
  ],
  sources: [
    { title: 'n8n Docs · AI Agent', url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent' },
    { title: 'n8n Docs · Google Calendar 이벤트 작업', url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlecalendar/event-operations' },
    { title: 'n8n Docs · Simple Memory', url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorybufferwindow' },
  ],
}
