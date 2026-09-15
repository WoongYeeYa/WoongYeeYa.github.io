import fundamentalsThumbnail from '../assets/thumbnail/post-java-1.svg'
import objectsThumbnail from '../assets/thumbnail/post-java-2.svg'
import guiThumbnail from '../assets/thumbnail/post-java-3.svg'
import dataThumbnail from '../assets/thumbnail/post-java-4.svg'
import networkThumbnail from '../assets/thumbnail/post-java-5.svg'
import { javaExamples } from './javaExamples'

const sourceArchives = import.meta.glob('../assets/file/notion/*.zip', {
  eager: true,
  query: '?url',
  import: 'default',
})

const studyArchives = {
  1: ['ch01.zip', 'ch02_dataType.zip', 'ch03_operation.zip', 'ch04_Control.zip', 'ch05_Array.zip'],
  2: ['ch06_oop.zip', 'ch07_cons.zip', 'ch08.zip', 'src.zip'],
  3: ['ch10_awt.zip', 'ch11_layout.zip', 'ch12_event.zip', 'ch18_swing.zip'],
  4: ['ch13_exception.zip', 'ch14_io.zip', 'ch15_util.zip', 'ch16_util.zip'],
  5: ['ch17_thread.zip', 'Thread.zip', 'ch19_network.zip', 'ch20_network.zip'],
}

function createStudy(number, title, thumbnail, excerpt, pipeline, studyNotes) {
  return {
    id: `java-study-${number}`,
    title: `Java 공부 ${number} · ${title}`,
    date: '2026.09.14',
    topic: '코딩',
    category: 'Java · 강의 노트',
    thumbnail,
    excerpt,
    readTime: `${Math.max(5, Math.ceil(studyNotes.length * 0.9))} min read`,
    explanationOnly: true,
    explanationTitle: '공부 흐름',
    explanationLabel: 'Java',
    explanationDescription: '강의 노트에서 연결되는 개념과 예제를 함께 정리한 내용',
    sections: { pipeline },
    studyNotes: studyNotes.map((note, noteIndex) => ({
      ...note,
      examples: javaExamples[number].filter((example) => example.noteIndex === noteIndex),
    })),
    downloads: studyArchives[number].map((filename) => ({
      title: filename === 'src.zip' ? '전체 소스 · src.zip' : filename,
      filename,
      url: sourceArchives[`../assets/file/notion/${filename}`],
    })),
  }
}

