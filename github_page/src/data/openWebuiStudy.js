import thumbnail from '../assets/thumbnail/post-open-webui.svg'
import backendSetup from '../assets/screenshot/open-webui/open webui 1.png'
import backendPackages from '../assets/screenshot/open-webui/open webui 2.png'
import backendStartup from '../assets/screenshot/open-webui/open webui 3.png'
import frontendPackages from '../assets/screenshot/open-webui/open webui 4.png'
import frontendAudit from '../assets/screenshot/open-webui/open webui 5.png'
import serversReady from '../assets/screenshot/open-webui/open webui 6.png'
import loginScreen from '../assets/screenshot/open-webui/open webui 7.png'
import chatScreen from '../assets/screenshot/open-webui/open webui 8.png'
import apiKeyList from '../assets/screenshot/open-webui/open webui 9.png'
import apiKeyDetails from '../assets/screenshot/open-webui/open webui 10.png'
import geminiConnection from '../assets/screenshot/open-webui/open webui 11.png'
import geminiSettings from '../assets/screenshot/open-webui/open webui 12.png'
import geminiModels from '../assets/screenshot/open-webui/open webui 13.png'
import geminiChat from '../assets/screenshot/open-webui/open webui 14.png'
import ollamaModelPull from '../assets/screenshot/open-webui/open webui 15.png'
import ollamaModels from '../assets/screenshot/open-webui/open webui 16.png'
import ollamaChat from '../assets/screenshot/open-webui/open webui 17.png'

