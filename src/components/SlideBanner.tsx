import React from "react";
import { Button, Carousel, Col, Row } from "antd";
import { FaRoute } from "react-icons/fa";


function SlideBanner() {

  return (
    <div className="w-[100%] h-[500px] max-lg:!h-[325px] max-md:!h-[550px]  bg-[url('../assets/images/bg-slide-banner.png')] bg-[length:100%_100%]">
      <div className="mx-auto px-4 max-sm:px-1 max-w-[1400px]">
        <Carousel autoplay >
          <div className="w-[100%] h-[500px] max-lg:!h-[325px] max-md:!h-[550px]">
          <Row gutter={[8, 0]} className="max-md:!flex-col-reverse">
              <Col
                md={24} sm={24} xs={24} lg={11} xl={11}
                className="flex flex-col !justify-center h-[500px] max-lg:!h-[325px] max-md:!h-[100%] items-start space-y-3 max-sm:space-y-0 "
              >
                
                <h2 className="max-lg:text-4xl max-md:text-3xl text-6xl max-md:px-5 max-md:text-center max-md:mx-auto font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0160fa] to-[#1ddbb7]  ">How to become a Front-end developer</h2>
                <p className=" max-lg:text-sm max-md:text-md text-xl max-md:mx-auto   font-bold text-gray-700 flex justify-start items-center"><FaRoute className="mr-3 max-md:mr-1"/>Roadmap to becoming a Front-end developer</p>
                <p className=" max-lg:text-xs max-md:text-lg text-base  max-md:mx-auto  font-bold text-gray-700">For <span className="text-3xl max-md:text-base max-lg:text-xl font-bold line-through">$573.00</span> <span className="text-3xl max-md:text-base max-lg:text-xl font-bold"> - </span> 
                <span className="text-3xl max-md:text-base max-lg:text-xl  font-bold text-[#01a1fa]">$334.00</span></p>
                <p className="max-lg:text-xs max-md:text-md text-base  max-md:mx-auto  font-bold text-gray-700">Help you master languages: <strong className="text-[#01a1fa]">HTML, CSS, JS, React JS, ...</strong> </p>


                <Button
                  type="primary"
                  className="max-sm:text-xs max-sm:!mt-5 max-sm:px-4 max-sm:py-2 !mt-10 bg-gradient-to-r max-md:mx-auto  from-[#024cac] to-[#0492ff] opacity-80 hover:opacity-100 text-base font-bold rounded-full px-8 py-5 flex items-center"
                >
                  Buy Now
                </Button>
              </Col>
              <Col  md={24} sm={24} xs={24} lg={13} xl={13} className="flex justify-end max-md:my-8 max-md:justify-center items-center relative">
         
                <div className="w-[95%] max-md:!w-[80%] max-md:!h-[250px] max-md:mx-auto h-[80%]  bg-white rounded-3xl shadow-lg shadow-sky-400 flex justify-center items-center">
                <div className="w-[95%] h-[90%] bg-gradient-to-r from-[#01a1fa] to-[#1dbfdb] rounded-3xl flex justify-center items-center overflow-hidden">
                <div className="w-[95%] h-[90%] bg-white rounded-2xl flex justify-center items-center overflow-hidden">
                <video autoPlay muted loop className="h-[100%] w-[100%] object-cover">
                <source src="https://live.staticflickr.com/video/52813964825/7a062ce0d6/360p.mp4?s=eyJpIjo1MjgxMzk2NDgyNSwiZSI6MTY4MTM1ODgxMSwicyI6IjY2MDMxYWZjYTRkZGFhY2FhNzk0NzIxZTQ3MjY4ODg4ZGM3N2QzMWQiLCJ2IjoxfQ" type="video/mp4"/>
                </video>
                </div>
                </div>
               
                <img className="max-lg:w-[115px] max-md:w-[100px] max-md:left-[10px] max-md:bottom-[7px]  absolute z-1 left-[-30px] bottom-5" src="https://coursesbe.s3.ap-southeast-1.amazonaws.com/6eb83c59-dbae-4e80-97d1-7a7d81f7bcb7-illustration_header_left.png"/>

                </div>
              </Col>
            </Row>
          </div>
          <div className="w-[100%] h-[500px] max-lg:!h-[325px] max-dm:!h-[550px]">
            <Row gutter={[8, 0]} className="max-md:!flex-col-reverse">
              <Col
                md={24} sm={24} xs={24} lg={11} xl={11}
                className="flex flex-col !justify-center h-[500px] max-lg:!h-[325px] max-md:!h-[100%] items-start space-y-3 max-sm:space-y-0 "
              >
                
                <h2 className="max-lg:text-4xl max-md:text-3xl text-6xl max-md:px-5 max-md:text-center max-md:mx-auto font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0160fa] to-[#1ddbb7]  ">How to become a Front-end developer</h2>
                <p className=" max-lg:text-sm max-md:text-md text-xl max-md:mx-auto   font-bold text-gray-700 flex justify-start items-center"><FaRoute className="mr-3 max-md:mr-1"/>Roadmap to becoming a Front-end developer</p>
                <p className=" max-lg:text-xs max-md:text-lg text-base  max-md:mx-auto  font-bold text-gray-700">For <span className="text-3xl max-md:text-base max-lg:text-xl font-bold line-through">$573.00</span> <span className="text-3xl max-md:text-base max-lg:text-xl font-bold"> - </span> 
                <span className="text-3xl max-md:text-base max-lg:text-xl  font-bold text-[#01a1fa]">$334.00</span></p>
                <p className="max-lg:text-xs max-md:text-md text-base  max-md:mx-auto  font-bold text-gray-700">Help you master languages: <strong className="text-[#01a1fa]">HTML, CSS, JS, React JS, ...</strong> </p>


                <Button
                  type="primary"
                  className="max-sm:text-xs max-sm:!mt-5 max-sm:px-4 max-sm:py-2 !mt-10 bg-gradient-to-r max-md:mx-auto  from-[#024cac] to-[#0492ff] opacity-80 hover:opacity-100 text-base font-bold rounded-full px-8 py-5 flex items-center"
                >
                  Buy Now
                </Button>
              </Col>
              <Col md={24} sm={24} xs={24} lg={13} xl={13} className="flex justify-end  max-md:justify-center items-center relative">
                
                <div className="w-[90%] h-[90%] bg-white rounded-2xl  flex justify-center items-center overflow-hidden">
                <video autoPlay muted loop className="h-[100%] w-[100%] object-cover">
                <source src="https://live.staticflickr.com/video/52813551836/36a4386c8f/360p.mp4?s=eyJpIjo1MjgxMzU1MTgzNiwiZSI6MTY4MTM1ODkyNCwicyI6IjRhMWVmZGZlNmUyMjFmN2VlNjc3NDBiNjhhNjYzZjM5ZGUyZTMyOTMiLCJ2IjoxfQ" type="video/mp4"/>
                </video>
                </div>
                
              </Col>
            </Row>
          </div>
          <div className="w-[100%] h-[500px] max-lg:!h-[325px] max-sm:!h-[200px]">
          <Row gutter={[8, 0]} className="max-md:!flex-col-reverse">
              <Col
                md={24} sm={24} xs={24} lg={11} xl={11}
                className="flex flex-col !justify-center h-[500px] max-lg:!h-[325px] max-md:!h-[100%] items-start space-y-3 max-sm:space-y-0 "
              >
                
                <h2 className="max-lg:text-4xl max-md:text-3xl text-6xl max-md:px-5 max-md:text-center max-md:mx-auto font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0160fa] to-[#1ddbb7]  ">How to become a Front-end developer</h2>
                <p className=" max-lg:text-sm max-md:text-md text-xl max-md:mx-auto   font-bold text-gray-700 flex justify-start items-center"><FaRoute className="mr-3 max-md:mr-1"/>Roadmap to becoming a Front-end developer</p>
                <p className=" max-lg:text-xs max-md:text-lg text-base  max-md:mx-auto  font-bold text-gray-700">For <span className="text-3xl max-md:text-base max-lg:text-xl font-bold line-through">$573.00</span> <span className="text-3xl max-md:text-base max-lg:text-xl font-bold"> - </span> 
                <span className="text-3xl max-md:text-base max-lg:text-xl  font-bold text-[#01a1fa]">$334.00</span></p>
                <p className="max-lg:text-xs max-md:text-md text-base  max-md:mx-auto  font-bold text-gray-700">Help you master languages: <strong className="text-[#01a1fa]">HTML, CSS, JS, React JS, ...</strong> </p>


                <Button
                  type="primary"
                  className="max-sm:text-xs max-sm:!mt-5 max-sm:px-4 max-sm:py-2 !mt-10 bg-gradient-to-r max-md:mx-auto  from-[#024cac] to-[#0492ff] opacity-80 hover:opacity-100 text-base font-bold rounded-full px-8 py-5 flex items-center"
                >
                  Buy Now
                </Button>
              </Col>
              <Col md={24} sm={24} xs={24} lg={13} xl={13} className="flex justify-end  max-md:justify-center items-center relative">
                
                <div className="w-[90%] h-[90%] bg-white rounded-2xl  flex justify-center items-center overflow-hidden">
                <video autoPlay muted loop className="h-[100%] w-[100%] object-cover">
                <source src="https://live.staticflickr.com/video/52813748209/112b410edc/360p.mp4?s=eyJpIjo1MjgxMzc0ODIwOSwiZSI6MTY4MTM1ODkyMSwicyI6ImIxZGFkYTc3NjdhODUwODUzZjdiMmNjMGNhOWI2MWNkYmZlN2UxMzMiLCJ2IjoxfQ" type="video/mp4"/>
                </video>
                </div>
                
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default SlideBanner;
