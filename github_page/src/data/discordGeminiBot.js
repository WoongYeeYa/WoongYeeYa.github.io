import thumbnail from '../assets/post-discord-gemini.svg'

const repository = 'https://github.com/WoongYeeYa/DiscordGeminiBot'
const code = `${repository}/blob/74cca40d1e0599a13fc174646764b9f2474acd7f`

export const discordGeminiBot = {
  id: 'discord-gemini-bot',
  title: 'Discord Gemini Bot · 대화와 음성, 채널 정리',
  date: '2026.09.14',
  topic: 'AI',
  category: 'Discord · Gemini · Python',
  thumbnail,
  excerpt: 'Discord에서 대화, 이미지 처리와 음성 응답을 제공하는 개인 봇입니다. Gemini를 이용한 자연어 명령 처리와 메시지 분류를 연결해 서버 관리와 채널 정리까지 구성했습니다.',
  readTime: '6 min read',
  sections: {
    pipeline: ['멘션·DM·자동 응답 채널에서 메시지 수신', '텍스트·이미지·관리 요청에 따라 처리', 'Gemini 응답과 대화 기록 관리', '음성 인식과 TTS로 음성 대화 구성', '메시지를 분류해 지정한 채널로 전달'],
    // 실제 경험과 내용은 추가로 전달받은 뒤 채웁니다.
    problems: [],
    reframing: [],
    solution: [],
    impact: [],
    reflection: [],
  },
  studyNotes: [
    {
      title: '1. 프로젝트 목적 · Discord 안에서 사용하는 AI 도우미',
      paragraphs: ['Discord를 벗어나지 않고 질문에 답을 받고 이미지와 음성을 다루기 위한 봇입니다. 대화 기능에 서버 관리, 팀 나누기와 메시지 정리를 함께 연결했습니다.', 'discord_bot.py는 메시지 이벤트와 ! 접두사 명령어를 받는 진입점입니다. Gemini 요청, 대화 기록, 음성 처리와 채널 설정은 기능별 모듈로 나뉩니다.'],
      items: ['Python과 discord.py: Discord 이벤트, 명령어와 비동기 처리를 담당합니다.', 'google-genai와 Pydantic: Gemini 호출과 구조화된 응답 처리를 담당합니다.', 'aiohttp: 첨부 이미지를 다운로드합니다.', 'SpeechRecognition, Edge TTS와 FFmpeg: 음성을 텍스트로 바꾸고 응답을 음성으로 재생하는 데 사용합니다.'],
    },
    {
      title: '2. 텍스트 대화 · 사용자별 맥락을 담아 응답',
      paragraphs: ['봇 멘션, DM 또는 자동 응답으로 지정한 채널의 메시지를 받아 대화합니다. gemini.py의 대화 함수는 코드에서 지정한 gemini-2.5-flash를 사용하며, 검색을 사용할 수 있는 경우 Google Search 도구를 요청 설정에 포함합니다.', 'conversation_manager.py는 사용자 ID별로 대화를 메모리에 저장합니다. 최근 10회 대화에 해당하는 사용자·모델 메시지 최대 20개를 유지하며, 마지막 활동 이후 10분이 지난 기록은 정리합니다. 이전 기록은 현재 질문과 함께 Gemini에 전달됩니다.'],
      items: ['!대화초기화: 해당 사용자의 대화 기록을 지웁니다.', '!자동응답설정 / !자동응답해제: 채널의 자동 응답을 켜거나 끕니다.', 'auto_response_manager.py: 자동 응답 채널 목록을 JSON 파일로 저장하고 불러옵니다.', 'asyncio.to_thread: 동기 Gemini 호출을 별도 스레드에서 실행합니다.'],
    },
    {
      title: '3. 이미지 처리 · 첨부 이미지 설명과 이미지 생성',
      paragraphs: ['이미지를 첨부한 메시지는 텍스트 대화와 분리된 이미지 분석 경로로 처리합니다. 첫 번째 이미지 첨부파일을 다운로드해 임시 파일로 저장하고, Gemini에 전달한 뒤 분석 내용을 Discord로 보냅니다.', '이미지 생성은 !이미지생성 명령어로 받습니다. 텍스트 설명을 이미지 생성 모델에 전달하고 반환된 이미지 데이터를 파일로 저장해 전송하는 구성입니다.'],
      items: ['analyze_image: 코드에서 gemini-2.5-pro를 사용해 이미지를 설명합니다.', 'generate_image: 코드에서 gemini-2.0-flash-preview-image-generation을 사용합니다.', '!그림 / !image: 이미지 생성 명령어의 별칭입니다.'],
    },
    {
      title: '4. 음성 대화 · 음성 인식에서 응답 재생까지',
      paragraphs: ['voice_recognition.py는 녹음한 음성을 텍스트로 바꾸고 Gemini 응답으로 이어 주는 모듈입니다. 수동 녹음과 연속 듣기 경로가 있으며, 연속 듣기는 인식된 텍스트에 호출 키워드가 포함되면 응답하는 방식입니다.', 'tts_manager.py는 Edge TTS로 응답을 MP3로 만들고 FFmpeg 오디오 소스로 Discord 음성 채널에서 재생합니다. 이모지를 제거하고 긴 응답은 500자 기준으로 줄여 읽는 처리가 포함되어 있습니다.'],
      items: ['!듣기: 지정한 시간 동안 음성을 녹음하는 명령어입니다.', '!자동듣기 / !듣기중지: 연속 듣기를 시작하거나 중지합니다.', '호출 키워드: 웅이매니저, 매니저, AI, 봇 등이 포함되어 있습니다.', '!음성변경 / !음성목록: TTS 음성을 선택하고 목록을 확인합니다.'],
    },
    {
      title: '5. 자연어 서버 관리 · 요청을 실행할 작업으로 변환',
      paragraphs: ['자연어 요청을 서버 관리 동작으로 바꾸기 위한 기능입니다. parse_admin_command는 요청을 음성 채널 연결 해제, 음성 채널 이동, 닉네임 변경 또는 일반 대화로 분류합니다.', '결과는 AdminAction 구조의 action, target_user, parameter, confidence 필드로 받습니다. 봇은 관리 동작의 confidence가 0.7 이상이면 해당 처리 경로로 전달하고, 실행 과정에서 요청자의 권한과 작업 대상을 확인합니다.'],
      items: ['!강퇴: 대상 멤버의 음성 채널 연결을 해제하는 명령어입니다.', '!이동: 멤버를 지정한 음성 채널로 이동합니다.', '!닉변경: 서버 닉네임을 변경합니다.', '!팀짜기: 음성 채널 멤버 또는 입력한 사람들을 무작위로 팀에 나눕니다.'],
    },
    {
      title: '6. 채널 정리 · 한 메시지를 주제별로 분류해 전달',
      paragraphs: ['정리 채널에 올라온 내용을 카테고리별로 나누어 지정한 채널로 전달하기 위한 기능입니다. classify_text_by_categories가 내용을 분류하고, ChannelMapper가 카테고리 키워드와 채널의 연결을 관리합니다.', '회의 내용, 합주 일정과 공연 일정처럼 여러 주제가 섞인 글을 분류해 각각의 채널에 보내는 구조입니다. 카테고리별 내용은 ClassifiedMessages 형태로 받고 채널 매핑과 정리 채널 설정은 JSON에 저장합니다.'],
      items: ['!채널매핑: 카테고리 키워드와 목적지 채널을 연결합니다.', '!매핑목록 / !매핑삭제: 연결 목록을 조회하거나 제거합니다.', '!정리채널설정 / !정리채널해제: 분류할 메시지를 받는 채널을 지정하거나 해제합니다.'],
    },
    {
      title: '7. 상태 관리 · 호출 횟수와 설정을 모듈로 분리',
      paragraphs: ['token_tracker.py는 API 호출과 검색 사용 횟수를 날짜별로 기록하고 상태·경고 정보를 제공합니다. 이름과 달리 모델의 입력·출력 토큰 개수 대신 호출 횟수를 관리하는 구성입니다.'],
      items: ['!상태: 지연시간, 서버 수와 사용 횟수를 표시합니다.', '!도움말: 사용할 수 있는 명령어를 안내합니다.', '대화 기록은 메모리에서, 자동 응답·채널 매핑·사용 횟수는 각 관리 모듈과 JSON 파일에서 관리합니다.'],
    },
  ],
  sources: [
    { title: 'GitHub · DiscordGeminiBot', url: repository },
    { title: '메시지 이벤트와 명령어 · discord_bot.py', url: `${code}/discord_bot.py` },
    { title: 'Gemini 호출과 구조화 응답 · gemini.py', url: `${code}/gemini.py` },
    { title: '대화 기록 · conversation_manager.py', url: `${code}/conversation_manager.py` },
    { title: '음성 인식 · voice_recognition.py', url: `${code}/voice_recognition.py` },
    { title: 'Edge TTS · tts_manager.py', url: `${code}/tts_manager.py` },
    { title: '채널 매핑 · channel_mapper.py', url: `${code}/channel_mapper.py` },
    { title: '호출 횟수 관리 · token_tracker.py', url: `${code}/token_tracker.py` },
  ],
}