export const openWebuiStudy = {
  id: 'open-webui-study-1',
  title: 'Open WebUI 공부 1 · 환경 설정과 로그인',
  date: '2026.09.14',
  topic: 'AI',
  category: 'Open WebUI · Python · Node.js',
  thumbnail,
  excerpt: '회사나 개인용 GPT 환경을 만들기 위해 Anaconda와 Node.js를 준비했습니다. 백엔드와 프론트엔드 실행, 환경 구성 중 발생한 문제 해결부터 로그인 성공까지 정리했습니다.',
  readTime: '6 min read',
  explanationOnly: true,
  explanationTitle: '공부 과정',
  explanationLabel: 'Open WebUI',
  explanationDescription: '개발 환경 준비, 실행 오류 해결과 로그인까지',
  sections: {
    pipeline: ['Anaconda·Node.js 설치와 소스 준비', 'Python 3.11 환경 구성과 백엔드 실행', 'Conda·Python 환경 문제 해결', '프론트엔드 패키지 설치와 버전 충돌 해결', '두 서버 실행과 로그인 성공'],
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
      steps: ['공식 소스 받기: git clone https://github.com/open-webui/open-webui.git', '프로젝트 폴더 이동: cd open-webui', '환경 설정 파일 준비: Windows PowerShell에서는 Copy-Item .env.example .env'],
      afterParagraphs: ['사용한 소스의 package.json에는 Node.js 범위가 18.13.0 이상부터 22.x까지로 정의되어 있습니다.'],
    },
    {
      title: '4. 로컬 서버 · 프론트엔드와 백엔드 구성',
      paragraphs: ['화면을 만드는 프론트엔드와 요청을 처리하는 백엔드는 각각 실행하는 구조입니다. 프론트엔드는 SvelteKit·Vite, 백엔드는 Python·FastAPI로 구성되어 있습니다.'],
      items: ['프론트엔드: 사용자가 대화하고 기능을 사용하는 화면입니다.', '백엔드: Python 패키지와 FastAPI로 요청을 처리하며, Windows 실행 스크립트로 시작합니다.', '백엔드 기본 주소: http://localhost:8080', 'API 문서 주소: http://localhost:8080/docs'],
    },
    {
      title: '5. Windows 11 백엔드 · Python 3.11 환경',
      paragraphs: ['백엔드용 Conda 환경 이름은 py311, Python 버전은 3.11로 정리했습니다. 사용한 소스의 pyproject.toml은 Python 3.11 이상, 3.13 미만을 요구합니다.'],
      image: backendSetup,
      imageAlt: 'Anaconda Prompt에서 py311 Conda 환경을 생성하는 화면',
      imageCaption: '1. Python 3.11을 사용하는 py311 환경 생성',
      steps: ['conda create -n py311 python=3.11 -y', 'conda activate py311', 'cd /d C:\\workspace\\open-webui', 'python -m pip install -r backend\\requirements.txt', 'cd backend', 'start_windows.bat'],
      afterParagraphs: ['Anaconda Prompt에서 위 명령을 한 줄씩 순서대로 입력하면 됩니다. -y는 환경 생성 과정의 확인 질문에 자동으로 동의하는 옵션입니다. 프로젝트 폴더에서 패키지를 설치한 뒤 backend로 이동해 Windows 실행 스크립트를 실행합니다.'],
    },
    {
      title: '6. 백엔드 준비 · 필요한 패키지 설치',
      paragraphs: ['py311 환경을 활성화하고 프로젝트 폴더에서 backend\\requirements.txt에 정의된 패키지를 설치했습니다. FastAPI, Uvicorn, Pydantic 등 백엔드 실행에 필요한 의존성을 받는 과정입니다.'],
      image: backendPackages,
      imageAlt: 'py311 환경에서 backend requirements.txt의 패키지를 설치하는 화면',
      imageCaption: '2. 백엔드 의존성 다운로드와 설치 과정',
    },
    {
      title: '7. 백엔드 실행 · Windows 스크립트 실행 결과',
      paragraphs: ['backend 폴더에서 start_windows.bat를 실행했습니다. 화면에는 설정을 불러오는 로그와 데이터베이스 초기화 로그, Open WebUI 시작 배너가 표시되어 있습니다.'],
      image: backendStartup,
      imageAlt: 'start_windows.bat 실행 후 Open WebUI 초기화 로그와 시작 배너가 표시된 화면',
      imageCaption: '3. Windows 백엔드 실행 스크립트의 출력 화면',
    },
    {
      title: '8. Python 버전과 UTC 메모',
      paragraphs: ['공부 메모에는 Python 버전이 낮을 때 UTC 관련 오류가 발생할 수 있다는 내용이 있었습니다. Python 공식 문서에서 datetime.UTC가 3.11에 추가된 상수라는 점을 확인했습니다.', 'from datetime import UTC를 사용하는 코드에서는 Python 3.11 미만일 때 가져오기 오류가 발생할 수 있습니다. UTC는 pytz 등 다른 모듈에서도 제공하므로, UTC라는 이름이 들어간 오류가 전부 같은 원인인 것은 아닙니다. 이 실행 환경은 프로젝트의 Python 요구 범위에 맞춰 3.11로 구성했습니다.'],
    },
    {
      title: '9. 백엔드 실행 중 문제와 해결 · Conda와 Python 환경',
      paragraphs: ['백엔드 실행을 준비하면서 Conda 환경 유무, 저장소 이용약관, 기존 가상환경의 Python 버전 문제를 차례로 정리했습니다.'],
      items: [
        'conda activate py311 실패: 기존 py311 환경이 없고 base만 남아 있어 활성화할 수 없었습니다. Python 3.11 환경을 새로 생성하고 py311을 활성화해 백엔드를 실행했습니다.',
        'Conda 환경 생성 중 약관 오류: Anaconda 저장소 이용약관에 동의하지 않은 상태라 환경 생성이 중단되었습니다. 저장소별 약관 동의 명령을 확인해 동의한 뒤 설치를 진행했습니다.',
        '기존 .venv 활용 어려움: 기존 가상환경은 Python 3.13 기반이라 사용한 Open WebUI 소스의 지원 버전과 맞지 않았습니다. 기존 .venv 대신 새로 만든 py311 환경을 사용하는 방식으로 진행했습니다.',
      ],
    },
    {
      title: '10. 프론트엔드 준비 · 패키지 설치와 실행 명령',
      paragraphs: ['백엔드를 실행한 상태에서 별도 터미널을 열고 C:\\workspace\\open-webui 프로젝트 폴더로 이동했습니다. 프론트엔드는 아래 세 명령을 한 줄씩 순서대로 실행했습니다.', '첫 번째 화면은 npm i --force로 프론트엔드에 필요한 패키지를 설치하는 과정입니다. 패키지 버전과 의존성 관련 로그가 표시되어 있습니다.'],
      image: frontendPackages,
      imageAlt: '프로젝트 폴더에서 npm i --force로 프론트엔드 패키지를 설치하는 화면',
      imageCaption: '4. 프론트엔드 패키지 설치 과정',
      steps: ['npm i --force', 'npm audit fix --force', 'npm run dev'],
    },
    {
      title: '11. 프론트엔드 준비 · 패키지 업데이트',
      paragraphs: ['두 번째 명령인 npm audit fix --force를 실행한 화면입니다. npm의 의존성 검사 결과에 따라 패키지를 업데이트하는 과정으로, 화면에는 버전 변경과 의존성 관련 메시지가 표시되어 있습니다. 이후 npm run dev로 개발 서버를 실행했습니다.'],
      image: frontendAudit,
      imageAlt: 'npm audit fix --force 실행 중 패키지 업데이트 로그가 표시된 화면',
      imageCaption: '5. 프론트엔드 의존성 업데이트 과정',
    },
    {
      title: '12. 프론트엔드 실행 중 문제와 해결 · Node와 패키지 버전',
      paragraphs: ['프론트엔드에서는 사용 중인 Vite 5에 맞춰 Svelte 플러그인과 Vitest 버전을 조정하고, 프로젝트에서 사용할 Node 실행 환경을 별도로 준비했습니다.'],
      items: [
        'npm run dev에서 TypeError 발생: Vite 5와 Vite 8을 요구하는 Svelte 플러그인 7.3.0이 함께 설치되어 실행 오류가 발생했습니다. Svelte 플러그인을 4.0.4로 변경해 해결했습니다.',
        '프론트엔드 패키지 설치 실패: 시스템에 설치된 Node 25가 프로젝트의 지원 범위인 최대 22를 초과했습니다. 별도 Node 22를 준비하고 해당 환경으로 실행하는 전용 실행 파일을 작성했습니다.',
        'Vitest 버전 충돌: 설치된 Vitest 4도 사용 중인 Vite 5와 호환되지 않았습니다. Vitest를 2.1.9로 조정해 버전 충돌을 해결했습니다.',
      ],
    },
    {
      title: '13. 로컬 실행 결과 · 백엔드와 프론트엔드 로그',
      paragraphs: ['왼쪽 터미널에는 Open WebUI 백엔드의 시작 로그가, 오른쪽에는 프론트엔드 준비 과정과 Vite 개발 서버의 ready 메시지가 표시되어 있습니다.', '프론트엔드 터미널에 표시된 http://localhost:5173/으로 접속해 Open WebUI 화면을 확인했습니다. 두 서버는 각각의 터미널에서 실행한 상태로 사용했습니다.'],
      image: serversReady,
      imageAlt: '백엔드 시작 로그와 Vite 프론트엔드 개발 서버 실행 로그를 나란히 표시한 화면',
      imageCaption: '6. 백엔드와 프론트엔드 실행 결과',
    },
    {
      title: '14. 기본 화면 · 로그인',
      paragraphs: ['로컬 주소에 접속하면 Open WebUI 로그인 화면이 표시됩니다. 이메일과 비밀번호를 입력해 계정으로 로그인하는 기본 화면입니다.'],
      image: loginScreen,
      imageAlt: '이메일과 비밀번호 입력란이 있는 Open WebUI 기본 로그인 화면',
      imageCaption: '7. Open WebUI 기본 로그인 화면',
    },
    {
      title: '15. 로그인 결과 · 대화 화면',
      paragraphs: ['로그인 후에는 사용자 이름이 표시된 기본 대화 화면으로 이동했습니다. 상단에는 모델 선택 메뉴가 있고, 중앙에는 질문을 입력하는 대화 입력창과 예시 질문이 표시되어 있습니다. 회사나 개인용 AI 대화 서비스를 구성하기 위한 기본 화면을 확인한 과정입니다.'],
      image: chatScreen,
      imageAlt: '로그인 후 모델 선택 메뉴와 대화 입력창이 표시된 Open WebUI 화면',
      imageCaption: '8. 로그인 후 표시되는 기본 대화 화면',
    },
  ],
}

