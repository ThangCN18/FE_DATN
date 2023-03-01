import React, { useState, useEffect} from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Spin } from 'antd';

const { Header, Sider, Content } = Layout;

function Admin() {

    const [collapsed, setCollapsed] = useState(false);
    const [loading, setLoadding] = useState(true);
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    useEffect(()=>{
        setTimeout(()=>{
            setLoadding(false)

        }, 1000)
    },[]
    )
  
    return (
        loading? <div className="w-[100vw] flex justify-center items-center h-[100vh]"><Spin size="large" /></div>:
        <Layout className='h-[100vh]' >
        <Sider trigger={null} collapsible collapsed={collapsed} className="!bg-gray-100">
        {
                !collapsed?
          <div className="logo flex py-2 mb-6 justify-center items-center" >    
            <img className="h-[50px]" src='./src/assets/images/logoRTH.png'/>
            <h4 className='text-black text-lg font-semibold'>Good Dev</h4>
          </div>:
          <div className="logo flex py-2 mb-6 justify-center items-center" >    
          <img className="h-[50px]" src='./src/assets/images/logoRTH.png'/>
        
        </div> 
         }
          <Menu
            theme='light'
            mode="inline"
            defaultSelectedKeys={['1']}
            
            items={[
                
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="!bg-white !px-5" >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
}

export default Admin;