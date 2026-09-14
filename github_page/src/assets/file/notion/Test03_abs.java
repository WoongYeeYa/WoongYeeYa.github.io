package dao;

abstract class Abs{
	abstract public void aa();//추상메서드
	
	public void bb()
	{
		System.out.println("추상클래스 안에 있는 일반 메서드 입니다.");
	}
}//class end

class AbsTest extends Abs{
	//오버라이딩
	public void aa(){
		System.out.println("오버라이딩된 추상메서드 입니다.");
	}
}
public class Test03_abs {
	public static void main(String[] args) {
		AbsTest test=new AbsTest();
		test.aa();
		test.bb();
		
	}//main end
}//class end
