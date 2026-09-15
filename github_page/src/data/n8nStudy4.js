import transcriptImage from '../assets/screenshot/n8n-study-4/스크린샷 2026-09-11 191740.png'

import thumbnail from '../assets/thumbnail/post-n8n-transcript.svg'

export const n8nStudy4 = {
  id: 'n8n-study-4',
  title: 'N8N 공부 4 · 자막과 타임스탬프 데이터 처리',
  topic: 'AI',
  category: 'N8N · Data Pipeline',
  thumbnail,
  workflowImage: transcriptImage,
  workflowImageAlt: '폼에서 자막 HTTP 요청, Transcript와 Timestamps 분기, Merge append, Supabase 저장소, 시트 추가로 이어지는 구성',
  workflowImageCaption: '스크린샷 2026-09-11 191740 · 클릭하면 원본을 크게 볼 수 있습니다.',
  excerpt: "폼 입력을 받아 자막과 타임스탬프 데이터를 처리하고 Supabase와 Google Sheets로 전달하는 워크플로입니다.",
  explanationOnly: true,
  sections: { pipeline: ["폼 입력 수신","HTTP 요청으로 자막 데이터 가져오기","자막과 타임스탬프 처리","항목 목록 병합","벡터 저장과 시트 기록"] },
  studyNotes: [
    {
      "title": "1. 폼 입력과 자막 요청",
      "paragraphs": [
        "자막 데이터를 가져오는 작업을 폼 제출로 시작하기 위한 구성입니다. On form submission이 입력을 받고 Get Transcript가 HTTP POST 요청을 보냅니다."
      ],
      "result": "폼에 입력된 값이 워크플로 데이터로 전달되고, HTTP 요청을 통해 이후 가공에 사용할 자막 응답을 받습니다."
    },
    {
      "title": "2. 자막과 타임스탬프 처리",
      "paragraphs": [
        "HTTP 응답을 자막과 시간 정보 처리 경로로 나누는 구성입니다. 응답 데이터가 Transcript와 Timestamps 코드 노드로 각각 전달됩니다."
      ],
      "result": "하나의 HTTP 응답에서 자막 본문과 시간 정보를 각각 가공한 두 데이터 흐름이 만들어집니다."
    },
    {
      "title": "3. Merge · 두 경로의 항목 목록 병합",
      "paragraphs": [
        "분기된 처리 결과를 다음 단계로 함께 전달하기 위한 노드입니다. append 모드로 각 입력의 항목 목록을 순서대로 이어 붙입니다."
      ],
      "result": "Transcript와 Timestamps에서 만든 항목이 하나의 순서 있는 목록으로 합쳐져 저장 단계에 전달됩니다."
    },
    {
      "title": "4. Supabase와 Google Sheets 저장",
      "paragraphs": [
        "처리한 데이터를 문서 검색과 시트 기록에 사용하기 위한 구성입니다. Merge 출력이 Supabase Vector Store1을 거쳐 Append row in sheet로 이어집니다."
      ],
      "items": [
        "Default Data Loader: 입력 데이터를 문서로 읽습니다.",
        "Embeddings OpenAI: 문서를 벡터로 변환합니다.",
        "Supabase Vector Store1: 문서 벡터를 저장하는 역할을 합니다.",
        "Append row in sheet: Google Sheets에 행 데이터를 추가합니다."
      ],
      "result": "병합한 데이터가 임베딩되어 Supabase 벡터 저장소에 들어가고, 처리 기록은 Google Sheets의 새 행으로 추가되는 흐름입니다."
    }
  ],
}
