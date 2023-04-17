import { Avatar, Badge, Button, Card, Rate, Space } from "antd";
import React, { useEffect, useState } from "react"
import { BsCheck } from "react-icons/bs";
import { FaRoute } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import api from "../configs/axiosConfig";
import ItemCourseComponent from "./ItemCourseComponent";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { RiVipCrownFill } from "react-icons/ri";
import Meta from "antd/es/card/Meta";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 590 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 589, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};



const PopularCourseComponent: React.FC = () => {



    const [loaddingas, setloaddingas] = useState(false)
    const [datacourses, setdatacourses] = useState<any[]>([])
    var adex = []

    const hangdlegetdatacourses = async () => {
        setloaddingas(true)
        await api.get('https://couresron.herokuapp.com/courses?perPage=5&page=1&sortField=courseKeyMetric.currentSubscribers&sortDirection=DESC',

        ).then((response: any) => {
            const data = response.data.items
            adex = data.map((course) => {
                return <div className="px-5">

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
                    </Badge.Ribbon>


                </div>
            })
            setdatacourses(adex)
        }).catch((error: any) => {
            console.log(error)
            setloaddingas(false)
        })

    }
    useEffect(() => {
        hangdlegetdatacourses()

    }, [])



    return (

        <div className="mx-auto px-4 mt-14  max-sm:mt-[20px] max-sm:px-1 max-w-[1400px] ">
            <h2 className="text-3xl pt-5 max-sm:text-xl font-bold text-center bg-clip-text text-transparent bg-gray-700 ">Most popular courses</h2>

            <Carousel responsive={responsive} className="max-w-[1400px] mx-auto my-14 max-sm:my-5">



                {
                    datacourses ? datacourses
                        : null
                }


            </Carousel>
        </div>
    );
}

export default PopularCourseComponent;