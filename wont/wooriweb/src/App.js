import { Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SlideBanner from './pages/SlideBanner';

export default class MenuExampleMenus extends Component {
  state = {}


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <BrowserRouter>
    <Menu>
        <Menu.Item>
          <img alt="logo" src='img/woori.png' style={{ width: '90px', height: 'auto' }}/>
        </Menu.Item>

        <Menu.Item
          name='WON콕'
          active={activeItem === 'WON콕'}
          onClick={this.handleItemClick}
        >
          <p class="a">WON콕</p>
        </Menu.Item>

        <Menu.Item
          name='WON하는 Topic'
          active={activeItem === 'WON하는 Topic'}
          onClick={this.handleItemClick}
        >
        <p class="a">WON하는 Topic</p>
        </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item
            name='Q&A'
            active={activeItem === 'Q&A'}
            onClick={this.handleItemClick}
          >
           <p class="a">Q&A</p>
          </Menu.Item>

        <Menu.Item>
            <Button primary>Mypage</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <div className="App">
      <header className="App-header">
        <h1>React 슬라이드 배너</h1>
      </header>
      <main>
        <SlideBanner />
      </main>
    </div>
      <Routes>
          <Route path="/SlideBanner.js" element={<main />} />
          {/* 다른 라우트 설정도 추가할 수 있습니다. */}
      </Routes>
      
    </BrowserRouter>
  );
}
}