const javaStudy1 = createStudy(
  1, '기초 문법부터 배열까지', fundamentalsThumbnail,
  'Java 실행 구조, 자료형과 변수, 연산자와 제어문, 배열을 하나의 흐름으로 묶었습니다. 값을 선언하고 계산한 뒤 조건과 반복으로 여러 데이터를 처리하는 기본 문법을 정리했습니다.',
  ['JDK·JVM과 프로그램 실행 구조', '자료형·변수·리터럴과 형변환', '산술·비교·논리·비트 연산', '조건문과 반복문', '배열과 반복을 이용한 일괄 처리'],
  [
    {
      title: '1. Java 프로그램이 실행되는 흐름',
      paragraphs: ['Java 소스는 .java 파일에 작성하고 javac로 컴파일해 .class 바이트코드를 만듭니다. JVM은 이 바이트코드를 실행하며, JDK는 컴파일러와 실행에 필요한 개발 도구를 제공합니다.', '기초 예제는 public static void main(String[] args)를 프로그램 진입점으로 사용했습니다. System.out.println으로 결과를 출력하고, 명령행 인수나 Scanner로 입력을 받는 구조를 공부했습니다.'],
      items: ['소스 파일: Test01.java', '컴파일: javac Test01.java', '실행: java Test01', '주석: //는 한 줄, /* ... */는 여러 줄 설명에 사용합니다.'],
    },
    {
      title: '2. 자료형과 변수 · 저장할 값의 종류 정하기',
      paragraphs: ['변수는 값을 저장하고 이름으로 참조하는 수단입니다. int score = 99처럼 자료형, 변수 이름과 초기값을 함께 선언합니다.', '기본 자료형과 참조 자료형을 나누어 공부했습니다. 기본 자료형에는 boolean, byte, short, int, long, char, float, double이 있고, 클래스·인터페이스·배열은 참조형으로 다룹니다.'],
      items: ['정수: byte 1바이트, short 2바이트, int 4바이트, long 8바이트입니다.', '문자: char는 2바이트의 UTF-16 코드 단위를 나타냅니다.', '실수: float는 4바이트, double은 8바이트입니다.', '논리: boolean은 true와 false를 표현합니다.', '문자열: String은 기본 자료형이 아닌 참조형입니다.'],
    },
    {
      title: '3. 리터럴, 상수와 진법',
      paragraphs: ['코드에 직접 적는 10, 12.5, \'A\', "ABC" 같은 값은 리터럴입니다. 정수·실수·문자·문자열 리터럴의 표기 차이와 final로 값을 다시 대입할 수 없게 하는 선언을 정리했습니다.', '숫자의 표현에서는 10진수, 2진수, 8진수와 16진수를 함께 공부했습니다. 16진수는 0x, 2진수는 0b로 시작하며, 정수 리터럴 앞의 0은 8진수 표기에 사용합니다.'],
      items: ['long 리터럴: 10L', 'float 리터럴: 12.5f', '상수 선언: final int MAX = 100;', 'null: 참조 대상이 없음을 나타내는 값입니다.'],
    },
    {
      title: '4. 형변환과 이름 붙이기',
      paragraphs: ['double value = 100처럼 호환되는 넓은 자료형으로 값을 옮기는 자동 형변환과, int value = (int) 12.5처럼 자료형을 명시하는 캐스팅을 공부했습니다. 실수를 정수로 바꾸면 소수 부분이 잘립니다.', '변수·메서드·클래스 이름은 대소문자를 구분하고, 예약어나 공백을 사용할 수 없습니다. 클래스 이름은 대문자로 시작하고 변수와 메서드는 소문자로 시작하는 관례도 함께 정리했습니다.'],
    },
    {
      title: '5. 연산자 · 값 계산과 조건 만들기',
      paragraphs: ['산술 연산자 +, -, *, /, %와 증감 연산자 ++, --를 공부했습니다. 정수끼리 나누면 정수 몫을 얻고, %로 나머지를 구합니다.', '게시글이 37개이고 한 페이지에 10개를 표시하는 예제에서는 37 / 10으로 몫 3을 구하고, 나머지 7개가 있어 한 페이지를 더하는 흐름으로 계산했습니다. 전위 증감은 변경된 값을, 후위 증감은 변경 전 값을 식에서 사용합니다.'],
      items: ['대입과 복합 대입: =, +=, -=, *=, /=, %=', '비교: >, >=, <, <=, ==, !=', '논리: &&, ||, !', '비트: &, |, ^, ~', '시프트: <<, >>, >>>'],
    },
    {
      title: '6. 조건문과 반복문',
      paragraphs: ['if·else if·else는 조건에 따라 실행할 문장을 고르고, switch는 값에 따른 분기를 구성합니다. 여러 if는 각각 조건을 평가하며, else if로 연결한 분기는 앞 조건이 참이면 뒤 분기를 실행하지 않습니다.', 'for, while과 do-while로 반복을 구성하고 break로 반복을 종료하거나 continue로 다음 반복을 진행하는 흐름을 정리했습니다. do-while은 본문을 실행한 뒤 조건을 검사합니다.'],
    },
    {
      title: '7. 배열과 구구단 · 여러 값 한 번에 처리하기',
      paragraphs: ['배열은 같은 요소 자료형의 여러 값을 인덱스로 다루는 객체입니다. int[] values = {10, 20, 30}으로 초기화하거나 new int[3]으로 크기를 정해 만들고, values[0]처럼 0부터 시작하는 인덱스로 접근합니다.', '배열 길이는 values.length로 확인합니다. 구구단 예제에서는 바깥 반복으로 2단부터 9단까지, 안쪽 반복으로 1부터 9까지 곱하는 중첩 반복을 사용했습니다. 배열의 각 요소를 처리하는 반복과 같은 흐름으로 묶어 공부했습니다.'],
    },
  ],
)

