import React, {useState} from "react";
import { Breadcrumb, Layout, Menu, theme, Input} from 'antd';
import { Link } from "react-router-dom";
import {RiSearchLine} from "react-icons/ri"
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { Avatar, Card, Skeleton} from 'antd';
import CartDropdown from "./CartDropdown";
import NotifyDropdown from "./NotifyDropdown";

const { Meta } = Card;

const { Header, Content, Footer} = Layout;
const {Search} = Input;




function HeaderComponent() {
  const [loading, setLoading] = useState(false);


  const items: MenuProps['items'] = [
    {
      key: 'card1',
      label: (
              <Card className="w-[200px] " loading={loading}>
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    }
  ];

    return ( 
      <Header className="w-[100%] !bg-white shadow-sm !px-0 !py-0">
      <div className="max-w-[1400px] h-[100%] flex justify-between items-center mx-auto px-4">
        <Link to="/">
        <div className="logo flex justify-start items-center">
          <img className="w-[80px]" src="./src/assets/images/logoRTH.png" alt="logo" />
          <h4 className="text-black text-lg !leading-4 font-bold !py-0">Good <span className="text-blue-700">dev</span></h4>
        </div>
        </Link>
        <div className="flex justify-between items-center w-auto space-x-5">
        <Input placeholder="Search Courses" className="text-base" size="large"
        prefix={<div><RiSearchLine className="text-base text-gray-400 "/></div>}
       />
       <Link to="/mycourses" className="whitespace-nowrap text-black hover:text-blue-500 text-base font-medium">My Courses</Link>
       <Link to="/Support" className="whitespace-nowrap text-black hover:text-blue-500 text-base font-medium">Support</Link>
       <CartDropdown/>
       <NotifyDropdown/>
       <NotifyDropdown/>
        </div>
        
      </div>
      
    </Header>
     );
}

export default HeaderComponent;