import thumbnail from '../assets/post-template-transfer.svg'

const repository = 'https://github.com/WoongYeeYa/TemplateTransfer_Tool'
const code = `${repository}/blob/719fa358c8c639ce5ae1b2d1a034d149ace649d3`

export const templateTransferTool = {
  id: 'template-transfer-tool',
  title: 'TemplateTransfer Tool · Word 문서를 HWP로 옮기기',
  date: '2026.09.14',
  topic: '코딩',
  category: 'Python · MCP · 문서 변환',
  thumbnail,
  excerpt: '공공 사업에서 전달받은 Word 문서를 HWP로 옮기기 위해 시작한 도구입니다. MCP의 서식 처리 한계와 한글 자동화에서 겪은 문제를 정리하고, 변환이 차단된 것인지 공식 자료를 확인했습니다.',
  readTime: '5 min read',
  sections: {
    pipeline: ['기관에서 받은 Word 문서를 HWP로 옮기는 도구 구상', 'HWP 관련 MCP로 문서와 표 서식 재현 시도', '셀 병합·배경색 등 서식 처리 문제 확인', '한글에서 Word 문서를 직접 열어 HWP로 저장하는 방법 검토', '공식 문서로 지원 범위와 보안·호환성 제약 확인'],
    problems: ['HWP 관련 MCP를 사용하는 과정에서 셀 병합과 색칠 등 다양한 서식 처리 문제가 발생했습니다. 한글에서 Word 문서를 직접 열어 저장하는 방법도 시도했지만 원하는 결과를 얻지 못해, 기능이 막힌 것인지 의문이 생겼습니다.'],
    reframing: ['서식을 하나씩 재현하는 대신 한글의 문서 불러오기 기능을 활용하는 방향으로 접근을 바꿨습니다. 공식 자료를 확인해 보니 변환 기능의 지원 여부와 실제 환경에서의 실패 원인을 나눠 살펴볼 필요가 있었습니다.'],
    solution: ['공식 자료에서 Word 문서 열기와 HWP 저장 지원을 확인했습니다. 당시 실패 원인은 확정되지 않았으며, 직접 열기 방식은 설치된 문서 필터와 보안 모듈 등록 상태를 확인한 뒤 다시 검증할 대상으로 남아 있습니다.'],
    impact: ['셀 병합·배경색 재현 문제와 파일 열기·저장 문제를 구분해 정리했습니다. 원본 서식을 그대로 보존하는 변환이 완성됐다는 결과는 아직 확인하지 못했습니다.'],
    reflection: ['문서가 생성되는 것과 원본의 표·색상·배치가 유지되는 것은 별개의 기준입니다. 자동화가 실패했을 때는 기능 자체의 차단으로 단정하기 전에 파일 형식, 호출 방식과 실행 환경을 함께 확인해야 한다는 점을 공부했습니다.'],
  },
  studyNotes: [
    {
      title: '1. 만든 이유 · 기관 간 문서 형식 차이 줄이기',
      paragraphs: ['공공 사업에서는 HWP를 사용하는 경우가 많습니다. 다른 기관에서 DOC 형식의 문서를 받았을 때 내용을 다시 작성하지 않고 HWP로 옮길 수 있는 도구를 만들고 싶었습니다.', '목표는 확장자만 바꾸는 것이 아니라 문서의 내용과 표, 병합된 셀, 색상과 배치를 가능한 한 그대로 유지하는 것이었습니다.'],
    },
    {
      title: '2. MCP로 시도하면서 겪은 문제',
      paragraphs: ['HWP 관련 MCP를 사용해 문서를 다루는 과정에서 셀 병합이나 색칠 등 여러 기능이 원하는 대로 동작하지 않았습니다. 특히 표의 구조와 서식이 달라지면 원본을 그대로 옮긴다는 목적을 달성하기 어려웠습니다.', '저장소의 README에도 Python COM 방식에서 HTableCellBlock 오류, 셀 배경색 서버 예외와 복잡한 표 변환 실패가 기록되어 있습니다. hwpx_converter_new.py는 HWPX MCP의 문단 서식 제어 한계를 적어 둔 시도 단계의 파일이며, 현재 함수는 False를 반환합니다. MCP에서 겪은 문제와 COM 코드에 기록된 오류가 모두 같은 원인이라고 단정하지는 않았습니다.'],
    },
    {
      title: '3. 다른 접근 · 한글에서 직접 열고 저장하기',
      paragraphs: ['표와 서식을 새로 만드는 방식이 어렵다면, Word 문서를 한글에서 직접 열고 HWP로 저장하는 방법을 활용하려고 했습니다. 이 과정에서도 문제가 발생해 한글이 해당 동작을 막은 것인지 확인하게 되었습니다.', '현재 GitHub 코드의 perform_conversion은 이 직접 열기 방식과 다릅니다. python-docx의 Document로 입력을 읽고 FileNew로 빈 한글 문서를 만든 다음, 문단과 표를 재구성해 SaveAs로 저장합니다. 이 함수에는 입력 Word 문서에 대한 hwp.Open 호출이 없습니다.'],
      items: ['frontend: 파일 업로드와 변환 요청을 위한 HTML·CSS·JavaScript 화면입니다.', 'backend/main.py: FastAPI로 업로드와 변환 API를 제공합니다.', 'backend/hwp_converter.py: 한글 COM 객체를 생성하고 DOCX 내용과 서식을 HWP에 재구성합니다.', 'create_complex_table.py: 병합된 셀과 배경색 등이 있는 테스트 문서를 만드는 코드입니다. 테스트 코드의 존재만으로 변환 성공을 의미하지는 않습니다.'],
    },
    {
      title: '4. 확인 결과 · 한글이 변환을 막은 것인가?',
      paragraphs: ['2026년 9월 14일 확인한 한컴 공식 자료를 근거로 보면, DOC/DOCX를 열어 HWP로 저장하는 기능을 한글이 일괄 차단했다고 판단할 근거는 없습니다. 한컴 개발자 포럼은 Open과 SaveAs의 문서 포맷에 HWP, DOC용 DOCRTF와 DOCX용 OOXML 등을 안내하며, 실제 지원 범위는 한글에 설치된 문서 필터에 따라 달라진다고 설명합니다.', '한글 오토메이션의 로컬 파일 열기·저장에는 보안 승인 절차가 있습니다. 공식 가이드는 이를 처리하기 위한 보안 모듈과 RegisterModule 사용 방법을 제공합니다. 보안 승인 메시지가 나타나는 현상은 문서 변환 기능 전체가 금지됐다는 뜻과 구분해야 합니다.', '당시 사용한 한글 버전, Open·SaveAs 호출의 반환값과 오류 메시지가 확인되지 않아 해당 시도의 실패 원인은 확정할 수 없습니다. 글에서는 직접 열기·저장 시도가 원하는 대로 동작하지 않았다는 경험과, 공식적으로 관련 기능이 제공된다는 확인 결과를 나누어 기록했습니다.'],
    },
    {
      title: '5. 지원되는 변환과 원본 서식 보존의 차이',
      paragraphs: ['한컴의 공식 호환성 문서에는 Word DOCX를 한글로 불러올 때 표의 병합, 글꼴·자간, 그림의 위치 등 일부 요소가 다르게 나타날 수 있다고 안내되어 있습니다. 직접 열기와 저장에 성공하더라도 원본과 완전히 동일한 결과가 보장되는 것은 아닙니다.', 'DOC와 DOCX도 구분해야 합니다. 업로드 API는 두 확장자를 허용하지만 현재 변환 함수는 python-docx의 Document를 사용하므로, 구형 바이너리 DOC를 그대로 처리하는 경로가 구현됐다고 볼 수 없습니다. 또한 README가 권장하는 Java 버전은 이 검토 대상 저장소에 없어 구현과 성과를 확인한 내용으로 넣지 않았습니다.'],
    },
    {
      title: '6. 다음 확인 항목 · 실패한 지점부터 좁히기',
      paragraphs: ['아래 내용은 해결 완료 기록이 아니라 직접 열기·저장 방식을 다시 검증할 때 확인할 항목입니다. 같은 입력 문서를 한글 화면에서 수동으로 열고 HWP로 저장할 수 있는지 먼저 확인하면, 문서 호환성 문제와 자동화 호출 문제를 나누는 데 도움이 됩니다.'],
      items: ['입력 파일: DOC인지 DOCX인지, 실제 파일 내용과 확장자가 일치하는지 확인합니다.', '실행 환경: 한글 버전과 업데이트 상태, 해당 형식의 문서 필터 지원을 확인합니다.', '보안 승인: 공식 Automation용 보안 모듈의 등록과 RegisterModule 결과를 확인합니다.', '열기·저장: Open과 SaveAs의 반환값, 예외 메시지와 출력 파일을 각각 확인합니다.', '서식 비교: 병합된 셀, 배경색, 글꼴과 페이지 배치를 원본과 비교합니다.'],
    },
  ],
  sources: [
    { title: 'GitHub · TemplateTransfer_Tool', url: repository },
    { title: '검토한 코드 · DOCX 재구성 및 HWP 저장', url: `${code}/backend/hwp_converter.py` },
    { title: '저장소의 제약 기록 · README', url: `${code}/README.md` },
    { title: 'HWPX MCP 시도 기록', url: `${code}/hwpx_converter_new.py` },
    { title: '한컴 공식 · Open / SaveAs 문서 포맷과 필터', url: 'https://forum.developer.hancom.com/t/saveas/660' },
    { title: '한컴 공식 · 오토메이션과 파일 접근 보안 모듈', url: 'https://developer.hancom.com/hwpautomation' },
    { title: '한컴 공식 · Word와 한글의 서식 호환성', url: 'https://help.hancom.com/hoffice/multi/ko_kr/hwp/support/compatibility.htm' },
  ],
}