const javaStudy2 = createStudy(
  2, '메서드와 객체지향, 인터페이스', objectsThumbnail,
  '메서드, 생성자, 상속과 다형성, 인터페이스와 추상 클래스를 묶었습니다. 게시판 DAO 예제로 역할의 선언과 구현을 분리하는 구조까지 정리했습니다.',
  ['클래스와 메서드로 처리 단위 구성', '생성자와 this·super로 초기화', '상속·접근 제한과 다형성', '인터페이스·추상 클래스로 역할 정의', '게시판 DAO와 웹 요청 구조 연결'],
  [
    {
      title: '1. 클래스와 메서드',
      paragraphs: ['클래스는 객체의 상태를 나타내는 필드와 동작을 수행하는 메서드를 묶습니다. 메서드는 매개변수로 필요한 값을 받고, 반환형으로 처리 결과의 형태를 표현합니다.', '메서드 오버로딩은 같은 이름으로 매개변수의 개수나 자료형이 다른 메서드를 정의하는 것입니다. 지역변수와 필드는 선언 위치에 따라 사용할 수 있는 범위가 달라집니다.'],
    },
    {
      title: '2. 생성자 · 객체의 초기 상태 만들기',
      paragraphs: ['생성자는 클래스 이름과 같고 반환형을 선언하지 않습니다. new로 객체를 만들 때 호출되며, 전달받은 매개변수로 필드를 초기화할 수 있습니다.', '생성자를 하나도 선언하지 않으면 컴파일러가 기본 생성자를 제공합니다. 매개변수 생성자를 선언하면 매개변수 없는 생성자는 자동으로 추가되지 않으므로, 필요한 생성자를 직접 정의하는 흐름을 공부했습니다.'],
      items: ['this.field: 현재 객체의 필드에 접근합니다.', 'this(...): 같은 클래스의 다른 생성자를 호출합니다.', 'super(...): 상위 클래스의 생성자를 호출합니다.', '생성자 오버로딩: 서로 다른 매개변수로 초기화 경로를 구성합니다.'],
    },
    {
      title: '3. 상속과 접근 제한',
      paragraphs: ['클래스는 extends로 다른 클래스를 상속하고, implements로 인터페이스를 구현합니다. 하나의 클래스는 하나의 클래스를 직접 상속할 수 있고, 여러 인터페이스를 구현할 수 있습니다.', '접근 제한에서는 private, 같은 패키지에서 접근하는 기본 접근, protected와 public을 정리했습니다. UML 표기에서는 private를 -, protected를 #, public을 +로 표현합니다.'],
    },
    {
      title: '4. 다형성과 오버라이딩',
      paragraphs: ['상위 자료형의 변수로 하위 객체를 참조하는 구조를 공부했습니다. Object value = new String("abc")처럼 참조 자료형과 실제 객체의 자료형을 구분합니다.', '하위 클래스는 상위 클래스의 메서드를 오버라이딩해 동작을 재정의할 수 있습니다. 호출되는 인스턴스 메서드는 실제 객체의 구현에 따라 달라지며, instanceof로 객체가 특정 자료형에 해당하는지 확인합니다.'],
    },
    {
      title: '5. 인터페이스와 추상 클래스',
      paragraphs: ['인터페이스는 구현할 역할을 정의하고, 구현 클래스는 추상 메서드의 동작을 작성합니다. 인터페이스 필드는 public static final이며, 여러 인터페이스의 역할을 한 클래스에서 구현하는 예제를 공부했습니다.', '추상 클래스는 일반 메서드와 추상 메서드를 함께 둘 수 있고 직접 객체를 생성할 수 없습니다. 인터페이스에도 default·static 메서드 등 구현이 있는 메서드를 정의할 수 있어, 역할 선언과 공통 구현의 차이를 중심으로 정리했습니다.'],
      items: ['final 변수: 한 번 대입한 값을 다시 대입할 수 없습니다.', 'final 메서드: 하위 클래스에서 오버라이딩할 수 없습니다.', 'final 클래스: 다른 클래스가 상속할 수 없습니다.'],
    },
    {
      title: '6. 게시판 DAO · 선언과 구현 분리',
      paragraphs: ['BoardDAO에는 boardWrite, boardList, boardContent, boardEdit, boardDelete를 선언하고, BoardDAOImpl에서 각각의 동작을 구현했습니다. 호출부는 BoardDAO dao = new BoardDAOImpl()으로 인터페이스 자료형을 사용합니다.', '예제 구현은 각 작업 이름을 콘솔에 출력하는 구조입니다. 실제 DB 연결보다 인터페이스와 구현 클래스의 관계, 그리고 호출부가 선언된 역할을 사용하는 흐름에 집중했습니다.'],
    },
    {
      title: '7. 웹 프로그램과 연결되는 구조',
      paragraphs: ['추가 메모에서는 JDK·Eclipse, Tomcat과 DB를 준비하는 웹 개발 환경을 정리했습니다. Servlet 예제는 HttpServlet을 상속하고 doGet에서 요청·응답 객체를 받아 응답 내용을 작성하는 구조입니다.', 'web.xml의 servlet과 servlet-mapping으로 요청 URL과 클래스를 연결하고, 응답의 Content-Type과 문자 인코딩을 지정하는 흐름도 함께 공부했습니다. 객체의 역할을 나누는 구조가 웹 요청 처리로 이어지는 내용입니다.'],
    },
  ],
)

