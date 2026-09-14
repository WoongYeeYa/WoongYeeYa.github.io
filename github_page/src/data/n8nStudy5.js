import childImage from '../assets/screenshot/n8n-study-5/스토리 메이커 자식 에이전트.png'
import parentImage from '../assets/screenshot/n8n-study-5/스토리 메이커 부모 에이전트.png'
import thumbnail from '../assets/post-n8n-story.svg'

export const n8nStudy5 = {
  id: 'n8n-study-5',
  title: 'N8N 공부 5 · 부모·자식 스토리메이커',
  date: '2026.09.11',
  topic: 'AI',
  category: 'N8N · Sub-workflow',
  thumbnail,
  excerpt: "채팅 요청을 받는 부모 Agent와 스토리 생성 작업을 맡는 자식 Agent로 역할을 나눈 워크플로입니다.",
  readTime: '3 min read',
  explanationOnly: true,
  sections: { pipeline: ["자식 워크플로에서 입력 수신·조건 분기","child agent에서 생성 요청 처리","부모 Agent에서 STORY MAKER 도구 사용"] },
  studyNotes: [
    {
      "title": "1. 스토리메이커 자식 · 조건에 따른 생성 작업",
      "image": childImage,
      "imageAlt": "외부 호출 입력을 If로 분기해 child agent 또는 try again으로 전달하는 구성",
      "paragraphs": [
        "다른 워크플로에서 전달한 스토리 생성 요청을 처리하기 위한 자식 워크플로입니다. When Executed by Another Workflow가 입력을 받고 If 노드가 조건에 따라 처리 경로를 나눕니다."
      ],
      "items": [
        "true 경로: Google Gemini Chat Model을 사용하는 child agent로 요청을 전달합니다.",
        "false 경로: try again 필드 설정 노드로 전달합니다.",
        "child agent: 전달받은 생성 요청을 처리하는 Agent입니다."
      ]
    },
    {
      "title": "2. 스토리메이커 부모 · 채팅 요청과 작업 위임",
      "image": parentImage,
      "imageAlt": "채팅 Agent에 Gemini 모델과 STORY MAKER 워크플로 도구를 연결한 구성",
      "paragraphs": [
        "사용자의 채팅 요청을 받아 스토리 생성 도구를 사용하는 부모 워크플로입니다. When chat message received → AI Agent로 이어지고, Agent에는 Google Gemini Chat Model과 STORY MAKER가 연결됩니다."
      ],
      "items": [
        "채팅 트리거: 사용자의 요청을 받습니다.",
        "AI Agent와 Gemini: 요청을 처리하고 응답을 생성합니다.",
        "STORY MAKER: 스토리 생성 작업을 서브워크플로로 맡기기 위한 도구입니다."
      ]
    }
  ],
  sources: [
    { title: 'n8n Docs · Call n8n Workflow Tool', url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/' },
    { title: 'n8n Docs · Execute Sub-workflow Trigger', url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.executeworkflowtrigger/' },
  ],
}
