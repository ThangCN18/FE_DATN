import React, { useEffect, useState } from "react";
import { Avatar, Badge, Breadcrumb, Button, Card, Col, Empty, Layout, Menu, Rate, Row, Skeleton, Space, Tabs, theme } from 'antd';
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


function CoursesPage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const loading = useSelector((state: RootState) => state.root.load)
    const [loaddingas, setloaddingas] = useState(false)
    const [datacourses, setdatacourses] = useState<any[]>([])
    const [dataroadmap, setdataroadmap] = useState([])
    const auth = useSelector((state: RootState) => state.root.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [datasub, setdatasub] = useState([])
    const [dataadacss, setdataadacss] = useState([])



    const onChange = (key: string) => {
        console.log(key);
      };

      
    var items: TabsProps['items'] = dataadacss

    var aaaa =[]


    const hangdlegetdatacourses = async () => {


        setloaddingas(true)
        if(auth.isAuthenticated){
            await getCourseSubscribe()
        }
        await hangdlegetdataroadmap()
        
        await api.get('/courses/?page=1',

        ).then((response: any) => {
            setdatacourses(response.data.items)

            const caca = [{
                key: 1,
                label: <p>All</p>,
                children: <Row gutter={[24, 24]} className="max-sm:px-6 mt-5">
                {!response.data.items? null : <>
                    {response.data.items.map(course => {
                        console.log(aaaa)
                        if(aaaa.includes(course.id)){
                            
                            return  <CardCourseItemComponent course={course} key={course.id} issub={true}/>
                        }
                        return <CardCourseItemComponent course={course} key={course.id} issub={false}/>
                        
                    })}
                </>}
            </Row>
              }]

            setdataadacss([ ...caca, ...ccccaa])
            setloaddingas(false)
        }).catch((error: any) => {
            console.log(error)
            setloaddingas(false)
        })

    }
    

    var ccccaa = []


    const hangdlegetdataroadmap = async () => {

        setloaddingas(true)

        await api.get('/roadmaps',

        ).then(async(response: any) => {
            const adshba = response.data
            console.log(adshba)
            for(const index in adshba){
                const caca = {
                    key: index+1,
                    label: <p>{adshba[index].name}</p>,
                    children: <Row gutter={[24, 24]} className="max-sm:px-6 mt-5">
                    {adshba[index].courseRoadmaps.length == 0? <Empty className="mx-auto" image={Empty.PRESENTED_IMAGE_SIMPLE} />: <>
                        {adshba[index].courseRoadmaps.map(course => {
          
                            if(aaaa.includes(course.id)){
                                return  <CardCourseItemComponent course={course.course} key={course.id} issub={true}/>
                            }
                            return <CardCourseItemComponent course={course.course} key={course.id} issub={false}/>
                            
                        })}
                    </>}
                </Row>
                  }
                  ccccaa.push(caca)
                  
            }
                        
        }).catch((error: any) => {
            console.log(error)
            
        })

    }


    



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
            console.log(response)
            for(var addf in response.data){
                aaaa.push(response.data[addf].courseId)
            }
        }
       
    }).catch((error: any)=>{
        console.log(error)
        

    })
    
    }


    useEffect(() => {
        hangdlegetdatacourses()
        
    }, [auth.isAuthenticated])

    return (
        <Layout className="layout bg-white">
            <HeaderComponent item="courses" />
            <Content className="pt-[70px]">
                <div className="site-layout-content w-[100%] pb-10 max-w-[1400px] mx-auto" style={{ background: colorBgContainer }}>
                <div className="max-w-[1400px] max-md:w-[90%] mx-auto text-center rounded-3xl px-[5%] py-[2%] bg-[rgba(71,213,226,0)] tapscoursescomponemt">
                    {
                        loaddingas?<>
                        <div className="flex justify-center space-x-2 ">
                        <SkeletonButton active className="my-4" /> 
                        <SkeletonButton active  className="my-4" /> 
                        <SkeletonButton active className="my-4" /> 
                        <SkeletonButton active className="my-4" /> 

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
                        <Tabs  defaultActiveKey="1" animated className="min-h-[475px]"  items={items} onChange={onChange} />
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

export default CoursesPage;