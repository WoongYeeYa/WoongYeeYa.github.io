package ch09_interface;

//인터페이스 실습
interface AA{
	int MAX=100; //static final int MAX=100; <<이랑 같음. 값변경 못함
	public void aa();
	public void bb();
}

//class AAA는 반드시 오버라이딩을 해야한다. 안하면 AAA에서 오류발생
class AAA implements AA{
	public void aa(){
		System.out.println("MAX : "+MAX);
		System.out.println("aa() called...");
	}//aa() end

	public void bb(){
		System.out.println("bb() called...");
	}//bb() end
}//class end
public class Test01_interface {
	public static void main(String[] args) {
		AA test=new AAA();
		test.aa();
		test.bb();
	}
}
