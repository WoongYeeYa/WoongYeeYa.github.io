import thumbnail from '../assets/post-open-webui.svg'

const repository = 'https://github.com/WoongYeeYa/open-webui'
const code = `${repository}/blob/5afacb0754ebdff6534c176fb9e335abd47058e0`

export const openWebuiStudy = {
  id: 'open-webui-study-1',
  title: 'Open WebUI 공부 1 · 나만의 GPT 환경 만들기',
  date: '2026.09.14',
  topic: 'AI',
  category: 'Open WebUI · Python · 커스터마이징',
  thumbnail,
  excerpt: '회사나 개인 용도로 사용할 GPT 같은 대화 환경을 만들고 싶어 Open WebUI를 공부했습니다. Anaconda와 Node.js 설치부터 소스 준비, 로컬 서버 실행과 Windows 11 백엔드 환경 설정까지 정리했습니다.',
  readTime: '4 min read',
  explanationOnly: true,
  explanationTitle: '공부 과정',
  explanationLabel: 'Open WebUI',
  explanationDescription: '개발 환경 준비부터 로컬 실행과 백엔드 설정까지',
  sections: {
    pipeline: ['회사·개인용 GPT 같은 대화 환경을 목표로 Open WebUI 공부', 'Anaconda·Node.js 설치와 소스 준비', '프론트엔드와 백엔드 로컬 실행 환경 구성', 'Windows 11에서 Python 3.11 Conda 환경 설정'],
  },
  studyNotes: [
    {
      title: '1. 공부 목적 · 회사나 개인 용도로 사용할 GPT',
      paragraphs: ['회사에서 함께 사용하거나 개인적으로 쓸 수 있는 GPT 같은 서비스를 만들고 싶어 Open WebUI를 연습했습니다. 이미 있는 대화 화면을 바탕으로 실행 구조를 익히고, 필요한 기능을 직접 추가하는 것이 목적이었습니다.', 'Open WebUI는 직접 호스팅할 수 있는 AI 대화 플랫폼입니다. 모델을 처음부터 학습시키기보다 로컬 모델이나 호환 API를 연결하고, 대화 화면과 기능을 원하는 용도에 맞게 구성하는 방향으로 공부했습니다.'],
    },
    {
      title: '2. 선행 준비 · Anaconda와 Node.js',
      paragraphs: ['백엔드는 Python, 프론트엔드는 Node.js 실행 환경을 준비하는 것부터 시작했습니다. Windows에서는 Anaconda Prompt에서 Conda 환경을 만들고 활성화하는 흐름으로 정리했습니다.'],
      items: ['Anaconda: Python 실행 환경과 프로젝트별 패키지를 관리합니다.', 'Anaconda Prompt: Conda 환경 생성·활성화와 백엔드 명령 실행에 사용합니다.', 'Node.js와 npm: 프론트엔드 패키지 설치, 개발 서버 실행과 빌드에 사용합니다.', 'Git: Open WebUI 소스를 받고 개인 저장소에서 변경 사항을 관리합니다.'],
    },
    {
      title: '3. 소스 준비 · Open WebUI 저장소 받기',
      paragraphs: ['공식 Open WebUI 소스를 받아 구조를 살펴보고 개인 GitHub 저장소에서 커스터마이징을 연습했습니다.'],
      steps: ['공식 소스 받기: git clone https://github.com/open-webui/open-webui.git', '프로젝트 폴더 이동: cd open-webui', '환경 설정 파일 준비: Windows PowerShell에서는 Copy-Item .env.example .env', '프론트엔드 패키지 설치: npm install'],
      afterParagraphs: ['사용한 소스의 package.json에는 Node.js 범위가 18.13.0 이상부터 22.x까지로 정의되어 있습니다.'],
    },
    {
      title: '4. 로컬 서버 · 프론트엔드와 백엔드 구성',
      paragraphs: ['화면을 만드는 프론트엔드와 요청을 처리하는 백엔드는 각각 실행하는 구조입니다. 프론트엔드는 SvelteKit·Vite, 백엔드는 Python·FastAPI로 구성되어 있습니다.'],
      items: ['프론트엔드: 프로젝트 루트에서 npm run build로 화면을 빌드하고 npm run dev로 개발 서버를 실행합니다.', '백엔드: backend 폴더에서 Python 패키지를 설치하고 open_webui.main:app을 Uvicorn으로 실행합니다.', '개발 서버 기본 주소: 프론트엔드 http://localhost:5173, 백엔드 http://localhost:8080', 'API 문서 주소: http://localhost:8080/docs'],
      afterParagraphs: ['backend/dev.sh에는 프론트엔드와 백엔드 주소를 CORS_ALLOW_ORIGIN에 등록하는 설정이 있습니다. 서로 다른 포트로 실행되는 화면과 API의 연결을 위한 설정입니다.'],
    },
    {
      title: '5. Windows 11 백엔드 · Python 3.11 환경',
      paragraphs: ['백엔드용 Conda 환경 이름은 py311, Python 버전은 3.11로 정리했습니다. 사용한 소스의 pyproject.toml은 Python 3.11 이상, 3.13 미만을 요구합니다.'],
      afterParagraphs: ['C:\\workspace\\open-webui는 로컬에 받은 프로젝트 폴더의 예시입니다. 위 명령은 Anaconda Prompt 기준입니다.'],
      steps: ['환경 생성: conda create -n py311 python=3.11', '환경 활성화: conda activate py311', '백엔드 폴더 이동: cd /d C:\\workspace\\open-webui\\backend', '의존성 설치: python -m pip install -r requirements.txt', '개발용 CORS 설정: set "CORS_ALLOW_ORIGIN=http://localhost:5173;http://localhost:8080"', '로컬 개발 서버 실행: python -m uvicorn open_webui.main:app --host 127.0.0.1 --port 8080 --reload'],
    },
    {
      title: '6. Python 버전과 UTC 메모',
      paragraphs: ['공부 메모에는 Python 버전이 낮을 때 UTC 관련 오류가 발생할 수 있다는 내용이 있었습니다. Python 공식 문서에서 datetime.UTC가 3.11에 추가된 상수라는 점을 확인했습니다.', 'from datetime import UTC를 사용하는 코드에서는 Python 3.11 미만일 때 가져오기 오류가 발생할 수 있습니다. UTC는 pytz 등 다른 모듈에서도 제공하므로, UTC라는 이름이 들어간 오류가 전부 같은 원인인 것은 아닙니다. 이 실행 환경은 프로젝트의 Python 요구 범위에 맞춰 3.11로 구성했습니다.'],
    },
  ],
  sources: [
    { title: '개인 GitHub · Open WebUI 커스터마이징', url: repository },
    { title: '공식 GitHub · Open WebUI 소스', url: 'https://github.com/open-webui/open-webui' },
    { title: '공식 문서 · 소스 기반 개발 환경', url: 'https://docs.openwebui.com/getting-started/advanced-topics/development/' },
    { title: '공부 참고 · Anaconda 설치', url: 'https://blog.naver.com/codeitofficial/223497697349' },
    { title: '공부 참고 · 로컬 서버 실행', url: 'https://blog.naver.com/se2n/223573762670' },
    { title: 'Python 공식 · datetime.UTC와 3.11', url: 'https://docs.python.org/3.11/library/datetime.html' },
    { title: '프론트엔드 실행 명령과 Node.js 범위', url: `${code}/package.json` },
    { title: '백엔드 Python 요구 버전', url: `${code}/pyproject.toml` },
  ],
}
