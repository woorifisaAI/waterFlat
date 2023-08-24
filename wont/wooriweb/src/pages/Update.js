import React from 'react';
import { Button, Input, Card, Icon, Image } from 'semantic-ui-react';

function Update() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px'}}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {/* Card */}
        <div style={{ flex: 1, marginRight: '20px' }}>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>홍길동</Card.Header>
              <Card.Meta>
                <span className='date'>사번:20230822</span>
              </Card.Meta>
              <Card.Description>
                마케팅부서 - AI엔지니어링팀
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                User
              </a>
            </Card.Content>
          </Card>
        </div>

        {/* 회원정보 수정 */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '20px' }}>회원정보 수정</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ width: '100px', marginRight: '10px', fontWeight: 'bold' }}>사번:</span>
              <Input placeholder="사번을 입력해주세요" style={{ width: '300px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ width: '100px', marginRight: '10px', fontWeight: 'bold' }}>이름:</span>
              <Input placeholder="이름을 입력해주세요" style={{ width: '300px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ width: '100px', marginRight: '10px', fontWeight: 'bold' }}>부서:</span>
              <Input placeholder="부서명을 입력해주세요" style={{ width: '300px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ width: '100px', marginRight: '10px', fontWeight: 'bold' }}>비밀번호:</span>
              <Input placeholder="비밀번호를 입력해주세요" type="password" style={{ width: '300px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button onClick={() => alert('수정 버튼이 눌림')} secondary size="mini" style={{ width: '120px', marginRight: '10px' }}>
                수정
              </Button>
              <Button onClick={() => alert('취소 버튼이 눌림')} primary size="mini" style={{ width: '120px' }}>
                취소 
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;