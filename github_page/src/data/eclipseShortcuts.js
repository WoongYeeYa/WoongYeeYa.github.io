import thumbnail from '../assets/thumbnail/post-eclipse-shortcuts.svg'

export const eclipseShortcuts = {
  id: 'eclipse-shortcuts',
  title: 'Eclipse · 자주 쓰는 단축키 정리',
  topic: '개발 도구',
  category: 'Eclipse · Java · 단축키',
  thumbnail,
  excerpt: 'Java 개발 중 자주 반복하는 편집, 코드 탐색, 실행과 디버깅 단축키를 추렸습니다. Windows 기본 키 설정을 기준으로 필요한 기능을 빠르게 찾아봅니다.',
  explanationOnly: true,
  explanationTitle: '자주 쓰는 Eclipse 단축키',
  explanationLabel: 'Eclipse Shortcuts',
  explanationDescription: '먼저 자동 완성, 빠른 수정, 선언 이동부터 익히고 작업에 맞춰 하나씩 활용합니다.',
  sections: { pipeline: ['코드 작성과 정리', '검색과 코드 탐색', '실행과 디버깅', '편집 화면과 템플릿'] },
  studyNotes: [
    {
      title: '1. 코드 작성과 정리',
      items: [
        'Ctrl + Space — 자동 완성(Content Assist): 클래스, 메소드, 변수와 템플릿 후보를 표시합니다.',
        'Ctrl + 1 — 빠른 수정(Quick Fix): 오류 수정이나 현재 코드에 적용할 수 있는 제안을 확인합니다.',
        'Ctrl + Shift + O — import 정리: 필요한 import를 추가하고 사용하지 않는 import를 제거합니다.',
        'Ctrl + Shift + F — 코드 서식 정리: 선택 영역 또는 파일을 설정된 포맷터에 맞춰 정리합니다.',
        'Ctrl + / — 줄 주석 전환: 현재 줄이나 선택한 여러 줄의 주석을 설정·해제합니다.',
        'Ctrl + D — 현재 줄을 삭제합니다.',
        'Alt + ↑ / ↓ — 현재 줄 또는 선택한 줄을 위아래로 이동합니다.',
        'Ctrl + Alt + ↑ / ↓ — 현재 줄 또는 선택한 줄을 위아래로 복사합니다.',
        'Alt + Shift + R — 이름 변경: 변수, 메소드, 클래스의 이름과 연결된 참조를 함께 변경합니다.',
      ],
    },
    {
      title: '2. 검색과 코드 탐색',
      items: [
        'Ctrl + F — 현재 파일에서 문자열을 검색하거나 바꿉니다.',
        'Ctrl + L — 지정한 줄 번호로 이동합니다.',
        'F3 또는 Ctrl + 클릭 — 선택한 클래스, 메소드, 필드의 선언 위치로 이동합니다.',
        'Alt + ← / → — 이전 또는 다음 탐색 위치로 돌아갑니다.',
        'Ctrl + O — 현재 파일의 메소드와 필드 목록을 열어 원하는 위치로 이동합니다.',
        'Ctrl + Shift + T — 이름으로 Java 타입(클래스·인터페이스 등)을 찾습니다.',
        'Ctrl + Shift + G — 선택한 메소드나 필드 등을 참조하는 위치를 검색합니다.',
        'Ctrl + T — 타입 계층을 팝업으로 확인합니다. 상속 관계나 구현 클래스를 살펴볼 때 유용합니다.',
      ],
    },
    {
      title: '3. 실행과 디버깅',
      paragraphs: ['중단점을 설정한 뒤 디버그 실행을 시작합니다. 실행이 멈추면 F6으로 한 단계씩 확인하고, 메소드 내부를 보고 싶을 때 F5를 사용합니다.'],
      items: [
        'Ctrl + F11 — 마지막 실행 구성을 다시 실행합니다.',
        'F11 — 마지막 실행 구성을 디버그 모드로 실행합니다.',
        'Ctrl + Shift + B — 현재 줄에 중단점을 설정하거나 해제합니다.',
        'F6 — Step Over: 메소드 내부로 들어가지 않고 현재 줄을 실행합니다.',
        'F5 — Step Into: 메소드 호출이 있으면 내부로 들어가 실행을 따라갑니다.',
        'F8 — Resume: 중단된 실행을 계속합니다. 다음 중단점 등에서 다시 멈춥니다.',
      ],
    },
    {
      title: '4. 편집 화면',
      items: [
        'Ctrl + M — 현재 편집기 또는 뷰를 최대화하거나 원래 배치로 복원합니다.',
        'Ctrl + W — 현재 파일을 닫습니다.',
        'Ctrl + F6 — 열려 있는 편집기 사이를 전환합니다.',
      ],
    },
    {
      title: '5. 자동 완성으로 템플릿 사용하기',
      paragraphs: ['Java 편집기에서 아래 약어를 입력하고 Ctrl + Space를 눌러 템플릿 후보를 선택합니다. 커서 위치와 템플릿 설정에 따라 표시되는 후보가 달라질 수 있습니다.'],
      items: [
        'syso — System.out.println() 출력문을 작성합니다.',
        'main — main 메소드의 기본 구조를 작성합니다.',
        'for — 반복문 구조를 선택해 작성합니다.',
        'try — try-catch 구조를 작성합니다.',
      ],
      afterParagraphs: ['사용자 템플릿은 Window → Preferences → Java → Editor → Templates에서 관리합니다.'],
    },
    {
      title: '6. 단축키가 다르게 동작할 때',
      paragraphs: ['운영체제, 플러그인, 현재 선택한 편집기와 키 설정에 따라 단축키가 달라질 수 있습니다. Ctrl + Shift + L로 현재 사용할 수 있는 단축키를 확인하고, Window → Preferences → General → Keys에서 할당과 충돌을 확인합니다.'],
    },
  ],
}
