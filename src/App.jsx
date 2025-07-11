import { Layout, Button, theme, Breadcrumb } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import Logo from './components/Logo'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import MenuList from './components/MenuList'
import ToggleThemeButton from './components/ToggleThemeButton'
import { Content, Header } from 'antd/es/layout/layout'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {token: {colorBgContainer}} = theme.useToken();

  return (
    <Layout>
       <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className='sidebar'>
          <Logo/>
          <MenuList darkTheme={darkTheme}/>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
       </Sider>
       <Layout>
          <Header onClick={() => setCollapsed(!collapsed)}
          className='toggle' style={{padding: 0, background: colorBgContainer}}>
            <Button type='text' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> } />
          </Header>
          <Breadcrumb
            items={[{ title: 'Dashboard' }]}
            style={{ margin: '16px 16px 0' }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              
            }}
          >
            Content
          </Content>
       </Layout>
    </Layout>
    
  )
}

export default App