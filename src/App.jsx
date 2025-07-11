import { Layout, Button, theme, Breadcrumb } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Logo from './components/Logo'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import MenuList from './components/MenuList'
import ToggleThemeButton from './components/ToggleThemeButton'
import { Content, Header } from 'antd/es/layout/layout'
import { routes } from './routes'

const AppContent = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {token: {colorBgContainer}} = theme.useToken();

  // Get current page name from location
  const getCurrentPageName = () => {
    const currentRoute = routes.find(route => route.path === location.pathname);
    return currentRoute ? currentRoute.key : 'Dashboard';
  };

  return (
    <Layout >
       <Sider  collapsed={collapsed} collapsible trigger={null} theme={darkTheme ? 'dark' : 'light'} className='text-white bg-gray-100'>
          <Logo/>
          <MenuList darkTheme={darkTheme}/>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
       </Sider>
       <Layout>
          <Header onClick={() => setCollapsed(!collapsed)}
          className='ml-1' style={{padding: 0, background: colorBgContainer}}>
            <Button type='text' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> } />
          </Header>
          <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>{getCurrentPageName()}</Breadcrumb.Item>
            </Breadcrumb>
            <div className='site-layout-content' style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
              <Routes>
                {routes.map((route) => (
                  <Route key={route.key} path={route.path} element={route.element} />
                ))}
              </Routes>
            </div>
          </Content>
       </Layout>
    </Layout>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App