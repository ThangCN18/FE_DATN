import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom'
import { Layout, Menu, theme, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/types';
import AdminUserComponent from '../components/adminComponent/AdminUserComponent';
import { FaRoute } from 'react-icons/fa';
import AdminRoadmapComponent from '../components/adminComponent/AdminRoadmapComponent';
import { RiDashboardLine } from 'react-icons/ri';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { setLoading, unsetLoading } from '../store/loadSlice';
import api from '../configs/axiosConfig';
import { logout } from '../store/authSlice';
import UserDropdown from '../components/UserDropdown';

const { Header, Sider, Content } = Layout;


function AdminUserPage() {

  const [selectedMenu, setSelectedMenu] = useState('2');
  const auth = useSelector((state: RootState) => state.root.auth)
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoadding] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handelLogout = async () =>{
    dispatch(setLoading({}))
    await api.delete('/auth/logout',
    {
      headers: {
        accept: '*/*',
        Authorization: 'Bearer ' + auth.user.refreshToken,

      },
    }
    ).then((response:any)=>{

      dispatch(unsetLoading({}))        
            dispatch(logout())
            navigate("/")
    }).catch((error: any)=>{
        console.log(error)
        dispatch(unsetLoading({}))
        dispatch(logout())
    })
    
}

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
      setLoadding(false)
  },[])

  return (
    loading ? <div className="w-[100vw] flex justify-center items-center h-[100vh]"><Spin size="large" /></div> :
      <Layout className='h-[100vh]' >
        <Sider trigger={null} collapsible collapsed={collapsed} className="!bg-gray-100">
          {
            !collapsed ?
              <div className="logo flex pt-4 mb-8 justify-center items-center" >
                <img className="h-[35px] mr-2" src='/src/assets/images/logo-learning.png' />
                <h4 className='text-black text-lg font-bold'>Wizcove IT</h4>
              </div> :
              <div className="logo flex pt-4 mb-8 justify-center items-center" >
                <img className="h-[35px]" src='/src/assets/images/logo-learning.png' />

              </div>
          }
          <Menu
            theme='light'
            mode="inline"
            selectedKeys={[selectedMenu]}
            items = {auth.user.role === "admin"? [
                {
                    key: '1',
                    icon: <RiDashboardLine />,
                    label: 'Dashboard',
                    onClick: ()=>{
                      navigate('/admin')
                    }
                  },
                  {
                    key: '2',
                    icon: <UserOutlined />,
                    label: 'Users',
                    onClick: ()=>{
                      navigate('/admin/user')
                    }
                  },
                  {
                    key: '3',
                    icon: <FaRoute />,
                    label: 'Roadmaps',
                    onClick: ()=>{
                      navigate('/admin/roadmap')
                    }
                  },
                  {
                    key: '4',
                    icon: <HiOutlineBookOpen />,
                    label: 'Courses',
                    onClick: ()=>{
                      navigate('/admin/course')
                    }
                  },
                ]:
                [
                  
                  {
                    key: '1',
                    icon: <RiDashboardLine />,
                    label: 'Dashboard',
                  },
                  {
                    key: '3',
                    icon: <FaRoute />,
                    label: 'Roadmaps',
                  },
                  {
                    key: '4',
                    icon: <HiOutlineBookOpen />,
                    label: 'Courses',
                    onClick: ()=>{
                      navigate('/admin/course')
                    }
                  },
                ]
          
          }
          />
        </Sider>
        <Layout className="site-layout min-w-[1000px] h-[100vh]">
        <Header className="!bg-white !px-5 flex justify-between items-center" >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <UserDropdown handelLogout={handelLogout}/>

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
             
              <AdminUserComponent  />
           

            }
            
          </Content>
        </Layout>
      </Layout>
  );
}

export default AdminUserPage;