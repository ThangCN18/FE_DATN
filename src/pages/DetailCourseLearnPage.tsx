import React, { useEffect, useState } from "react";
import { Avatar, Badge, Breadcrumb, Button, Card, Col, Collapse, Divider, Image, Input, Layout, List, Menu, Modal, Rate, Row, Skeleton, Space, Tag, theme } from 'antd';
import HeaderComponent from "../components/HeaderComponent";
import SlideBanner from "../components/SlideBanner";
import SliderRoadmap from "../components/SliderRoadmap";
import TabsCoursesComponent from "../components/TabsCoursesComponent";
import LoadingComponent from "../components/LoadingComponent";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../store/types";
import AboutUsHomeComponent from "../components/AboutUsHomeComponent";
import FooterComponent from "../components/FooterComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLoading, unsetLoading } from "../store/loadSlice";
import api from "../configs/axiosConfig";
import { logout } from "../store/authSlice";
import Meta from "antd/es/card/Meta";
import { RiVipCrownFill } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillLike, AiOutlineCheckCircle, AiOutlineFieldTime } from "react-icons/ai";
import { BsCheck2Circle, BsSendFill } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { BiUser } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroll-component";
import { setNotify } from "../store/notifycationSlide";
const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;


function DetailCourseLearnPage() {

    const loading = useSelector((state: RootState) => state.root.load)
    const [loaddingas, setloaddingas] = useState(false)
    const [courses, setcourses] = useState<any>(null)
    const auth = useSelector((state: RootState) => state.root.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const [showmodalviewvd, setshowmodalviewvd] = useState(false)
    const [datareview, setdatareview] = useState<any>(null)
    const [rating, setrating] = useState(null)
    const [valuerating, setvaluerating] = useState(5)
    const [valuecontent, setvaluecontent] = useState("")
    const [checksub, setchecksub] = useState(false)
    const [s,sets] = useState(0)
    const [l,setl] = useState(0)







    const headers = {
        Accept: '*/*',
        Authorization: 'Bearer ' + auth.user?.accessToken,
      };

      const getCourseSubscribe = async () =>{
        await api.get('/courses/' + location.pathname.split("/")[2] + '/subscribe/',
            {
                headers
              },
        
        ).then((response:any)=>{
            if (response.status === 200){
                var adfa = 0
                for(var addf in response.data){
                    if(response.data[addf].courseId == location.pathname.split("/")[2]){
                        setchecksub(true)
                        adfa = 1
                    }
                }
                if(adfa == 0){
                    navigate("/")
                }
            }
        }).catch((error: any)=>{
            console.log(error)
        })
        
        }
    
    
    
        const hangdlegetdatacourses = async () => {        
            setloaddingas(true)
            if(auth.isAuthenticated){
                await getCourseSubscribe()
            }
            console.log(location.pathname.split("/")[2])
            await api.get('/courses/' + location.pathname.split("/")[2],
    
            ).then((response: any) => {
                setcourses(response.data)
                setloaddingas(false)
            }).catch((error: any) => {
                console.log(error)
                setloaddingas(false)
            })
    
        }
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    useEffect(() => {

        hangdlegetdatacourses()

        if(location.search){
            sets(Number(location.search.split("&")[0].split("=")[1]))
            setl(Number(location.search.split("&")[1].split("=")[1]))           
        }
       

    }, [location.search])

   

    return (
        <Layout className="layout bg-white">
            <HeaderComponent item="courses" />
            <Content className="pt-[70px]">
                <div className="site-layout-content w-[100%] pb-10 " >
                    {
                        loaddingas ? <>
                            <Row className="px-8" gutter={[24, 24]}>
                                <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                                    <Skeleton.Button active className="!w-[100px] !h-[30px] !mt-2" />
                                    <Skeleton.Image active className="!w-[100%]  !h-[450px] max-md:!h-[275px] !my-2" />
                                    <Skeleton.Button active className="!w-[80%] !h-[50px] !mt-2" />
                                    <Skeleton active paragraph={{ rows: 4 }} title={null} className="!mt-8" />

                                </Col>
                                <Col xs={24} sm={24} md={24} lg={6} xl={6}>

                                    <Skeleton.Button active className="!w-[100%] !h-[200px] !mt-7" />
                                    <Skeleton active paragraph={{ rows: 5 }} title={null} className="!mt-12" />

                                </Col>

                            </Row>

                        </> : <>
                            {
                                courses ?
                                    <>
                                        <Row className="px-8" gutter={[24, 24]}>
                                            <Col xs={24} sm={24} md={24} lg={18} xl={18} >
                                                <Link to="/courses/" className="flex justify-start items-center space-x-1 my-2 text-base font-semibold"><FiArrowLeft /><span>Back</span></Link>

                                                {courses.sections[0] ? <>
                                                    {
                                                        courses.sections[0].lectures && courses.sections[0].lectures[0] ? <>
                                                            <div className="!w-[100%] !h-[470px] max-md:!h-[275px] overflow-hidden rounded-md text-center">
                                                                <iframe width='100%' height="100%" className="mx-auto" src={"https://www.youtube.com/embed/" + courses.sections[s].lectures[l].videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                                            </div>
                                                            <h5 className="mt-5 font-bold text-2xl ">{courses.sections[s].lectures[l].name}</h5>
                                                            <p className="mt-5  text-md">{courses.sections[s].lectures[l].description}</p>

                                                        </> : <></>
                                                    }
                                                </> : <></>}
                                               
                                            </Col>
                                            
                                            <Col xs={24} sm={24} md={24} lg={6} xl={6} className="mt-10">
                                                
                                                {
                                                    courses.sections[0] ?
                                                        <Collapse defaultActiveKey={[s]} >{
                                                            courses.sections.map((section, index) => {
                                                                return <Panel className="bg-slate-50" header={
                                                                    <div className='flex justify-between items-center '>
                                                                        <h5 className='text-base font-semibold truncate w-[80%] max-md:w-[400px] max-lg:w-[300px] max-sm:w-[200px]'>{section.name}</h5>
                                                                    </div>}

                                                                    key={index}>
                                                                    {
                                                                        section.lectures[0] ?
                                                                            <>
                                                                                {
                                                                                    section.lectures.map((lecture, indexs) => {
                                                                                        return <div onClick={()=>{navigate('/learn/' + location.pathname.split("/")[2]+ "?s="+index+ "&l="+indexs)}}  className='flex justify-between items-center py-4 border-2 px-3 rounded-sm border-gray-200 cursor-pointer hover:bg-slate-200 '>
                                                                                            <div className='justify-start items-center space-x-3 flex'>
                                                                                                <SiYoutubemusic className='text-gray-600' />
                                                                                                <p  className='truncate w-[75%] max-md:w-[400px] max-lg:w-[270px] max-sm:w-[200px]'>{lecture.name}</p>
                                                                                            </div>
                                                                                            <div>
                                                                                            </div>
                                                                                        </div>
                                                                                    })
                                                                                }

                                                                            </>
                                                                            : null
                                                                    }
                                                                </Panel>
                                                            })}
                                                        </Collapse>
                                                        : null
                                                }

                                               
                                                


                                            </Col>

                                        </Row>
                                        

                                    </>

                                    : null
                            }

                        </>
                    }

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

export default DetailCourseLearnPage;