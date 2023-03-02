import React from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderComponent from "../components/HeaderComponent";

const { Header, Content, Footer } = Layout;

function HomePage() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
      return (
        <Layout className="layout bg-white">
            <HeaderComponent/>

         
          <Content className="pt-[70px]">
            
            <div className="site-layout-content max-w-[1400px] h-[2000px] mx-auto px-4 max-sm:px-1 " style={{ background: colorBgContainer }}>
              Content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      );
}

export default HomePage;