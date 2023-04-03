import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';
import AdminUserComponent from '../components/adminComponent/AdminUserComponent';

const { Header, Sider, Content } = Layout;


function AdminHomePage() {

  const [selectedMenu, setSelectedMenu] = useState('1');
  const auth = useSelector((state: RootState) => state.root.auth)
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoadding] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    setTimeout(() => {
      setLoadding(false)

    }, 100)
  }, []
  )

  return (
    loading ? <div className="w-[100vw] flex justify-center items-center h-[100vh]"><Spin size="large" /></div> :
      <Layout className='h-[100vh]' >
        <Sider trigger={null} collapsible collapsed={collapsed} className="!bg-gray-100">
          {
            !collapsed ?
              <div className="logo flex pt-4 mb-8 justify-center items-center" >
                <img className="h-[35px] mr-2" src='./src/assets/images/logo-learning.png' />
                <h4 className='text-black text-lg font-bold'>Wizcove IT</h4>
              </div> :
              <div className="logo flex pt-4 mb-8 justify-center items-center" >
                <img className="h-[35px]" src='./src/assets/images/logo-learning.png' />

              </div>
          }
          <Menu
            theme='light'
            mode="inline"
            selectedKeys={[selectedMenu]}
            onClick={(e)=>setSelectedMenu(e.key)}
            items = {auth.user.role === "admin"? [
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Users',
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
            ]:
            [
              
              {
                key: '1',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '1',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]
          
          }
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
            {
              selectedMenu == "1"?<>
              <AdminUserComponent/>
              </>:
              selectedMenu == "2"?<>
              2
              </>:
              selectedMenu == "3"?<>
              3
              </>:null

            }
            
          </Content>
        </Layout>
      </Layout>
  );
}

export default AdminHomePage;