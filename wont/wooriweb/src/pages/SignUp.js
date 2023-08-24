import React from 'react';
import { Button, Input } from 'semantic-ui-react';


function SignUp() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", border: "1px solid #ccc" }}>
      <Input placeholder="사번" style={{ width: "300px", marginBottom: "10px" }} />
      <Input placeholder="이름" style={{ width: "300px", marginBottom: "10px" }} />
      <Input placeholder="부서명" style={{ width: "300px", marginBottom: "10px" }} />
      <Input placeholder="비밀번호" type="password" style={{ width: "300px", marginBottom: "10px" }} />
      <Button onClick={() => alert("취소 버튼이 눌림")} primary size="mini" style={{ width: "100px" }}>
        취소
      </Button>
      <Button onClick={() => alert("회원가입 버튼이 눌림")} primary size="mini" style={{ width: "100px" }}>
        회원가입
      </Button>
    </div>
  );
}
export default SignUp;