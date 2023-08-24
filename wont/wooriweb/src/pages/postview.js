import React from 'react';
import PostList from './PostList'; // PostList 컴포넌트 임포트

function postview() {
  return (
    <div>
      <h1>리액트 게시판 앱</h1>
        <main><PostList /> {/* PostList 컴포넌트 렌더링 */}
        </main>
      
    </div>
  );
}

export default postview;
