import thumbnail from '../assets/thumbnail/post-discord-gemini.svg'
import secretKeyImage from '../assets/screenshot/discordbot/디스코드 시크릿키.png'
import permissionImage from '../assets/screenshot/discordbot/디코 권한 설정.png'
import batchRunImage from '../assets/screenshot/discordbot/봇 배치 파일 실행 .png'
import botOnlineImage from '../assets/screenshot/discordbot/실행된 봇.png'
import answerImage from '../assets/screenshot/discordbot/대답 성공.png'
import autoResponseImage from '../assets/screenshot/discordbot/자동응답 설정.png'
import webSearchImage from '../assets/screenshot/discordbot/인터넷검색 추가.png'
import imageAnalysisImage from '../assets/screenshot/discordbot/이미지분석.png'
import imageGenerationImage from '../assets/screenshot/discordbot/이미지생성.png'

export const discordGeminiBot = {
  id: 'discord-gemini-bot',
  title: 'Discord Gemini Bot · 대화와 음성, 일정 관리를 돕는 매니저',
  topic: 'AI',
  category: 'Discord · Gemini · Python',
  thumbnail,
  excerpt: 'Discord를 주로 사용하는 사람이 채팅과 음성으로 질문하고 간단한 일정 정리와 서버 작업을 맡길 수 있도록 만든 개인 매니저 봇입니다. Gemini 대화에 검색엔진을 연결해 최신 정보도 확인할 수 있게 구성했습니다.',
  sections: {
    pipeline: ['Discord 애플리케이션과 봇 인증 정보 준비', '봇 권한 설정과 서버 설치', 'Windows 배치 파일로 봇 실행', 'Gemini 기본 대화와 자동 응답 연결', '검색엔진을 이용한 최신 정보 보완', '이미지 분석·생성 기능 연결', '음성 명령과 서버 관리 기능 구성'],
    problems: ['Gemini 모델의 기본 지식은 학습 및 배포 시점의 범위에 머물러 있어 현재 날씨나 최근 정보에 그대로 답하기 어려웠습니다.', 'Gemini API에 현재 메시지만 전달했을 때 봇이 앞에서 자신이 답한 내용과 사용자의 이전 질문을 기억하지 못해 대화가 이어지지 않았습니다.', '이미지 생성에 사용한 Preview 모델은 모델 제공 상태가 바뀌면 더 이상 호출할 수 있어, 기능 코드가 남아 있어도 같은 모델명으로 실행되지 않을 수 있습니다.', 'Discord 메시지 응답, 음성 처리와 서버 관리가 한 흐름에 모이면 기능별 상태와 오류를 관리하기 어려웠습니다.'],
    reframing: ['최신 정보 문제를 모델 자체의 지식 부족으로만 보지 않고, 질문에 따라 외부 검색 결과를 가져와 모델에 전달하는 정보 연결 문제로 정의했습니다.', '대화 기억 문제는 모델이 자동으로 기억할 것이라 기대하지 않고, 사용자별 대화 기록을 저장했다가 다음 요청에 함께 보내야 하는 세션 관리 문제로 정의했습니다.', 'Discord를 단순한 챗봇 창이 아니라 사용자가 평소 머무는 공간에서 대화·음성·일정 정리·채널 관리를 맡기는 매니저 인터페이스로 구성했습니다.'],
    solution: ['Google Gemini API의 Google Search Grounding 도구를 요청 설정에 연결해 최신 정보가 필요한 질문은 검색 결과를 바탕으로 답하도록 구성했습니다.', 'ConversationManager를 임시 메모리 데이터베이스처럼 구성해 Discord 사용자 ID별 질문과 봇 답변을 저장하고, 다음 Gemini 요청에 이전 기록을 함께 전달했습니다.', '대화 기록, 자동 응답 채널, 음성 인식·TTS, 자연어 관리 명령과 채널 분류를 기능별 모듈로 나누었습니다.', '이미지 입력은 분석 경로로 처리하고 이미지 생성은 생성 기능을 지원하는 별도 모델을 호출하도록 구분했습니다.'],
    impact: ['Discord 안에서 봇을 호출하거나 자동 응답 채널에 메시지를 입력해 AI 답변을 받을 수 있게 되었습니다.', '사용자별 최근 대화를 다음 요청에 포함해 봇이 자신이 한 답변과 앞선 질문의 맥락을 이어갈 수 있게 되었습니다.', '날씨처럼 시점에 따라 달라지는 질문에도 검색 결과를 연결해 최신 정보를 포함한 답변을 만들 수 있게 되었습니다.', '텍스트뿐 아니라 이미지 분석과 음성 입력·출력까지 하나의 Discord 매니저 흐름으로 확장했습니다.'],
    reflection: ['모델이 답변을 생성할 수 있다는 것과 최신 사실을 알고 있다는 것은 다르므로, 정보의 시점이 중요한 요청에는 검색 같은 외부 도구가 필요하다는 점을 확인했습니다.', '대화형 서비스에서는 현재 질문만 보내는 것으로 충분하지 않고, 필요한 범위의 이전 대화를 역할 정보와 함께 전달해야 맥락을 유지할 수 있었습니다.', '외부 모델의 Preview 기능은 제공 상태가 바뀔 수 있어 모델명을 설정으로 분리하고, 지원되는 모델로 교체할 수 있는 구조가 필요했습니다.'],
  },
  studyNotes: [
    {
      title: '1. 제작 목적 · Discord 안에서 사용하는 개인 매니저',
      paragraphs: ['Discord를 주로 사용하는 사람이 별도 프로그램을 열지 않고 채팅이나 음성으로 간단한 일을 맡길 수 있도록 만들었습니다. 질문에 답하는 기능을 시작으로 일정 정리, 메시지 분류와 서버 관리까지 연결하는 것이 목적이었습니다.', 'discord_bot.py에서 Discord 메시지와 명령을 받고, Gemini 대화·검색·이미지·음성·채널 설정은 기능별 모듈로 나누어 구성했습니다.'],
      items: ['Python과 discord.py: Discord 이벤트와 명령 처리', 'Gemini: 자연어 요청 해석과 답변 생성', '검색 도구: 최신 정보가 필요한 질문 보완', 'SpeechRecognition·Edge TTS·FFmpeg: 음성 입력과 응답 재생', 'JSON 설정: 자동 응답 채널과 채널 매핑 유지'],
    },
    {
      title: '2. Discord 애플리케이션 · 인증 정보 준비',
      image: secretKeyImage,
      imageAlt: 'Discord Developer Portal에서 봇 애플리케이션의 OAuth2 클라이언트 정보를 확인하는 화면',
      imageCaption: '1. Discord 애플리케이션의 OAuth2 클라이언트 정보 준비',
      paragraphs: ['Discord Developer Portal에서 봇으로 사용할 애플리케이션을 만들고 OAuth2 클라이언트 정보를 확인했습니다. 봇 실행에는 애플리케이션과 연결된 인증 정보가 필요하며, 실제 값은 코드에 직접 공개하지 않고 실행 환경에서 불러오도록 구성했습니다.'],
    },
    {
      title: '3. 서버 설치 · 봇 권한 설정',
      image: permissionImage,
      imageAlt: 'Discord OAuth2 URL 생성 화면에서 봇의 서버 권한을 선택하는 모습',
      imageCaption: '2. Discord 서버에서 사용할 봇 권한 설정',
      paragraphs: ['OAuth2 설치 URL을 만들 때 봇이 서버에서 수행할 권한을 지정했습니다. 메시지 응답과 채널 관리, 음성 채널 기능을 실행하려면 해당 작업에 필요한 Discord 권한이 봇 역할에 포함되어야 합니다.'],
    },
    {
      title: '4. 봇 실행 · Windows 배치 파일',
      image: batchRunImage,
      imageAlt: 'Windows 터미널에서 Discord Gemini Bot 배치 파일을 실행한 로그 화면',
      imageCaption: '3. 배치 파일을 이용한 Discord Bot 실행 로그',
      paragraphs: ['반복해서 실행하기 쉽도록 Python 실행 경로와 시작 명령을 Windows 배치 파일로 구성했습니다. 실행 로그에서 음성 인식 초기화, 자동 응답 채널 불러오기, 채널 매핑 파일 준비와 Discord Gateway 연결 과정을 확인할 수 있습니다.'],
    },
    {
      title: '5. 접속 상태 · Discord 서버에서 봇 확인',
      image: botOnlineImage,
      imageAlt: 'Discord 멤버 목록에서 온라인 상태로 표시된 웅이챗봇',
      imageCaption: '4. Discord 서버에 접속한 봇 계정',
      paragraphs: ['프로그램이 Gateway에 연결되면 Discord 서버의 멤버 목록에서 봇이 온라인 상태로 표시됩니다. 상태 메시지에는 매니저가 대기 중임을 표시하도록 설정했습니다.'],
    },
    {
      title: '6. 자동 응답 · 멘션 없이 사용하는 채널',
      image: autoResponseImage,
      imageAlt: 'Discord 채널을 봇 자동 응답 채널로 설정한 결과 화면',
      imageCaption: '6. 현재 채널의 자동 응답 설정',
      paragraphs: ['매번 봇을 멘션하지 않아도 사용할 수 있도록 특정 채널을 자동 응답 채널로 지정했습니다. 설정된 채널 ID는 JSON 파일에 저장하고 프로그램을 다시 실행할 때 불러옵니다. 다른 채널에서는 기존처럼 멘션이나 DM으로만 응답합니다.'],
      items: ['!자동응답설정: 현재 채널에서 자동 응답 활성화', '!자동응답해제: 현재 채널의 자동 응답 해제'],
    },
    {
      title: '7. 기본 대화 · Gemini 응답 연결',
      image: answerImage,
      imageAlt: 'Discord 채널에서 봇을 멘션해 Gemini의 답변을 받은 화면',
      imageCaption: '5. 멘션을 통한 Gemini 기본 대화',
      paragraphs: ['봇 멘션, DM 또는 자동 응답 채널의 메시지를 Gemini에 전달하고 생성된 답변을 Discord 메시지로 반환합니다.', '처음에는 현재 질문만 API로 보내 봇이 직전에 자신이 한 말도 기억하지 못했습니다. 이를 해결하기 위해 ConversationManager를 임시 메모리 데이터베이스로 만들고 Discord 사용자 ID마다 user와 model 역할의 메시지, 저장 시각과 마지막 활동 시각을 보관했습니다.', '새 질문이 오면 get_history가 저장된 내용을 Gemini API 형식으로 변환하고, generate_response_with_history가 이전 기록 뒤에 현재 질문을 붙여 모델에 전달합니다. 사용자별 최근 10회 대화에 해당하는 최대 20개 메시지만 유지하며 마지막 활동 후 10분이 지나면 세션을 비웁니다. 프로그램을 종료하면 사라지는 임시 저장 방식입니다.'],
      items: ['conversations: 사용자 ID별 질문과 봇 답변 저장', 'last_activity: 마지막 대화 시각으로 10분 만료 판단', 'get_history: 저장 내용을 Gemini의 role·parts 형식으로 변환', '!대화초기화: 해당 사용자의 대화 기록을 직접 삭제', '긴 응답 처리: Discord 메시지 제한에 맞춰 나누어 전송'],
    },
    {
      title: '8. 문제 해결 · 검색엔진으로 최신 정보 가져오기',
      image: webSearchImage,
      imageAlt: 'Discord에서 현재 서울 날씨를 질문하고 최신 시각과 날씨 정보를 받은 화면',
      imageCaption: '7. 검색 도구를 이용한 현재 날씨 응답',
      paragraphs: ['Gemini 모델만 호출했을 때는 모델이 학습하고 배포된 시점 이후의 정보를 직접 알 수 없어 현재 날씨와 최신 소식을 정확히 가져오기 어려웠습니다. 이를 해결하기 위해 별도의 검색 사이트 응답을 직접 파싱하는 방식 대신 Gemini API에 포함된 Google Search Grounding을 연결했습니다.', 'gemini.py의 _get_search_grounding_config에서 types.GoogleSearch()로 Google 검색 도구를 만들고, types.Tool(google_search=...)로 감싼 뒤 GenerateContentConfig의 tools 배열에 넣었습니다. discord_bot.py에서는 일반 대화를 처리할 때 use_search를 활성화하고, generate_response 또는 generate_response_with_history에 전달합니다.', 'Gemini의 generate_content 호출은 이 설정을 받아 최신 정보가 필요한 질문에서 Google 검색 결과를 참고합니다. 검색으로 가져온 내용을 모델이 Discord 답변 형태로 정리하며, 날씨 화면에서는 현재 시각과 서울의 기온·체감 온도·습도·강수확률을 포함한 응답으로 연결 상태를 확인할 수 있습니다.'],
      items: ['검색 도구 생성: types.GoogleSearch()', 'Gemini 도구 연결: types.Tool의 google_search에 검색 도구 지정', '요청 설정: GenerateContentConfig의 tools에 Grounding 도구 추가', '대화 호출: use_search 값을 응답 함수와 대화 기록 포함 함수에 전달'],
    },
    {
      title: '9. 이미지 분석 · 첨부파일 내용 설명',
      image: imageAnalysisImage,
      imageAlt: 'Discord에 첨부한 이미지의 인물과 장면을 Gemini가 분석한 화면',
      imageCaption: '8. Discord 첨부 이미지 분석 결과',
      paragraphs: ['이미지가 첨부된 메시지는 일반 텍스트 대화와 구분해 이미지 분석 경로로 처리합니다. 첫 번째 이미지 파일을 내려받아 Gemini에 질문과 함께 전달하고, 인물·배경·구도 등 분석 결과를 Discord 메시지로 반환합니다.'],
    },
    {
      title: '10. 이미지 생성 · 지원 모델을 이용한 결과 전송',
      image: imageGenerationImage,
      imageAlt: 'Discord 이미지 생성 명령으로 고양이 이미지를 생성해 전송한 화면',
      imageCaption: '9. 이미지 생성 명령의 실행 결과',
      paragraphs: ['!이미지생성 명령의 설명을 이미지 생성 모델에 전달하고, 반환된 이미지 데이터를 파일로 저장해 Discord에 전송하는 기능을 만들었습니다. 화면은 고양이 이미지 요청을 처리해 생성 결과를 전송한 모습입니다.', '프로젝트에서 사용한 gemini-2.0-flash-preview-image-generation 같은 Preview 모델은 제공 상태가 바뀌면 같은 모델명으로 더 이상 실행되지 않을 수 있습니다. 일반 대화용 Gemini 모델이 모두 이미지를 생성하는 것도 아니므로, 이 기능을 다시 사용할 때는 이미지 출력을 지원하는 Gemini Image 모델로 설정을 바꿔야 합니다.'],
      items: ['!이미지생성: 설명을 받아 이미지 생성', '!그림 / !image: 이미지 생성 명령의 별칭', '모델 설정: 이미지 출력을 지원하는 모델명을 별도로 사용'],
    },
    {
      title: '11. 음성 대화 · 말로 요청하고 음성으로 듣기',
      paragraphs: ['voice_recognition.py는 Discord 음성 채널에서 받은 음성을 텍스트로 바꾸고 Gemini 요청으로 전달합니다. 수동 녹음과 연속 듣기를 나누고, 연속 듣기에서는 호출 키워드가 포함된 음성만 처리하도록 구성했습니다.', 'tts_manager.py는 Gemini의 답변을 Edge TTS로 MP3 파일로 만든 뒤 FFmpeg 오디오 소스로 재생합니다. Discord를 사용하면서 말로 일정 정리나 간단한 요청을 전달하고 음성으로 결과를 듣기 위한 기능입니다.'],
      items: ['!듣기: 지정한 시간 동안 음성 인식', '!자동듣기 / !듣기중지: 연속 듣기 제어', '!음성변경 / !음성목록: TTS 음성 선택', '호출 키워드: 웅이매니저, 매니저, AI, 봇'],
    },
    {
      title: '12. 서버 관리와 메시지 정리 · 매니저 기능 확장',
      paragraphs: ['자연어 요청을 음성 채널 연결 해제, 멤버 이동, 닉네임 변경 또는 일반 대화로 분류하고, 권한과 대상을 확인한 뒤 관리 작업으로 연결했습니다. 음성 채널 참여자를 무작위 팀으로 나누는 기능도 함께 구성했습니다.', '정리 채널의 메시지는 회의 내용, 일정 등 주제별로 분류해 연결된 목적지 채널에 전달합니다. 카테고리와 채널의 연결은 JSON 파일로 유지해 Discord 안에서 정보가 쌓일 위치를 관리할 수 있게 했습니다.'],
      items: ['!강퇴 / !이동 / !닉변경: 음성 채널과 멤버 관리', '!팀짜기: 참여자를 무작위 팀으로 구성', '!채널매핑: 분류 주제와 목적지 채널 연결', '!정리채널설정: 메시지를 분류할 입력 채널 지정'],
    },
    {
      title: '13. 기타 기능 · 상태 확인과 설정 관리',
      paragraphs: ['대화와 매니저 기능 외에도 봇을 운영하면서 필요한 상태 확인, 설정 목록 관리와 오류 처리를 명령어로 구성했습니다. 자주 쓰는 명령에는 한글·영문 별칭을 함께 지정해 같은 기능을 여러 이름으로 실행할 수 있습니다.', '알 수 없는 명령은 별도 오류 메시지 없이 넘기고, 처리 중 오류가 발생한 명령은 사용자에게 오류 안내를 보냅니다. 시작할 때는 DISCORD_BOT_TOKEN 환경 변수를 확인하고 앞에 Bot 접두사가 들어 있으면 제거한 뒤 연결합니다.'],
      items: [
        '!상태: Discord 지연시간, 연결된 서버 수와 사용 중인 Gemini 모델 확인',
        '!도움말: 대화·검색·이미지·음성·관리 명령을 Discord Embed로 안내',
        '!자동응답목록: 서버별로 설정된 자동 응답 채널 확인',
        '!매핑목록 / !매핑삭제: 메시지 분류 키워드와 목적지 채널 연결 조회·삭제',
        '!정리채널해제: 현재 서버의 메시지 정리 입력 채널 설정 제거',
        '명령어 별칭: 초기화·reset, 그림·image, 팀·team처럼 같은 기능을 다른 이름으로 실행',
        '이미지 임시 파일 정리: Discord 전송을 마치거나 오류가 발생하면 생성 파일 삭제',
        '권한 오류 안내: 채널 관리나 멤버 이동 권한이 없을 때 필요한 권한 표시',
      ],
    },
  ],
}
