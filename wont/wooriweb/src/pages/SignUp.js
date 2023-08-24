import React from 'react';
import { Button, Input } from 'semantic-ui-react';

function Signup() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px"}}>
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>회원가입</h2>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <span style={{ width: "100px", marginRight: "10px", fontWeight: "bold" }}>사번:</span>
        <Input placeholder="사번을 입력해주세요" style={{ width: "300px" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <span style={{ width: "100px", marginRight: "10px", fontWeight: "bold" }}>이름:</span>
        <Input placeholder="이름을 입력해주세요" style={{ width: "300px" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <span style={{ width: "100px", marginRight: "10px", fontWeight: "bold" }}>부서명:</span>
        <Input placeholder="부서명을 입력해주세요" style={{ width: "300px" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <span style={{ width: "100px", marginRight: "10px", fontWeight: "bold" }}>비밀번호:</span>
        <Input placeholder="비밀번호를 입력해주세요" type="password" style={{ width: "300px" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <span style={{ width: "100px", marginRight: "10px", fontWeight: "bold" }}>비밀번호 확인:</span>
        <Input placeholder="비밀번호를 확인해주세요" type="password" style={{ width: "300px" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button onClick={() => alert("회원가입 버튼이 눌림")} secondary size="mini" style={{ width: "120px", marginRight: "10px" }}>
          회원가입
        </Button>
        <Button onClick={() => alert("취소 버튼이 눌림")} primary size="mini" style={{ width: "120px" }}>
          취소 
        </Button>
      </div>
    </div>
  );
}

export default Signup;