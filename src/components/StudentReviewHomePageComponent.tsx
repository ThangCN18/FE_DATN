import { Avatar, Button, Card, Skeleton } from "antd";
import React, { useEffect, useState } from "react"
import { BsCheck } from "react-icons/bs";
import { FaRoute } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import api from "../configs/axiosConfig";
import SkeletonInput from "antd/es/skeleton/Input";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 590},
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 589, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const StudentReviewHomePageComponent: React.FC = () => {

    const [data, setdata] = useState([])


    
const getdatareview = async () =>{

    await api.get('/courses/8d4a5598-dab3-4348-b364-a11df46a7db6/review',
       
    
    ).then(async (response:any)=>{
        if (response.status === 200){

            setdata(response.data.items)
        }
       
    }).catch((error: any)=>{
        console.log(error)
        

    })
    
    }

    useEffect(()=>{
        getdatareview()
    },[])
    return (
        <div className="mx-auto px-4 mt-14  max-sm:mt-[20px] max-sm:px-1 max-w-[1400px] ">
            {
                data.length > 0?
                <h2 className="text-3xl pt-5 max-sm:text-xl font-bold text-center bg-clip-text text-transparent bg-gray-700 ">What do students say about us?</h2>
                :
                <div className="text-center">
                <SkeletonInput active className="!w-[200px]"/>

                    </div>
            }
            
           
            
            {
                data.length > 0?
                <Carousel responsive={responsive}  className="max-w-[1200px] mx-auto  max-sm:my-5">

                    {
                        data.map(review=>{
                            return <div className="px-5">
                            <Card className="text-lg shadow-lg border-[1px] border-gray-600 font-semibold text-center my-7">
                              <div className="flex justify-start max-md:flex-col max-md:space-x-0 max-md:space-y-2 items-center space-x-8">
                                  <div className="flex flex-col items-center justify-center space-y-3 max-sm">
                                      <Avatar className="w-[90px] h-[90px]" src={review.user.avatar}/>
                                      <h5 className="text-sm truncate">{review.user.lastName + " " + review.user.lastName}</h5>
                                  </div>
                                  <p >" {review.content} " </p>
                              </div>
                              
                          </Card>
                            </div>
                        })
                    }
                
              

                
            </Carousel>
            :<Carousel responsive={responsive}  className="max-w-[1200px] mx-auto  max-sm:my-5">
                
            <div className="px-5">
            
              <SkeletonInput active className="!w-[100%] !h-[200px] rounded-lg mt-5 "/>
              
          
            </div>
            <div className="px-5">
            
            <SkeletonInput active className="!w-[100%] !h-[200px] rounded-lg mt-5 "/>
            
        
          </div>

              
          </Carousel>
            }
        </div>
    );
}

export default StudentReviewHomePageComponent;