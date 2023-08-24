// PostList.js
import React from 'react';

function PostList() {
  // 게시판 목록을 가져오는 로직을 작성하세요.
  //const boardData = [...]; // 게시판 데이터를 가져오는 코드 (API 호출 또는 하드코딩)
    const boardData = [
      { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물 내용' },
      { id: 2, title: '두 번째 게시물', content: '두 번째 게시물 내용' },
    // 추가 데이터
  ];
  
  return (
    <div>
      <h1>게시판</h1>
      <ul>
        {boardData.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