const javaStudy3 = createStudy(
  3, 'AWT·Swing 화면과 이벤트', guiThumbnail,
  'AWT, 레이아웃, 이벤트와 Swing을 화면 구성이라는 주제로 합쳤습니다. 창과 컴포넌트를 만들고 사용자 동작에 응답하며, JTable의 데이터를 다루는 흐름을 정리했습니다.',
  ['창·컨테이너·컴포넌트 구성', '레이아웃으로 배치', '리스너와 어댑터로 이벤트 처리', '대화상자와 창 종료', 'Swing과 JTable 데이터 처리'],
  [
    {
      title: '1. AWT와 컴포넌트',
      paragraphs: ['AWT는 Java에서 그래픽 사용자 인터페이스를 구성하는 도구입니다. Frame·Panel 같은 컨테이너에 Button, Label, TextField 등의 컴포넌트를 추가해 화면을 만듭니다.', '창의 크기는 setSize, 위치와 크기는 setBounds로 설정하고, setVisible(true)로 화면에 표시합니다. pack은 내부 컴포넌트의 적절한 크기를 반영해 창 크기를 정합니다.'],
    },
    {
      title: '2. 레이아웃 · 화면 배치 방식',
      paragraphs: ['컴포넌트 배치를 각 좌표로 직접 지정하는 방법과 레이아웃 매니저에 맡기는 방법을 공부했습니다. 화면을 어떻게 나눌지에 따라 레이아웃을 고릅니다.'],
      items: ['FlowLayout: 컴포넌트를 흐름에 따라 배치하며 Panel의 기본 레이아웃입니다.', 'BorderLayout: 동·서·남·북·중앙 영역으로 나누며 Frame에서 기본으로 사용합니다.', 'GridLayout: 같은 크기의 격자로 배치합니다.', 'GridBagLayout: 격자에서 컴포넌트 크기와 배치를 세밀하게 구성합니다.', 'CardLayout: 같은 영역에서 여러 화면을 바꾸어 표시합니다.', 'null 레이아웃: setBounds 등으로 위치와 크기를 직접 지정합니다.'],
    },
    {
      title: '3. 이벤트 처리의 기본 흐름',
      paragraphs: ['사용자의 동작을 발생시키는 컴포넌트에 리스너를 등록하고, 해당 이벤트 메서드에 처리 내용을 작성합니다. 이벤트 소스, 이벤트 객체와 리스너의 관계를 함께 공부했습니다.', '창 닫기 예제는 addWindowListener로 리스너를 등록하고 windowClosing에서 종료 동작을 처리합니다. 리스너를 직접 구현하거나 내부 클래스·익명 클래스로 처리 내용을 구성했습니다.'],
      items: ['WindowListener: 창 열기·닫기·활성화 등의 이벤트입니다.', 'ActionListener: 버튼 클릭이나 TextField의 Enter 같은 동작을 처리합니다.', 'MouseListener·MouseMotionListener: 클릭·진입·이탈·이동·드래그를 처리합니다.', 'KeyListener: 키 누름·해제·문자 입력을 처리합니다.', 'ItemListener: 체크박스나 목록의 선택 상태를 처리합니다.'],
    },
    {
      title: '4. 어댑터와 창 종료',
      paragraphs: ['WindowAdapter나 MouseAdapter를 상속하면 필요한 이벤트 메서드만 오버라이딩할 수 있습니다. 여러 메서드가 있는 리스너에서 특정 동작만 처리하는 방식으로 공부했습니다.', 'dispose는 창의 자원을 해제하고, System.exit는 프로그램을 종료합니다. 창 하나를 닫는 동작과 프로그램 전체를 끝내는 동작을 나누어 정리했습니다.'],
    },
    {
      title: '5. Dialog · 입력을 받는 별도 창',
      paragraphs: ['대화상자는 부모 창과 연결된 별도 화면으로 구성합니다. 모달 대화상자는 닫힐 때까지 관련 창의 입력을 제한하고, 모달리스 대화상자는 다른 창과 함께 사용할 수 있습니다.', '사용자 입력이나 확인 작업을 별도 창에서 처리하는 화면 구성을 공부했습니다.'],
    },
    {
      title: '6. Swing · 컴포넌트 확장',
      paragraphs: ['Swing에서는 JFrame, JButton, JTextField와 JTable 같은 컴포넌트를 사용합니다. AWT에서 공부한 컨테이너·레이아웃·이벤트 개념을 Swing 화면에 연결했습니다.', 'JFrame의 컴포넌트는 content pane에 추가합니다. getContentPane().add(...)로 직접 추가하거나 JFrame의 add 메서드를 통해 구성하는 흐름입니다.'],
    },
    {
      title: '7. JTable과 DefaultTableModel',
      paragraphs: ['JTable은 행과 열로 데이터를 표시하고, DefaultTableModel은 표의 데이터를 관리합니다. 표 데이터를 수정하는 작업과 사용자가 선택한 행을 읽는 작업을 함께 공부했습니다.'],
      items: ['model.setRowCount(0): 표 데이터를 비웁니다.', 'model.addRow(rowData): 행을 추가합니다.', 'model.removeRow(row): 행을 삭제합니다.', 'table.getSelectedRow(): 선택된 행의 인덱스를 얻습니다.', 'table.getValueAt(row, column): 셀 값을 읽습니다.', 'table.setValueAt(value, row, column): 셀 값을 바꿉니다.'],
    },
  ],
)

