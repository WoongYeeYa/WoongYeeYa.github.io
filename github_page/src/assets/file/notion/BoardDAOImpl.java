package dao;

//구현클래스
public class BoardDAOImpl implements BoardDAO {
	public void boardWrite(){
		System.out.println("글 쓰기 입니다");
	}
	
	public void boardList(){
		System.out.println("글 목록 보기입니다");
	}
	
	public void boardContent(){
		System.out.println("글 내용 보기입니다");
	}
	
	public void boardEdit(){
		System.out.println("글 수정입니다");
	}
	
	public void boardDelete(){
		System.out.println("글 삭제 입니다");
	}
}
