import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';


import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SlideBanner from './pages/SlideBanner';
import Marketing from './pages/marketing'; // 수정: 파일 이름과 컴포넌트 이름을 일치시킴
import postview from './pages/postview';

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
              <Route path="/postview" element={postview} />

               {/* 수정: 경로와 컴포넌트 */}
              {/* 다른 라우트 설정도 추가할 수 있습니다. */}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
