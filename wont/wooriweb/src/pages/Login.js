import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

function Login() {
  const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='blue' textAlign='center'>
         <Image src='img/woori2.png' style={{ width: '100px', height: 'auto' }} /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='사번' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='비밀번호'
              type='password'
            />

            <Button color='blue' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='SignUp'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );

  return <LoginForm />;
}

export default Login;