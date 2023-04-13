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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLoading, unsetLoading } from "../store/loadSlice";
import api from "../configs/axiosConfig";
import { logout } from "../store/authSlice";
import Meta from "antd/es/card/Meta";
import { RiVipCrownFill } from "react-icons/ri";
const { Header, Content, Footer } = Layout;


function DetailCoursesPage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const loading = useSelector((state: RootState) => state.root.load)
    const [loaddingas, setloaddingas] = useState(false)
    const [courses, setcourses] = useState<any>(null)
    const auth = useSelector((state: RootState) => state.root.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();


    const hangdlegetdatacourses = async () => {
        setloaddingas(true)
        console.log(location.pathname.split("/")[2])
        await api.get('/courses/'+location.pathname.split("/")[2],

        ).then((response: any) => {
            setcourses(response.data)
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

export default DetailCoursesPage;