const javaStudy4 = createStudy(
  4, '예외·입출력과 데이터 처리', dataThumbnail,
  '예외 처리, 파일 입출력과 java.util의 문자열·컬렉션·제너릭을 묶었습니다. 데이터를 읽고 가공해 저장하는 과정에 필요한 개념과 메서드를 정리했습니다.',
  ['try·catch와 예외 전달', '바이트·문자 스트림과 인코딩', '파일 읽기·쓰기와 버퍼', '문자열·래퍼·설정 값 처리', '컬렉션·제너릭으로 데이터 관리'],
  [
    {
      title: '1. 예외 처리 · 실행 중 발생한 문제 다루기',
      paragraphs: ['예외는 실행 중 정상적인 흐름을 이어갈 수 없는 상황을 나타냅니다. Throwable 아래의 Exception과 Error를 나누고, IOException 같은 checked 예외와 RuntimeException 계열의 unchecked 예외를 공부했습니다.', 'checked 예외는 처리하거나 호출부로 전달하도록 컴파일 단계에서 요구합니다. NumberFormatException, ArithmeticException과 ArrayIndexOutOfBoundsException은 실행 중 발생할 수 있는 unchecked 예외의 예입니다.'],
    },
    {
      title: '2. try·catch·finally, throw와 throws',
      paragraphs: ['try에 처리 내용을 두고 catch에서 해당 예외를 처리합니다. finally는 예외 발생 여부와 관계없이 정리 작업을 수행하는 데 사용하며, throws는 호출부로 예외 처리를 넘깁니다.', 'throw new MyException("메시지")처럼 직접 예외를 발생시키고, Exception을 상속해 필요한 예외 클래스를 정의하는 예제도 공부했습니다.'],
    },
    {
      title: '3. 바이트 스트림과 문자 스트림',
      paragraphs: ['InputStream·OutputStream은 바이트 단위로, Reader·Writer는 문자 단위로 데이터를 다룹니다. 입력을 읽는 흐름과 출력으로 쓰는 흐름을 구분해 공부했습니다.', 'InputStreamReader는 인코딩에 따라 바이트를 문자로 바꾸고, OutputStreamWriter는 문자를 바이트로 바꿉니다. UTF-8과 EUC-KR 등 인코딩 이름은 텍스트가 파일의 바이트로 표현되는 규칙입니다.'],
    },
    {
      title: '4. 파일 읽기·쓰기와 버퍼',
      paragraphs: ['FileReader·FileWriter로 문자 파일을 읽고 쓰고, BufferedReader·BufferedWriter로 버퍼를 이용하는 입출력을 공부했습니다. BufferedReader의 readLine은 한 줄씩 읽을 때 사용합니다.', 'read는 읽은 값이나 개수를 반환하고, 입력 끝에서는 -1을 반환하는 메서드가 있습니다. write로 출력하고 flush로 버퍼의 내용을 내보내며, close로 자원을 닫는 흐름을 정리했습니다.'],
      items: ['FileWriter(path, true): 파일 끝에 내용을 추가합니다.', 'PrintWriter: 문자열과 줄 단위 출력을 다룹니다.', '파일과 스트림은 사용 후 닫아 자원을 반환합니다.'],
    },
    {
      title: '5. String과 문자열 가공',
      paragraphs: ['String의 length, charAt, indexOf와 substring으로 문자열의 길이·문자·위치를 읽거나 일부 내용을 꺼냅니다. substring(start, end)는 start부터 end 직전까지의 문자열을 반환합니다.', '문자열 내용 비교에는 equals와 equalsIgnoreCase를 사용합니다. 참조형의 == 비교는 같은 객체를 가리키는지 비교하는 것이므로 문자열 내용 비교와 구분했습니다.'],
      items: ['replace: 문자나 문자열을 바꿉니다.', 'toLowerCase·toUpperCase: 영문 대소문자를 바꿉니다.', 'StringBuffer: append·insert로 가변 문자열을 구성합니다.', 'StringTokenizer: hasMoreTokens로 남은 토큰을 확인하고 nextToken으로 읽습니다.'],
    },
    {
      title: '6. 래퍼 클래스와 java.util 도구',
      paragraphs: ['기본 자료형을 객체로 다루는 Integer, Double, Boolean 등의 래퍼 클래스를 공부했습니다. 문자열을 숫자로 바꾸거나 기본형 값을 컬렉션에 저장하는 내용과 연결됩니다.', 'Date·Calendar로 날짜를 다루고, Properties로 설정 값을 묶어 getProperty로 읽는 예제를 정리했습니다. Random의 nextInt(n)은 0 이상 n 미만의 정수를 생성합니다.'],
    },
    {
      title: '7. 컬렉션 · 여러 객체를 저장하는 구조',
      paragraphs: ['List는 순서가 있고 중복을 허용하며, Set은 중복 요소를 허용하지 않습니다. Map은 키와 값으로 저장하고 같은 키를 다시 넣으면 해당 키의 값이 바뀝니다. Map의 값은 중복될 수 있습니다.', 'ArrayList·Vector, HashSet, HashMap·Hashtable의 역할과 메서드를 비교했습니다. Vector와 Hashtable은 개별 메서드의 동기화를 제공하고, ArrayList와 HashMap은 기본적으로 동기화를 제공하지 않습니다.'],
      items: ['List: add로 추가하고 get으로 인덱스의 값을 읽습니다.', 'Map: put으로 저장하고 get으로 키에 해당하는 값을 읽습니다.', 'size: 저장된 요소 수를 얻습니다.', 'Iterator와 향상된 for문: 요소를 순회합니다.'],
    },
    {
      title: '8. 제너릭 · 저장할 객체의 자료형 명시',
      paragraphs: ['Vector<String>이나 List<BoardDTO>처럼 요소 자료형을 선언하는 제너릭을 공부했습니다. 잘못된 자료형을 넣는 일을 컴파일 단계에서 찾고, 꺼낸 값을 불필요하게 캐스팅하는 작업을 줄입니다.', '컬렉션과 배열을 순회하는 for (String item : items) 형태의 향상된 for문을 함께 묶어 정리했습니다.'],
    },
  ],
)

