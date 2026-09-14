package ch09_interface;
//인터페이스 실습

interface AA2{
	public int aa();
}

interface BB2{
	public char bb();
}

interface CC2{
	public String cc();
}

//클래스에서 인터페이스를 상속받아 오버라이딩 하기
class DD2 implements AA2,BB2,CC2{
	public int aa(){
		return 100;
	}
	
	public char bb(){
		return 'A';
	}
	
	public String cc(){
		return "박은빈";
	}
	
}//class
public class Test02_interface {
	public static void main(String[] args){
		DD2 test = new DD2(); //객체생성
		int a=test.aa();
		char ch=test.bb();
		String s=test.cc();
		
		System.out.println("a : "+a);
		System.out.println("ch : "+ch);
		System.out.println("s : "+s);
	}//main end
}//class end
