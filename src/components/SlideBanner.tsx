import React from "react";
import { Button, Carousel, Col, Row } from "antd";
import { FaRoute } from "react-icons/fa";


function SlideBanner() {

  return (
    <div className="w-[100%] h-[500px] max-lg:!h-[325px] max-sm:!h-[200px]  bg-[url('/src/assets/images/bg-slide-banner.png')] bg-[length:100%_100%]">
      <div className="mx-auto px-4 max-sm:px-1 max-w-[1400px]">
        <Carousel autoplay >
          <div className="w-[100%] h-[500px] max-lg:!h-[325px] max-sm:!h-[200px]">
            <Row gutter={[8, 0]}>
              <Col
                span={11} 
                className="flex flex-col !justify-center h-[500px] max-lg:!h-[325px] max-sm:!h-[200px] items-start space-y-3 max-sm:space-y-0"
              >
                
                <h2 className="max-lg:text-4xl max-sm:text-base text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r text-slide-how-to from-[#0160fa] to-[#1ddbb7] ">How to become a Front-end developer</h2>
                <p className=" max-lg:text-sm max-sm:text-[7px] text-xl font-bold text-gray-700 flex justify-start items-center"><FaRoute className="mr-3 max-sm:mr-1"/>Roadmap to becoming a Front-end developer</p>
                <p className=" max-lg:text-xs max-sm:text-[7px] text-base font-bold text-gray-700">For <span className="text-3xl max-sm:text-base max-lg:text-xl font-bold line-through">$573.00</span> 
                <span className="text-3xl max-sm:text-base max-lg:text-xl font-bold"> - </span> <span className="text-3xl max-sm:text-base max-lg:text-xl font-bold text-[#01a1fa]">$334.00</span></p>
                <p className="max-lg:text-xs max-sm:text-[7px] text-base font-bold text-gray-700">Help you master languages: <strong className="text-[#01a1fa]">HTML, CSS, JS, React JS, ...</strong> </p>


                <Button
                  type="primary"
                  className="max-sm:text-xs max-sm:!mt-5 max-sm:px-4 max-sm:py-2 !mt-10 bg-gradient-to-r from-[#024cac] to-[#0492ff] opacity-80 hover:opacity-100 text-base font-bold rounded-full px-8 py-5 flex items-center"
                >
                  Buy Now
                </Button>
              </Col>
              <Col span={13} className="flex justify-end items-center relative">
         
                <div className="w-[95%] max-sm:!w-[90%] h-[80%] max-sm:!h-[60%] bg-white rounded-3xl shadow-lg shadow-sky-400 flex justify-center items-center">
                <div className="w-[95%] h-[90%] bg-gradient-to-r from-[#01a1fa] to-[#1dbfdb] rounded-3xl flex justify-center items-center overflow-hidden">
                <div className="w-[95%] h-[90%] bg-white rounded-2xl flex justify-center items-center overflow-hidden">
                <video autoPlay muted loop className="h-[100%] w-[100%] object-cover">
                <source src="/src/assets/videos/video-fullstack.mp4" type="video/mp4"/>
                </video>
                </div>
                </div>
               
                <img className="max-lg:w-[115px] max-sm:w-[70px] max-sm:left-[10px]  absolute z-1 left-[-30px] bottom-5" src="/src/assets/images/illustration_header_left.png"/>

                </div>
              </Col>
            </Row>
          </div>
          <div className="w-[100%] h-[500px] max-lg:!h-[325px] max-sm:!h-[200px]">
            <Row gutter={[8, 0]}>
              <Col
                span={11} 
                className="flex flex-col !justify-center h-[500px] max-lg:!h-[325px] max-sm:!h-[200px] items-start space-y-3 max-sm:space-y-0"
              >
                
                <h2 className="max-lg:text-4xl max-sm:text-base text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0160fa] to-[#1ddbb7]  ">How to become a Front-end developer</h2>
                <p className=" max-lg:text-sm max-sm:text-[7px] text-xl font-bold text-gray-700 flex justify-start items-center"><FaRoute className="mr-3 max-sm:mr-1"/>Roadmap to becoming a Front-end developer</p>
                <p className=" max-lg:text-xs max-sm:text-[7px] text-base font-bold text-gray-700">For <span className="text-3xl max-sm:text-base max-lg:text-xl font-bold line-through">$573.00</span> <span className="text-3xl max-sm:text-base max-lg:text-xl font-bold"> - </span> 
                <span className="text-3xl max-sm:text-base max-lg:text-xl font-bold text-[#01a1fa]">$334.00</span></p>
                <p className="max-lg:text-xs max-sm:text-[7px] text-base font-bold text-gray-700">Help you master languages: <strong className="text-[#01a1fa]">HTML, CSS, JS, React JS, ...</strong> </p>


                <Button
                  type="primary"
                  className="max-sm:text-xs max-sm:!mt-5 max-sm:px-4 max-sm:py-2 !mt-10 bg-gradient-to-r  from-[#024cac] to-[#0492ff] opacity-80 hover:opacity-100 text-base font-bold rounded-full px-8 py-5 flex items-center"
                >
                  Buy Now
                </Button>
              </Col>
              <Col span={13} className="flex justify-end items-center relative">
                
                <div className="w-[100%] h-[90%] bg-white rounded-2xl flex justify-center items-center overflow-hidden">
                <video autoPlay muted loop className="h-[100%] w-[100%] object-cover">
                <source src="/src/assets/videos/website-maker.mp4" type="video/mp4"/>
                </video>
                </div>
                
              </Col>
            </Row>
          </div>
          <div className="w-[100%] h-[500px] max-lg:!h-[325px] max-sm:!h-[200px]">
            <Row gutter={[8, 0]}>
              <Col
                span={11}
                className="flex flex-col !justify-center h-[500px] max-lg:!h-[325px] max-sm:!h-[200px] items-start space-y-3 max-sm:space-y-0"
              >
                
                <h2 className="max-lg:text-4xl max-sm:text-base text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0160fa] to-[#1ddbb7] ">How to become a Front-end developer</h2>
                <p className=" max-lg:text-sm max-sm:text-[7px] text-xl font-bold text-gray-700 flex justify-start items-center"><FaRoute className="mr-3 max-sm:mr-1"/>Roadmap to becoming a Front-end developer</p>
                <p className=" max-lg:text-xs max-sm:text-[7px] text-base font-bold text-gray-700">For <span className="text-3xl max-sm:text-base max-lg:text-xl font-bold line-through">$573.00</span> <span className="text-3xl max-sm:text-base max-lg:text-xl font-bold"> - </span> <span className="text-3xl max-sm:text-base max-lg:text-xl font-bold text-[#01a1fa]">$334.00</span></p>
                <p className="max-lg:text-xs max-sm:text-[7px] text-base font-bold text-gray-700">Help you master languages: <strong className="text-[#01a1fa]">HTML, CSS, JS, React JS, ...</strong> </p>


                <Button
                  type="primary"
                  className="max-sm:text-xs max-sm:!mt-5 max-sm:px-4 max-sm:py-2 !mt-10 bg-gradient-to-r  from-[#024cac] to-[#0492ff] opacity-80 hover:opacity-100 text-base font-bold rounded-full px-8 py-5 flex items-center relative"
                  
                >
                  
                  Buy Now
                </Button>
              </Col>
              <Col span={13} className="flex justify-end items-center relative">
                
                <div className="w-[95%] h-[90%] bg-white rounded-2xl flex justify-center items-center overflow-hidden">
                <video autoPlay muted loop className="h-[100%] w-[100%] object-cover">
                <source src="/src/assets/videos/graphic-maker.mp4" type="video/mp4"/>
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
