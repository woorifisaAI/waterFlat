import React from 'react';
import { Button, Comment, Form, Header, Container } from 'semantic-ui-react';

function BoardReply() {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Header as='h2' icon textAlign='center'>
        글상세
      </Header>

      {/* Board Reply Form */}
      <Form>
        <div style={{ display: 'flex', marginBottom: '10px', fontSize: "20px"}}>
          <label style={{ width: '80px' }}>제목:</label>
          <input placeholder='제목을 입력하세요' style={{ flex: 3 }} />
        </div>
        <div style={{ display: 'flex', marginBottom: '10px', fontSize: "20px"}}>
          <label style={{ width: '80px' }}>작성자:</label>
          <input placeholder='제목을 입력하세요' style={{ flex: 5 }} />
        </div>
        <div style={{ display: 'flex', marginBottom: '20px', fontSize: "20px"}}>
          <label style={{ width: '80px' }}>작성일:</label>
          <input placeholder='제목을 입력하세요' style={{ flex: 5 }} />
        </div>
        <div style={{ display: 'flex', marginBottom: '20px', fontSize: "20px"}}>
          <label style={{ width: '80px' }}>글내용:</label>
          <Form.TextArea placeholder='내용을 입력하세요' rows='10' style={{ width: '430%' }} />
        </div>
      </Form>

      {/* Comment Section */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', fontSize: '20px' }}>
        <Comment.Group style={{ flex: 1 }}>
          <Header as='h3' textAlign='center' dividing>
            댓글
          </Header>

          {/* Example comment */}
          <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Comment.Content>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <Comment.Author>홍길동</Comment.Author>
                  <Comment.Metadata>
                    <div>2 days ago</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    토픽 모델링 화면이 안떠요
                  </Comment.Text>
                </div>
              </div>
            </Comment.Content>
          </Comment>

          {/* Add Reply Form */}
          <Form reply>
            <Form.TextArea />
            <Button content='댓글 등록' labelPosition='left' icon='edit' primary floated='right' />
          </Form>
        </Comment.Group>
      </div>
    </Container>
  );
}

export default BoardReply;