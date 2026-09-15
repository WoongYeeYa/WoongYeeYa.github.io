export const javaExamples = {
  1: [
    {
      title: '프로그램 실행 · Test01.java',
      noteIndex: 0,
      description: 'main 메서드가 프로그램의 시작점이 되고 println으로 결과를 출력하는 예제입니다. 소스 작성부터 컴파일과 JVM 실행으로 이어지는 가장 기본적인 구조를 확인할 수 있습니다.',
      code: `public class Test01 {
  public static void main(String[] args) {
    System.out.println("환경 설정 확인");
    System.out.println("첫번째 실습");
  }
}`,
    },
    {
      title: '정수 자료형 범위 · Test01Long.java',
      noteIndex: 1,
      description: '래퍼 클래스의 상수로 정수 자료형별 최댓값과 최솟값을 확인하는 예제입니다. 자료형마다 저장할 수 있는 정수의 범위가 다르다는 점을 출력 결과로 비교할 수 있습니다.',
      code: `System.out.println(Byte.MAX_VALUE);
System.out.println(Byte.MIN_VALUE);
System.out.println(Integer.MAX_VALUE);
System.out.println(Integer.MIN_VALUE);
System.out.println(Long.MAX_VALUE);
System.out.println(Long.MIN_VALUE);`,
    },
    {
      title: '조건문 · Test01If.java',
      noteIndex: 5,
      description: '명령행 인수를 정수로 바꾸고 나머지 연산으로 짝수와 홀수를 구분합니다. 조건식의 결과에 따라 if와 else 중 하나의 실행 경로가 선택됩니다.',
      code: `int su = Integer.parseInt(args[0]);

if (su % 2 == 0) {
  System.out.println(su + "는(은) 짝수");
} else {
  System.out.println(su + "는(은) 홀수");
}`,
    },
    {
      title: '배열 순회 · Test01_array.java',
      noteIndex: 6,
      description: '배열의 길이와 인덱스를 이용해 저장된 값을 차례로 출력합니다. 반복문의 변수 i가 배열의 위치로 사용되는 흐름을 보여 줍니다.',
      code: `int[] values = {40, 50, 60};

for (int i = 0; i < values.length; i++) {
  System.out.println("values[" + i + "]: " + values[i]);
}`,
    },
  ],
  2: [
    {
      title: '객체와 메서드 · Test01_method.java',
      noteIndex: 0,
      description: '클래스로 객체를 만든 뒤 인스턴스 메서드를 호출하는 예제입니다. static인 main에서 인스턴스 메서드를 사용하려면 먼저 객체가 필요하다는 점을 확인할 수 있습니다.',
      code: `public void printMessage() {
  System.out.println("method called");
}

public static void main(String[] args) {
  Test01_method example = new Test01_method();
  example.printMessage();
}`,
    },
    {
      title: '생성자 오버로딩 · Test01.java',
      noteIndex: 1,
      description: '기본 생성자와 매개변수가 있는 생성자를 각각 정의하고 호출합니다. 전달하는 인수에 따라 서로 다른 초기화 경로가 선택됩니다.',
      code: `class Demo {
  public Demo() {
    System.out.println("디폴트 생성자");
  }

  public Demo(String name) {
    System.out.println("매개변수가 있는 생성자");
  }
}`,
    },
    {
      title: '상속과 오버라이딩 · Test04_extends.java',
      noteIndex: 3,
      description: '하위 클래스가 상위 클래스의 필드를 초기화하고 메서드를 다시 구현합니다. super로 공통 값을 전달하고 하위 클래스에서 할인 계산 동작을 확장합니다.',
      code: `class PanMaeSub extends PanMae {
  private double rate;

  public PanMaeSub(String pum, int su, int dan, double rate) {
    super(pum, su, dan);
    this.rate = rate;
  }

  @Override
  public void disp() {
    System.out.println("할인금액 " + (dan * rate));
  }
}`,
    },
    {
      title: '인터페이스 구현 · Test01_interface.java',
      noteIndex: 4,
      description: '인터페이스로 역할을 선언하고 구현 클래스에서 메서드의 동작을 작성합니다. 인터페이스 자료형으로 구현 객체를 참조해 선언과 구현을 분리하는 구조입니다.',
      code: `interface AA {
  int MAX = 100;
  void aa();
  void bb();
}

class AAA implements AA {
  public void aa() { System.out.println(MAX); }
  public void bb() { System.out.println("bb() called"); }
}`,
    },
  ],
  3: [
    {
      title: 'AWT 창과 종료 이벤트 · Test01_Window.java',
      noteIndex: 0,
      description: 'Frame을 화면에 표시하고 WindowListener로 창 종료를 처리합니다. 리스너 등록, 이벤트 메서드 오버라이딩과 자원 해제의 순서를 함께 보여 줍니다.',
      code: `public Test01_Window() {
  super("창 종료");
  addWindowListener(this);
  setSize(450, 450);
  setVisible(true);
}

public void windowClosing(WindowEvent event) {
  dispose();
  System.exit(0);
}`,
    },
    {
      title: 'BorderLayout · Test02_BorderLayout.java',
      noteIndex: 1,
      description: '버튼과 텍스트 영역을 BorderLayout의 다섯 영역에 배치합니다. 같은 add 호출에서도 영역 값을 다르게 지정해 컴포넌트의 위치를 결정합니다.',
      code: `add(firstButton, BorderLayout.NORTH);
add(secondButton, BorderLayout.SOUTH);
add(thirdButton, BorderLayout.EAST);
add(fourthButton, BorderLayout.WEST);
add(textArea, BorderLayout.CENTER);`,
    },
    {
      title: '버튼 이벤트 · Test02_Button_event.java',
      noteIndex: 2,
      description: 'ActionListener에서 이벤트가 발생한 버튼을 구분해 작업을 실행합니다. getSource로 클릭된 버튼을 확인하고 파일 열기나 종료 같은 동작으로 연결합니다.',
      code: `public void actionPerformed(ActionEvent event) {
  if (event.getSource() == openButton) {
    FileDialog dialog = new FileDialog(this, "파일열기", FileDialog.LOAD);
    dialog.setVisible(true);
  } else if (event.getSource() == exitButton) {
    System.exit(0);
  }
}`,
    },
    {
      title: 'Swing JTable · Test05_JTable.java',
      noteIndex: 6,
      description: '열 이름과 행 데이터를 JTable에 넣고 스크롤 영역에 배치합니다. 표의 데이터 구조와 화면 컴포넌트를 연결하는 기본 구성을 확인할 수 있습니다.',
      code: `String[] columns = {"이름", "나이", "이메일"};
Object[][] data = {{"성춘향", "16", "sung@naver.com"}};

JTable table = new JTable(data, columns);
JScrollPane scrollPane = new JScrollPane(table);
getContentPane().add(scrollPane);`,
    },
  ],
  4: [
    {
      title: '예외 처리 · Test01_Exception.java',
      noteIndex: 0,
      description: '입력값 처리에서 발생할 수 있는 예외를 종류별 catch로 나눕니다. 어떤 예외가 발생해도 finally가 실행되는 흐름까지 함께 확인합니다.',
      code: `try {
  int number = Integer.parseInt(args[0]);
  System.out.println(number % 2 == 0 ? "짝수" : "홀수");
} catch (ArrayIndexOutOfBoundsException error) {
  System.out.println("입력값 없음");
} catch (NumberFormatException error) {
  System.out.println("숫자 형식 오류");
} finally {
  System.out.println("처리 완료");
}`,
    },
    {
      title: '버퍼를 이용한 파일 쓰기 · Test03_buff_w.java',
      noteIndex: 3,
      description: 'BufferedWriter로 문자열을 파일에 쓰고 사용한 자원을 닫습니다. 반복문으로 여러 줄을 기록하고 finally에서 스트림을 정리하는 구조입니다.',
      code: `try (BufferedWriter writer =
    new BufferedWriter(new FileWriter("a2.txt"))) {
  for (int i = 1; i <= 5; i++) {
    writer.write("줄번호:" + i);
    writer.newLine();
  }
} catch (IOException error) {
  System.out.println(error.getMessage());
}`,
    },
    {
      title: '문자열 내용 비교 · Test10_String.java',
      noteIndex: 4,
      description: '참조 비교와 equals를 이용한 문자열 내용 비교의 차이를 확인합니다. new로 만든 두 문자열은 별도 객체지만 equals로 내용이 같다는 것을 판단할 수 있습니다.',
      code: `String first = new String("hello");
String second = new String("hello");

System.out.println(first == second);      // false
System.out.println(first.equals(second)); // true`,
    },
    {
      title: 'ArrayList 순회 · Test04_List.java',
      noteIndex: 6,
      description: '문자열 목록을 만들고 향상된 for문과 get으로 요소를 읽습니다. List가 입력 순서와 중복 값을 유지하는 모습도 출력 결과에서 확인할 수 있습니다.',
      code: `List<String> departments = new ArrayList<>();
departments.add("인사과");
departments.add("총무과");
departments.add("회계");

for (String department : departments) {
  System.out.println(department);
}`,
    },
  ],
  5: [
    {
      title: 'Thread 실행 · Test02_Thread.java',
      noteIndex: 0,
      description: '두 Thread 객체에서 대문자와 소문자를 각각 출력하도록 실행합니다. start를 호출하면 각 객체의 run이 별도 작업 흐름에서 수행됩니다.',
      code: `MyThread upper = new MyThread();
YouThread lower = new YouThread();

upper.start();
lower.start();

class MyThread extends Thread {
  public void run() {
    for (char ch = 'A'; ch <= 'Z'; ch++) System.out.print(ch);
  }
}`,
    },
    {
      title: '서버 소켓 · SimpleServer.java',
      noteIndex: 5,
      description: '5555번 포트에서 연결을 기다리고 스트림으로 문자열을 주고받습니다. accept로 연결을 받은 뒤 Socket의 입력·출력 스트림을 사용하는 서버 흐름입니다.',
      code: `ServerSocket server = new ServerSocket(5555);

while (true) {
  Socket socket = server.accept();
  DataOutputStream out = new DataOutputStream(socket.getOutputStream());
  DataInputStream in = new DataInputStream(socket.getInputStream());
  out.writeUTF("서버 연결 성공");
  System.out.println(in.readUTF());
  socket.close();
}`,
    },
    {
      title: '클라이언트 소켓 · MiddleClient.java',
      noteIndex: 5,
      description: '서버 주소와 포트로 연결하고 입력·출력 스트림을 준비합니다. 입력창의 문자열을 DataOutputStream으로 서버에 전달하는 과정까지 이어집니다.',
      code: `Socket socket = new Socket(ip, port);
DataInputStream in = new DataInputStream(socket.getInputStream());
DataOutputStream out = new DataOutputStream(socket.getOutputStream());

String message = textField.getText().trim();
out.writeUTF("[" + name + "]님의 말 >> " + message);`,
    },
    {
      title: '수신 전용 스레드 · MiddleClient.java',
      noteIndex: 7,
      description: 'Runnable의 run에서 서버 메시지를 계속 읽어 대화 영역에 추가합니다. 화면 이벤트와 수신 대기를 분리해 응답을 기다리는 동안에도 인터페이스를 사용할 수 있게 합니다.',
      code: `public void run() {
  try {
    while (true) {
      String message = in.readUTF();
      textArea.append(message + "\\n");
    }
  } catch (IOException error) {
    textArea.append("서버 연결 종료");
  }
}`,
    },
  ],
}
