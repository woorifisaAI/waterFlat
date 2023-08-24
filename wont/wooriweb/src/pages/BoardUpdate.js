import React from 'react';
import { Form, TextArea, Button, Container, Header } from 'semantic-ui-react';

function BoardUpdate() {
  return (
    <Container style={{ marginTop: '30px' }}>
      <Header as='h2' icon textAlign='center'>
        글수정
      </Header>
      <Form>
        <div style={{ display: 'flex', marginBottom: '20px', fontSize: "20px"}}>
          <label style={{ width: '80px' }}>제목:</label>
          <input placeholder='제목을 입력하세요' style={{ flex: 5 }} />
        </div>
        
        <div style={{ display: 'flex', marginBottom: '20px', fontSize: "20px"}}>
          <label style={{ width: '80px' }}>내용:</label>
          <TextArea placeholder='내용을 입력하세요' rows='10' />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <Button basic color='blue' type='submit' style={{ marginRight: '10px' }}>
            수정
          </Button>
          <Button basic color='blue' type='cancel'>
            취소
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default BoardUpdate;