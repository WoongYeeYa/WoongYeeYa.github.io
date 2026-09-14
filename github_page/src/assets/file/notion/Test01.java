package dao;

public class Test01 {
	public static void main(String[] args) {
		BoardDAO dao = new BoardDAOImpl(); //°´Ã¼ »ý¼º
		
		dao.boardWrite();
		dao.boardList();
		dao.boardEdit();
		dao.boardContent();
		dao.boardDelete();
		}//main end
}//class end
