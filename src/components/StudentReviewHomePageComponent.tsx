import { Avatar, Button, Card } from "antd";
import React from "react"
import { BsCheck } from "react-icons/bs";
import { FaRoute } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    return (
        <div className="mx-auto px-4 mt-14  max-sm:mt-[20px] max-sm:px-1 max-w-[1400px] ">
            <h2 className="text-3xl pt-5 max-sm:text-xl font-bold text-center bg-clip-text text-transparent bg-gray-700 ">What do students say about us?</h2>
           
            <Carousel responsive={responsive}  className="max-w-[1200px] mx-auto my-14 max-sm:my-5">
                
              <div className="px-5">
              <Card className="text-lg bg-gradient-to-l from-blue-400 to-cyan-500 font-semibold text-center">
                <div className="flex justify-between items-center space-x-8">
                    <div className="flex flex-col items-center justify-center space-y-3">
                        <Avatar className="w-[90px] h-[90px]" src="https://coursesbe.s3.ap-southeast-1.amazonaws.com/b953b7d1-915c-4e26-a2e2-37e0b60ff546-hinh-the.jpg"/>
                        <h5 className="text-sm truncate">Nguyen Chi Thang </h5>
                    </div>
                    <p >"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto dolores neque aliquam impedit dolores neque aliquam impedit!"</p>
                </div>
                
            </Card>
              </div>
              <div className="px-5">
              <Card className="text-lg  bg-gradient-to-l from-blue-400 to-cyan-500 font-semibold text-center">
                <div className="flex justify-between items-center space-x-8">
                    <div className="flex flex-col items-center justify-center space-y-3">
                        <Avatar className="w-[90px] h-[90px]" src="https://coursesbe.s3.ap-southeast-1.amazonaws.com/b953b7d1-915c-4e26-a2e2-37e0b60ff546-hinh-the.jpg"/>
                        <h5 className="text-sm truncate">Nguyen Chi Thang</h5>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto dolores neque aliquam impedit dolores neque aliquam impedit!"</p>
                </div>
                
            </Card>
              </div>
              <div className="px-5">
              <Card className="text-lg bg-gradient-to-l from-blue-400 to-cyan-500 font-semibold text-center">
                <div className="flex justify-between items-center space-x-8">
                    <div className="flex flex-col items-center justify-center space-y-3">
                        <Avatar className="w-[90px] h-[90px]" src="https://coursesbe.s3.ap-southeast-1.amazonaws.com/b953b7d1-915c-4e26-a2e2-37e0b60ff546-hinh-the.jpg"/>
                        <h5 className="text-sm truncate">Nguyen Chi Thang</h5>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto dolores neque aliquam impedit dolores neque aliquam impedit!"</p>
                </div>
                
            </Card>
              </div>
              

                
            </Carousel>
        </div>
    );
}

export default StudentReviewHomePageComponent;