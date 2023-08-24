import React from 'react';
import './marketing.css';
import { Form, Input, Button } from 'semantic-ui-react';
import RatingExampleCustomIcon from './RatingExampleCustomIcon'; // 커스텀 별점 컴포넌트 import
import MessageExampleFloating from './MessageExampleFloating'; // floating 메시지 컴포넌트 import


function Marketing() {
  return (
    <div className="grid-container">
      <div className="left-side">
        {/* 좌측 영역 */}
        <h1>마케팅 광고문구 생성</h1>
        <p>소비자가 열광할 광고의 내용을 생성해보세요.</p>
        <Form>
          <Form.Field>
            <label>대상</label>
            <Input fluid placeholder='대상' />
          </Form.Field>
          <Form.Field>
            <label>상품</label>
            <Input fluid placeholder='상품' />
          </Form.Field>
          <Form.Field>
            <label>리워드</label>
            <Input fluid placeholder='리워드' />
          </Form.Field>
          <Form.Field>
            <label>기간</label>
            <Input fluid placeholder='기간' />
          </Form.Field>
          <Form.Field>
            <label>조건</label>
            <Input fluid placeholder='조건' />
          </Form.Field>
          <Button type='submit'>자동 생성 </Button>
        </Form>
      </div>
      <div className="right-side">
        {/* 우측 영역 */}
        <h1>마케팅 광고문구 생성 결과</h1>
        <p>AI로 만들어진 광고문구를 지금 바로 확인해보세요!</p>
        <main>
            <MessageExampleFloating /> {/* floating 메시지 컴포넌트를 렌더링 */}
            <RatingExampleCustomIcon /> {/* 커스텀 별점 컴포넌트를 렌더링 */}
        </main>
      </div>
    </div>
  );
}

export default Marketing;
