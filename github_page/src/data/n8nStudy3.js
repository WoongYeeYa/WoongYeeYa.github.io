import pushdata from '../assets/screenshot/n8n-study-3/pushdata.png'
import chatSetup from '../assets/screenshot/n8n-study-3/채팅시 설정.png'
import fileSearch from '../assets/screenshot/n8n-study-3/파일 검색 및 저장.png'
import thumbnail from '../assets/post-n8n-rag.svg'

export const n8nStudy3 = {
  id: 'n8n-study-3',
  title: 'N8N 공부 3 · 문서 저장과 검색 챗봇',
  date: '2026.09.11',
  topic: 'AI',
  category: 'N8N · RAG',
  thumbnail,
  excerpt: "Google Drive 문서를 Pinecone에 저장하고 채팅에서 검색하는 워크플로입니다. 단일 파일 저장, 문서 검색 챗봇과 여러 파일의 반복 저장으로 구성됩니다.",
  readTime: '4 min read',
  explanationOnly: true,
  sections: { pipeline: ["단일 파일을 Pinecone에 저장","채팅에서 저장한 문서 검색","여러 파일을 검색해 반복 저장"] },
  studyNotes: [
    {
      "title": "1. PUSHdata · 문서 검색을 위한 파일 저장",
      "image": pushdata,
      "imageAlt": "Drive 파일 다운로드와 Pinecone 저장소에 문서 로더, 텍스트 분할기와 임베딩을 연결한 구성",
      "paragraphs": [
        "Google Drive의 파일을 가져와 문서 검색에 사용할 데이터를 Pinecone에 저장하기 위한 워크플로입니다. 수동 실행 트리거에서 Download file을 거쳐 Pinecone Vector Store로 이어집니다."
      ],
      "items": [
        "Download file: Google Drive 파일을 다운로드합니다.",
        "Default Data Loader: 파일 내용을 문서 데이터로 읽습니다.",
        "Recursive Character Text Splitter: 문서를 작은 텍스트 단위로 나눕니다.",
        "Embeddings OpenAI: 텍스트를 검색에 사용할 벡터로 변환합니다.",
        "Pinecone Vector Store: 문서 벡터를 저장하는 역할을 합니다."
      ]
    },
    {
      "title": "2. 채팅 시 설정 · 저장한 문서를 검색하는 챗봇",
      "image": chatSetup,
      "imageAlt": "채팅 Agent에 모델, 메모리와 Pinecone 문서 검색 도구를 연결한 구성",
      "paragraphs": [
        "Pinecone에 저장한 문서를 검색해 사용자 질문에 답하기 위한 챗봇입니다. 채팅 트리거가 질문을 AI Agent에 전달하고, information 도구가 문서 검색과 검색 내용 정리를 담당합니다."
      ],
      "items": [
        "OpenAI Chat Model: 사용자 요청을 처리하고 응답을 생성합니다.",
        "Simple Memory: 대화 맥락을 유지합니다.",
        "information: 문서 검색을 Agent가 사용할 수 있는 도구로 연결합니다.",
        "Pinecone Vector Store: 질문과 관련된 문서를 찾는 저장소입니다.",
        "OpenAI Chat Model1: 검색 도구에서 가져온 내용을 정리하는 모델입니다."
      ]
    },
    {
      "title": "3. 파일 검색 및 저장 · 여러 문서의 반복 처리",
      "image": fileSearch,
      "imageAlt": "Drive 파일 검색과 다운로드 뒤 반복 노드에서 Pinecone에 문서를 저장하는 구성",
      "paragraphs": [
        "Google Drive에서 여러 파일을 검색해 문서 검색용 데이터로 저장하기 위한 워크플로입니다. Search files and folders → Download file → Loop Over Items → Pinecone Vector Store로 이어집니다."
      ],
      "items": [
        "Search files and folders: 저장할 파일과 폴더를 검색합니다.",
        "Download file: 검색한 파일을 다운로드합니다.",
        "Loop Over Items: 입력 항목을 배치 단위로 반복 처리합니다.",
        "loop 경로: 파일 데이터를 Pinecone 저장 단계로 전달하고 반복을 이어갑니다.",
        "done 경로: 반복 처리가 끝나는 출력입니다.",
        "문서 로더·텍스트 분할기·임베딩: 파일을 분할된 문서 벡터로 변환합니다."
      ]
    }
  ],
  sources: [
    { title: 'n8n Docs · Pinecone Vector Store', url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepinecone/' },
    { title: 'n8n Docs · Default Data Loader', url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.documentdefaultdataloader/' },
    { title: 'n8n Docs · Vector Store Question Answer Tool', url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolvectorstore/' },
    { title: 'n8n Docs · Loop Over Items', url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/' },
  ],
}
