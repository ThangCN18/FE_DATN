import React, {useState} from "react";
import { Breadcrumb, Layout, Menu, theme, Input} from 'antd';
import { Link } from "react-router-dom";
import {RiSearchLine} from "react-icons/ri"
import type { MenuProps } from 'antd';
import { Button, Dropdown, Tooltip } from 'antd';
import { Avatar, Card, Skeleton} from 'antd';
import CartDropdown from "./CartDropdown";
import NotifyDropdown from "./NotifyDropdown";
import UserDropdown from "./UserDropdown";
import {GiHamburgerMenu} from "react-icons/gi"
import { IoHome } from 'react-icons/io5';
import {HiOutlineNewspaper, HiOutlineBookOpen} from "react-icons/hi"
import {FaRoute, FaRegUser} from "react-icons/fa"
import {MdOutlineShoppingCart} from "react-icons/md"
import {BsBell} from "react-icons/bs"
import {TbLogout, TbLogin} from "react-icons/tb"




const { Meta } = Card;

const { Header, Content, Footer} = Layout;
const {Search} = Input;




function HeaderComponent() {
  const [loading, setLoading] = useState(false);
  const [showMenuSM, setShowMenuSM] = useState(false);
  const [hasuser, sethasuser] = useState(false);


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
      <Header className="w-[100%]  !bg-[#ffffffda] shadow-md !px-0 !py-0 fixed top-0 left-0 right-0">
      <div className="max-w-[1400px] md:!w-[100%] h-[100%] flex justify-between items-center mx-auto px-4 max-sm:px-1 space-x-2">
        <Link to="/">
        <div className="logo flex justify-start items-center">
          <img className="w-[80px] max-sm:w-[70px]" src="./src/assets/images/logoRTH.png" alt="logo" />
          <h4 className="text-black text-lg !leading-4 font-bold !py-0 max-lg:hidden ">Good <span className="text-blue-700">dev</span></h4>
        </div>
        </Link>
        <div className="flex justify-between items-center w-auto space-x-5 max-lg:space-x-2  max-sm:space-x-1">
        <Input placeholder="Search Courses" className="text-base max-sm:text-xs" size="large"
        prefix={<div><RiSearchLine className="text-base text-gray-400 "/></div>}
       />
        <Link to="/" className="block text-sm font-medium  flex justify-start items-center !space-x-1 active-menu max-sm:hidden"><IoHome/><p>Home</p></Link>
              <Link to="/courses" className="block text-sm font-medium  flex justify-start items-center !space-x-1 max-sm:hidden"><HiOutlineBookOpen/><p>Courses</p></Link>
              <Link to="/route" className="block text-sm font-medium  flex justify-start items-center !space-x-1 max-sm:hidden"><FaRoute/><p>Route</p></Link>
              <Link to="/block" className="block text-sm font-medium  flex justify-start items-center !space-x-1 max-sm:hidden"><HiOutlineNewspaper/><p>Block</p></Link>       
              {
                hasuser? <>
                <CartDropdown/>
                <NotifyDropdown/>
                <UserDropdown/>
                </>:
                <Button type="primary" className="block text-sm font-medium  flex justify-start items-center !space-x-1 max-sm:hidden !bg-blue-600"><TbLogin/><p>Sign In</p></Button>
              }
        
        </div>
        <div className="max-sm:block hidden relative">
          <GiHamburgerMenu className="text-2xl cursor-pointer" onClick={()=> setShowMenuSM(!showMenuSM)}/>
          <div  onClick={(e)=> {setShowMenuSM(false); e.stopPropagation()}} className={showMenuSM ? "duration-500 absolute top-[44px] right-[-4px] !h-[100vh] !w-[100vw] flex justify-end": "duration-500 absolute top-[44px] right-[-104vw] !h-[100vh] !w-[100vw] bg-[#353d4209] flex justify-end"}>
            <div onClick={(e)=> {setShowMenuSM(true); e.stopPropagation()}} className="h-[100%] w-[40%] shadow-2xl bg-white">
           {
            hasuser?<>
            <Link to="/" className="block w-[100%] pl-5 text-sm font-medium !pt-8 flex justify-start items-center !space-x-2 active-menu"><IoHome/><p>Home</p></Link>
              <Link to="/courses" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><HiOutlineBookOpen/><p>Courses</p></Link>
              <Link to="/my-courses" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><HiOutlineBookOpen/><p>My Courses</p></Link>
              <Link to="/route" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><FaRoute/><p>Route</p></Link>
              <Link to="/block" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><HiOutlineNewspaper/><p>Block</p></Link>
              <Link to="/my-block" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><HiOutlineNewspaper/><p>My Block</p></Link>
              <Link to="/cart" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><MdOutlineShoppingCart/><p>Cart</p></Link>
              <Link to="/notification" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><BsBell/><p>Notification</p></Link>
              <Link to="/profile" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><FaRegUser/><p>View Profile</p></Link>
              <Link to="/" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center text-red-500 hover:!text-red-500 !space-x-2"><TbLogout/><p>Sign Out</p></Link>
            </>:
            <>
            <Link to="/" className="block w-[100%] pl-5 text-sm font-medium !pt-8 flex justify-start items-center !space-x-2 active-menu"><IoHome/><p>Home</p></Link>
              <Link to="/courses" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><HiOutlineBookOpen/><p>Courses</p></Link>
              <Link to="/route" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><FaRoute/><p>Route</p></Link>
              <Link to="/block" className="block w-[100%] pl-5 text-sm font-medium !pt-3 flex justify-start items-center !space-x-2"><HiOutlineNewspaper/><p>Block</p></Link>
              <Button type="primary" className="block text-sm mx-auto mt-6 font-medium  flex justify-start items-center !space-x-1 !bg-blue-600"><TbLogin/><p>Sign In</p></Button>
            </>
           }
              

            </div>

          </div>
        </div>
        
      </div>
      
    </Header>
     );
}

export default HeaderComponent;