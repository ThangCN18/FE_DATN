

import React, { useEffect, useState } from "react";
import { Avatar, Badge, Breadcrumb, Button, Card, Col, Divider, Empty, Layout, Menu, Rate, Row, Skeleton, Space, Tabs, theme } from 'antd';
import HeaderComponent from "../components/HeaderComponent";
import SlideBanner from "../components/SlideBanner";
import SliderRoadmap from "../components/SliderRoadmap";
import TabsCoursesComponent from "../components/TabsCoursesComponent";
import LoadingComponent from "../components/LoadingComponent";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../store/types";
import AboutUsHomeComponent from "../components/AboutUsHomeComponent";
import FooterComponent from "../components/FooterComponent";
import { Link, useNavigate } from "react-router-dom";
import { setLoading, unsetLoading } from "../store/loadSlice";
import api from "../configs/axiosConfig";
import { logout } from "../store/authSlice";
import Meta from "antd/es/card/Meta";
import { RiVipCrownFill } from "react-icons/ri";
import CardCourseItemComponent from "../components/CardCourseItemComponent";
const { Header, Content, Footer } = Layout;
import type { TabsProps } from 'antd';
import SkeletonImage from "antd/es/skeleton/Image";
import SkeletonInput from "antd/es/skeleton/Input";
import SkeletonButton from "antd/es/skeleton/Button";


function MyCoursePage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const loading = useSelector((state: RootState) => state.root.load)
    const [loaddingas, setloaddingas] = useState(false)
    const [datacourses, setdatacourses] = useState<any[]>([])
    const auth = useSelector((state: RootState) => state.root.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [datasub, setdatasub] = useState([])
    const [dataadacss, setdataadacss] = useState([])



    


    



    const headers = {
        Accept: '*/*',
        Authorization: 'Bearer ' + auth.user?.accessToken,
      };
    
const getCourseSubscribe = async () =>{

    await api.get('/users/my-courses/',
        {
            headers
          },
    
    ).then(async (response:any)=>{
        if (response.status === 200){
            setdatacourses(response.data)
            console.log(response.data)
        }
       
    }).catch((error: any)=>{
        console.log(error)
        

    })
    
    }


    useEffect(() => {
        getCourseSubscribe()
        
    }, [auth.isAuthenticated])

    return (
        <Layout className="layout bg-white">
            <HeaderComponent item="courses" />
            <Content className="pt-[70px]">
                <div className="site-layout-content w-[100%] pb-10 max-w-[1400px] mx-auto" style={{ background: colorBgContainer }}>
                <div className="max-w-[1400px] max-md:w-[90%] mx-auto text-center rounded-3xl px-[5%] py-[2%] bg-[rgba(71,213,226,0)] tapscoursescomponemt">
                    {
                        datacourses.length == 0 ?<>
                        <div className="w-[100%] text-left">

                        <SkeletonButton active className="my-4 !w-[40%]" /> 

                        </div>
                        

                        

                        <Row gutter={[24,24]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} >    
                            <div className="border-collapse border-[1px] rounded-md shadow-md">
                            <SkeletonButton active className="!w-[100%] !h-[175px]" /> 
                            <div className="px-3">
                            <Skeleton active className="my-5" /> 
                            <SkeletonButton active className="!w-[100%] mb-3" /> 
                            </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} >    
                            <div className="border-collapse border-[1px] rounded-md shadow-md">
                            <SkeletonButton active className="!w-[100%] !h-[175px]" /> 
                            <div className="px-3">
                            <Skeleton active className="my-5" /> 
                            <SkeletonButton active className="!w-[100%] mb-3" /> 
                            </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} >    
                            <div className="border-collapse border-[1px] rounded-md shadow-md">
                            <SkeletonButton active className="!w-[100%] !h-[175px]" /> 
                            <div className="px-3">
                            <Skeleton active className="my-5" /> 
                            <SkeletonButton active className="!w-[100%] mb-3" /> 
                            </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={6} >    
                            <div className="border-collapse border-[1px] rounded-md shadow-md">
                            <SkeletonButton active className="!w-[100%] !h-[175px]" /> 
                            <div className="px-3">
                            <Skeleton active className="my-5" /> 
                            <SkeletonButton active className="!w-[100%] mb-3" /> 
                            </div>
                            </div>
                        </Col>
                        </Row>
                        
                        </>:
                        <>
                        
                        <Divider orientation="left" className="!text-gray-800 max-md:!text-xl !text-3xl !font-bold !mt-6 !mb-7 !text-left">List my course:</Divider>
                        <Row gutter={[24,24]}>

                        {datacourses.map(course =>{
                            return <CardCourseItemComponent course={course.course} key={course.id} issub={true}/>
                        })}

                        </Row>
                        </>
                    }
                
                    </div>
                </div>
            </Content>
            <FooterComponent />
            <Footer style={{ textAlign: 'center' }}>Copyright ©2023 Wizcove IT</Footer>
            {
                loading.isLoading ?
                    <LoadingComponent /> : null
            }


        </Layout>

    );
}

export default MyCoursePage;