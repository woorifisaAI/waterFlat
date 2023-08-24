import { Button, Form, Grid, Header, Image, Message, Segment, Progress, Input, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SlideBanner from './pages/SlideBanner';
import Marketing from './pages/marketing'; // 수정: 파일 이름과 컴포넌트 이름을 일치시킴
import BoardView from './pages/BoardView';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Update from './pages/Update';
import Topic from './pages/Topic';
import BoardWrite from './pages/BoardWrite';
import BoardUpdate from './pages/BoardUpdate';
import BoardReply from './pages/BoardReply';



export default class MenuExampleMenus extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <BrowserRouter>
        <Menu>
          <Menu.Item>
            <img alt="logo" src='img/woori.png' style={{ width: '90px', height: 'auto' }} />
          </Menu.Item>

          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            <p className="a">Home</p>
          </Menu.Item>

          <Menu.Item
            name='WON콕'
            active={activeItem === 'WON콕'}
            onClick={this.handleItemClick}
          >
            <p className="a">WON콕</p>
          </Menu.Item>

          <Menu.Item
            name='WON하는 Topic'
            active={activeItem === 'WON하는 Topic'}
            onClick={this.handleItemClick}
            
          >
            <p className="a">WON하는 Topic</p>
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              name='Q&A'
              active={activeItem === 'Q&A'}
              onClick={this.handleItemClick}
            >
              <p className="a">Q&A</p>
            </Menu.Item>

            <Menu.Item>
              <Button primary>Mypage</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className="App">
          <main>
            
            <Routes>
              <Route path="/" element={<SlideBanner />} /> {/* 수정: 기본 경로 */}
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/board" element={<BoardView />} />
              <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update" element={<Update/>} />
          <Route path="/topic" element={<Topic/>} />
          <Route path="/boardwrite" element={<BoardWrite/>} />
          <Route path="/boardupdate" element={<BoardUpdate/>} />
          <Route path="/boardreply" element={<BoardReply/>} />


              

               {/* 수정: 경로와 컴포넌트 */}
              {/* 다른 라우트 설정도 추가할 수 있습니다. */}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
