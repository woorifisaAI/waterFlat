import React from 'react';
import { Button } from 'semantic-ui-react';
import BoardList from './BoardList'; // 게시판 목록 컴포넌트 임포트
import InputExampleInput from './InputExampleInput';
import PaginationExamplePagination from './PaginationExamplePagination';

const BoardView = () => (
  <div>
    <header>
    <h1>게시판</h1>
    <InputExampleInput />
    </header>

    <contents>
    <BoardList /> {/* 게시판 목록 컴포넌트 렌더링 */}
    {/* <Button primary>글쓰기</Button> */}
    <Button content='글쓰기' primary floated='right' />
    </contents>

    <footer>
    <PaginationExamplePagination />
    </footer>
  </div>
);

export default BoardView;