export const openWebuiStudy2 = {
  id: 'open-webui-study-2',
  title: 'Open WebUI 공부 2 · Gemini와 Ollama 연결',
  date: '2026.09.14',
  topic: 'AI',
  category: 'Open WebUI · Gemini · Ollama',
  thumbnail,
  excerpt: 'Google AI Studio에서 API 키를 준비해 Gemini를 연결하고 대화를 진행했습니다. Ollama 설치와 Gemma 3 모델 다운로드, 로컬 모델 연결과 대화 성공까지 정리했습니다.',
  readTime: '5 min read',
  explanationOnly: true,
  explanationTitle: '공부 과정',
  explanationLabel: 'Open WebUI',
  explanationDescription: 'Gemini API 연결과 Ollama 로컬 모델 대화까지',
  sections: {
    pipeline: ['Google AI Studio에서 Gemini API 키 준비', 'API 키와 OpenAI 호환 URL 입력', 'Gemini 모델 선택과 대화 성공', 'Ollama 설치와 Gemma 3 다운로드', '로컬 모델 연결과 대화 성공'],
  },
  studyNotes: [
    {
      title: '1. Gemini API 준비 · Google AI Studio',
      paragraphs: ['Gemini API를 사용하기 위한 키를 준비하려고 Google AI Studio의 API 키 메뉴로 이동했습니다. 화면에는 API 키 만들기 버튼과 생성된 키 목록, 연결된 프로젝트가 표시되어 있습니다.'],
      image: apiKeyList,
      imageAlt: 'Google AI Studio의 API 키 생성 버튼과 키 목록 화면',
      imageCaption: '9. Google AI Studio에서 API 키 준비',
    },
    {
      title: '2. Gemini API 준비 · 키 확인과 복사',
      paragraphs: ['API 키 목록에서 키를 선택해 세부정보를 열었습니다. 이 화면에서 키 이름과 연결된 프로젝트를 확인하고, 키 복사 버튼으로 API 호출에 사용할 값을 가져오는 과정입니다. API 키와 프로젝트 정보는 가려 두었습니다.'],
      image: apiKeyDetails,
      imageAlt: 'API 키와 프로젝트 정보가 가려진 Google AI Studio API 키 세부정보 화면',
      imageCaption: '10. API 키 세부정보 확인과 복사',
    },
    {
      title: '3. Gemini 연결 · API 키와 URL 입력',
      paragraphs: ['Google AI Studio에서 복사한 Gemini API 키를 Open WebUI에 입력했습니다. 관리자 설정의 연결 메뉴에서 OpenAI API 연결을 추가하고, URL에는 아래 주소를 입력했습니다. Gemini의 OpenAI 호환 API를 사용하는 연결이라 Provider Type은 OpenAI, 인증 방식은 Bearer로 설정했습니다.'],
      image: geminiConnection,
      imageAlt: 'Open WebUI 연결 추가 화면에서 Gemini API URL과 API 키를 입력한 모습',
      imageCaption: '11. Gemini API 키와 연결 URL 입력',
      steps: ['관리자 설정 → 연결 → OpenAI API 연결 추가', 'URL: https://generativelanguage.googleapis.com/v1beta/openai/', '인증: Bearer를 선택하고 Google AI Studio에서 복사한 Gemini API 키 입력', 'Provider Type: OpenAI', '저장'],
    },
    {
      title: '4. Gemini 연결 · 저장된 설정 확인',
      paragraphs: ['저장한 연결을 다시 열어 Gemini API URL과 인증 설정을 확인했습니다. 연결 편집 화면에는 입력한 URL과 가려진 API 키, 활성화된 연결 상태가 표시되어 있습니다.'],
      image: geminiSettings,
      imageAlt: '저장된 Gemini 연결의 URL과 Bearer 인증 설정을 확인하는 화면',
      imageCaption: '12. 저장된 Gemini API 연결 설정',
    },
    {
      title: '5. Gemini 연결 결과 · 모델 목록 확인',
      paragraphs: ['연결 설정 후 대화 화면의 모델 선택 메뉴에 Gemini 모델 목록이 표시되었습니다. models/gemini-2.5-flash와 models/gemini-2.5-pro 등을 확인하고 models/gemini-2.5-flash를 선택했습니다. Open WebUI에서 Gemini 모델을 불러와 선택할 수 있는 상태입니다.'],
      image: geminiModels,
      imageAlt: 'Open WebUI 모델 선택 메뉴에 Gemini 모델 목록이 표시된 화면',
      imageCaption: '13. Gemini 모델 목록과 선택 결과',
    },
    {
      title: '6. Gemini 대화 결과 · 메시지 전송과 응답 확인',
      paragraphs: ['models/gemini-2.5-flash를 선택한 뒤 Gemini의 한국어 응답을 확인했습니다. API 키와 연결 URL을 통해 Open WebUI에서 Gemini 모델과 대화할 수 있는 상태입니다.'],
      image: geminiChat,
      imageAlt: 'Open WebUI에서 Gemini 2.5 Flash와 한국어 메시지를 주고받은 화면',
      imageCaption: '14. Gemini와의 대화 성공 화면',
    },
    {
      title: '7. 로컬 모델 준비 · Ollama 설치',
      paragraphs: ['로컬에서 AI 모델을 실행하기 위해 Ollama를 설치했습니다. Windows PowerShell에서 아래 명령을 입력하면 공식 설치 스크립트를 받아 실행하고 Ollama 설치를 진행할 수 있습니다.', 'Ollama를 처음 설치한 상태에는 사용할 로컬 모델이 없어서, 설치 후 실행할 모델을 별도로 내려받는 과정을 진행했습니다.'],
      steps: ['irm https://ollama.com/install.ps1 | iex'],
    },
    {
      title: '8. 로컬 모델 준비 · Gemma 3 다운로드',
      paragraphs: ['PowerShell에서 ollama pull gemma3:1b를 입력해 Gemma 3의 1B 모델을 내려받았습니다. 화면에는 pulling manifest와 모델 파일 다운로드 진행률, 받은 용량과 전송 속도가 표시되어 있습니다. 로컬 모델을 사용하기 위한 다운로드 과정입니다.'],
      image: ollamaModelPull,
      imageAlt: 'PowerShell에서 ollama pull gemma3:1b로 모델을 다운로드하는 화면',
      imageCaption: '15. Ollama에서 Gemma 3 1B 모델 다운로드',
      steps: ['ollama pull gemma3:1b'],
    },
    {
      title: '9. Ollama 연결 결과 · 로컬 Gemma 3 모델 선택',
      paragraphs: ['Ollama로 gemma3:1b를 로컬에 설치한 뒤 Open WebUI에서 모델을 확인했습니다. 모델 선택 메뉴의 로컬 탭에 gemma3:1b가 표시되고, 해당 모델을 선택한 대화 화면으로 이동했습니다. 내려받은 로컬 모델을 Open WebUI에서 불러와 사용할 수 있는 상태를 확인한 과정입니다.'],
      image: ollamaModels,
      imageAlt: 'Open WebUI의 로컬 모델 목록에서 gemma3:1b를 선택한 화면',
      imageCaption: '16. Ollama 로컬 Gemma 3 모델 연결과 선택',
    },
    {
      title: '10. Ollama 대화 결과 · 로컬 모델 응답 확인',
      paragraphs: ['gemma3:1b를 선택한 뒤 로컬 Gemma 3 모델의 한국어 응답을 확인했습니다. 모델 설치와 연결을 마치고 Open WebUI에서 Ollama 모델과 대화할 수 있는 상태입니다.'],
      image: ollamaChat,
      imageAlt: 'Open WebUI에서 Ollama의 gemma3:1b 모델과 한국어로 대화한 화면',
      imageCaption: '17. Ollama 로컬 모델과의 대화 성공 화면',
    },
  ],
}