const javaStudy5 = createStudy(
  5, '스레드와 소켓 네트워크', networkThumbnail,
  '스레드의 실행과 동기화, 네트워크 계층과 TCP·UDP, 서버·클라이언트 소켓을 묶었습니다. 여러 작업이 함께 실행되며 데이터를 주고받는 구조를 정리했습니다.',
  ['스레드로 작업 흐름 분리', '공유 데이터와 동기화', '생산자·소비자 대기와 알림', 'IP·포트와 TCP·UDP', '소켓 연결과 스트림 송수신'],
  [
    {
      title: '1. Thread · 여러 작업 흐름 구성하기',
      paragraphs: ['Thread를 상속하거나 Runnable을 구현해 실행할 작업을 정의합니다. start로 새 스레드를 시작하면 그 스레드에서 run의 작업을 수행합니다.', '스레드를 사용해 서로 다른 작업이 진행되는 예제를 공부했습니다. 실행 순서와 공유 데이터 접근을 함께 다루는 흐름으로 이어졌습니다.'],
    },
    {
      title: '2. synchronized · 공유 데이터 접근 조절',
      paragraphs: ['여러 스레드가 같은 데이터를 사용할 때 접근 구간을 조절하기 위해 synchronized를 사용합니다. 같은 객체의 모니터를 사용하는 동기화 구간은 한 번에 하나의 스레드가 실행합니다.', '생산자는 데이터를 넣고 소비자는 꺼내는 예제로, 저장 공간이 가득 찼거나 비어 있는 조건에 따라 작업을 기다리는 흐름을 공부했습니다.'],
    },
    {
      title: '3. wait·notify·notifyAll',
      paragraphs: ['wait는 현재 객체의 모니터를 놓고 기다리며, notify는 대기 중인 스레드 하나에, notifyAll은 대기 중인 모든 스레드에 알립니다. 이 메서드는 해당 객체의 모니터를 가진 상태에서 호출합니다.', '대기에서 돌아왔을 때 작업 조건을 다시 판단하도록 while로 조건을 감싸는 생산자·소비자 예제를 정리했습니다. 알림을 받았다고 즉시 실행되는 것이 아니라 모니터를 다시 획득한 뒤 진행합니다.'],
    },
    {
      title: '4. 네트워크 계층과 주소',
      paragraphs: ['네트워크는 서로 다른 장치가 정해진 규약으로 데이터를 주고받는 구조입니다. OSI 모델의 물리·데이터 링크·네트워크·전송·세션·표현·응용 계층을 나누어 역할을 공부했습니다.', 'IP 주소는 통신할 호스트를 지정하고, 포트는 그 호스트에서 사용할 통신 지점을 구분합니다. 클라이언트는 목적지 주소와 포트로 서버에 연결합니다.'],
    },
    {
      title: '5. TCP와 UDP',
      paragraphs: ['TCP는 연결을 맺고 순서 있는 바이트 스트림을 전달합니다. 서버·클라이언트 연결과 스트림 입출력을 함께 공부했습니다.', 'UDP는 데이터그램 단위로 데이터를 주고받으며 전달과 순서를 보장하지 않습니다. Java에서는 DatagramSocket과 DatagramPacket으로 송수신합니다.'],
    },
    {
      title: '6. ServerSocket과 Socket',
      paragraphs: ['서버는 ServerSocket으로 포트에서 연결을 기다리고, accept로 클라이언트 연결을 받습니다. 클라이언트는 Socket(host, port)으로 서버에 연결합니다.', '연결된 Socket에서 getInputStream과 getOutputStream으로 입력·출력 스트림을 얻어 데이터를 주고받습니다. 연결 작업과 데이터 읽기·쓰기를 분리해 정리했습니다.'],
      items: ['서버: 포트 열기 → accept로 연결 받기 → 스트림 송수신', '클라이언트: 주소·포트로 연결 → 스트림 송수신', 'getInetAddress: 연결된 상대의 주소를 얻습니다.', 'getLocalPort·getPort: 로컬 포트와 상대 포트를 읽습니다.', 'close: 연결과 자원을 닫습니다.'],
    },
    {
      title: '7. InetAddress와 DNS',
      paragraphs: ['InetAddress는 호스트 주소 정보를 다룹니다. getByName으로 호스트 이름에 해당하는 주소를 얻고, getHostAddress와 getHostName으로 주소와 이름을 읽습니다.', '여러 주소를 반환하는 getAllByName과, 주소를 찾지 못할 때 발생하는 UnknownHostException을 함께 공부했습니다.'],
    },
    {
      title: '8. 서버·클라이언트 예제의 연결',
      paragraphs: ['SimpleServer·SimpleClient와 MiddleServer·MiddleClient 자료를 소켓 연결과 입출력 예제로 묶었습니다. 서버가 연결을 받고 클라이언트가 요청하는 구조에서, 앞서 공부한 스트림과 예외 처리가 함께 사용됩니다.', '생산자·소비자 스레드와 소켓 통신은 모두 작업 사이에서 데이터를 전달하는 흐름이라는 점으로 연결해 정리했습니다.'],
    },
  ],
)

// 시리즈 카드는 최근 회차부터 표시하고, 각 글 안에서는 기초부터 순서대로 설명합니다.
export const javaStudies = [javaStudy5, javaStudy4, javaStudy3, javaStudy2, javaStudy1]
