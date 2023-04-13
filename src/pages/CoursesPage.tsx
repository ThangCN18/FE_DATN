import React, { useEffect, useState } from "react";
import { Avatar, Badge, Breadcrumb, Button, Card, Col, Layout, Menu, Rate, Row, Space, theme } from 'antd';
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
const { Header, Content, Footer } = Layout;


function CoursesPage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const loading = useSelector((state: RootState) => state.root.load)
    const [loaddingas, setloaddingas] = useState(false)
    const [datacourses, setdatacourses] = useState<any[]>([])
    const auth = useSelector((state: RootState) => state.root.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const hangdlegetdatacourses = async () => {
        setloaddingas(true)
        await api.get('/courses/?page=1',

        ).then((response: any) => {
            setdatacourses(response.data.items)
            console.log(response.data.items)
            setloaddingas(false)
        }).catch((error: any) => {
            console.log(error)
            setloaddingas(false)
        })

    }
    useEffect(() => {
        hangdlegetdatacourses()
    }, [])

    return (
        <Layout className="layout bg-white">
            <HeaderComponent item="courses" />
            <Content className="pt-[70px]">
                <div className="site-layout-content w-[100%] pb-10 " style={{ background: colorBgContainer }}>
                    <Row gutter={[24, 24]} >
                        {loaddingas ? null : <>
                            {datacourses.map(course => {
                                return <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                                    {course.sections.length == 0 ?
                                        <Badge.Ribbon text={course.price - course.discount <= 0 ? "Free" : <RiVipCrownFill className="mx-2 my-1" />} color={course.price - course.discount <= 0 ? "green" : "yellow"}>

                                            <Card className="card-course-h overflow-hidden opacity-90 hover:opacity-100 shadow-lg"
                                                hoverable
                                                cover={<img alt="example" className="w-[100%] h-[190px] object-cover image-course" src={course.image} />}
                                            >
                                                <Meta className="text-left text-title-course" title={course.name} />
                                                <p className="my-2 truncate text-gray-500">{course.headline}</p>
                                                <Space className="!flex !justify-between mt-2">


                                                </Space>
                                                <Space className="!flex !justify-between mt-2">
                                                    <Rate disabled className="text-xs !space-x-1 rate-course-item" defaultValue={5} />
                                                    {
                                                        course.price - course.discount <= 0 ? null : <>
                                                            <p className="text-sm font-bold"><span className="line-through text-gray-500">${course.price}</span>
                                                                <span className=" text-base text-blue-600"> ${course.price - course.discount}</span></p>
                                                        </>
                                                    }
                                                </Space>
                                                {
                                                    course.sections.length == 0 ?
                                                        <Button type="primary" className="bg-gray-400 hover:!bg-gray-400 font-bold mt-3 max-sm:text-xs w-[100%] cursor-default">Not started yet</Button> :
                                                        <>
                                                            {course.price - course.discount <= 0 ?
                                                                <Button type="primary" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:bg-blue-600 font-bold mt-3 max-sm:text-xs w-[100%] ">Learn Now</Button> :
                                                                <Button type="primary" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:bg-blue-600 font-bold mt-3 max-sm:text-xs w-[100%] ">Buy Now</Button>
                                                            }
                                                        </>
                                                }


                                            </Card>
                                        </Badge.Ribbon> :
                                        <Link to={'/course/' + course.id} >
                                            <Badge.Ribbon text={course.price - course.discount <= 0 ? "Free" : <RiVipCrownFill className="mx-2 my-1" />} color={course.price - course.discount <= 0 ? "green" : "yellow"}>

                                                <Card className="card-course-h overflow-hidden opacity-90 hover:opacity-100 shadow-lg"
                                                    hoverable
                                                    cover={<img alt="example" className="w-[100%] h-[190px] object-cover image-course" src={course.image} />}
                                                >
                                                    <Meta className="text-left text-title-course" title={course.name} />
                                                    <p className="my-2 truncate text-gray-500">{course.headline}</p>
                                                    <Space className="!flex !justify-between mt-2">


                                                    </Space>
                                                    <Space className="!flex !justify-between mt-2">
                                                        <div>
                                                        <Rate disabled className="text-xs !space-x-1 rate-course-item" defaultValue={course.courseKeyMetric.rating} /><span className="text-gray-500 text-xs ml-1">{course.courseKeyMetric.rating + "/5"}</span>
                                                        </div>
                                                        
                                                        {
                                                            course.price - course.discount <= 0 ? null : <>
                                                                <p className="text-sm font-bold"><span className="line-through text-gray-500">${course.price}</span>
                                                                    <span className=" text-base text-blue-600"> ${course.price - course.discount}</span></p>
                                                            </>
                                                        }
                                                    </Space>
                                                    {
                                                        course.sections.length == 0 ?
                                                            <Button type="primary" className="bg-gray-400 hover:!bg-gray-400 font-bold mt-3 max-sm:text-xs w-[100%] cursor-default">Not started yet</Button> :
                                                            <>
                                                                {course.price - course.discount <= 0 ?
                                                                    <Button type="primary" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:bg-blue-600 font-bold mt-3 max-sm:text-xs w-[100%] ">Learn Now</Button> :
                                                                    <Button type="primary" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:bg-blue-600 font-bold mt-3 max-sm:text-xs w-[100%] ">Buy Now</Button>
                                                                }
                                                            </>
                                                    }


                                                </Card>
                                            </Badge.Ribbon>


                                        </Link>

                                    }


                                </Col>
                            })}
                        </>}
                    </Row>
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