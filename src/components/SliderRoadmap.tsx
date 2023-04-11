import { Button } from "antd";
import React from "react"
import { BsCheck } from "react-icons/bs";
import { FaRoute } from "react-icons/fa";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 590},
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 589, min: 0 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const SliderRoadmap: React.FC = () => {
    return (
        <div className="mx-auto px-4 mt-[80px] max-sm:mt-[20px] max-sm:px-1 max-w-[1400px]">
            <h2 className="text-3xl py-5 max-sm:text-xl font-bold text-center bg-clip-text text-transparent bg-blue-600 ">Training Roadmaps</h2>
            <p className="text-lg max-sm:text-sm max-sm:px-[5%] max-md:text-base font-semibold text-center leading-8 px-[17%]"><strong>Wizcove IT </strong>provides students with the skills and knowledge to work in the information technology industry, including courses from basic to advanced, to help students understand the theory and application of technologies. information in a real environment.</p>
            <Carousel responsive={responsive}  className="max-w-[1170px] mx-auto my-14 max-sm:my-5">
                
                <div className=" py-10 px-5 pb-10 max-sm:px-2 text-center">
                    <div className="bg-white w-100 h-[270px] max-sm:h-[220px] !border border-inherit rounded-md shadow-xl text-center">
                        <img className="w-[60px] mt-[-30px] mx-auto max-sm:w-[50px] max-sm:mt-[-25px]"
                         src="/src/assets/images/frontenddev.png"/>
                         <h4 className="mt-5 mb-3 max-sm:mt-2 text-base max-sm:text-xs max-lg:text-sm font-bold flex justify-center space-x-1 items-center"><FaRoute /> <span>Front-End Developer</span></h4>
                         <div className=" mb-3 ml-5 h-[120px] max-sm:h-[105px] flex space-y-1 flex-col">
                         
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>JavaScript, Html, Css.</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Html, Css Advanced</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Framework React</span></p>
                         
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>TypeScript</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Redux</span></p>
                         </div>
                         <Button type="primary" className="bg-gradient-to-r from-blue-500 to-cyan-600 font-semibold max-sm:text-xs ">See more</Button>
                    </div>
                </div>
                <div className=" py-10 px-5 pb-10 max-sm:px-2 text-center">
                    <div className="bg-white w-100 h-[270px] max-sm:h-[220px] !border border-inherit rounded-md shadow-xl text-center">
                        <img className="w-[60px] mt-[-30px] mx-auto max-sm:w-[50px] max-sm:mt-[-25px]"
                         src="/src/assets/images/backend.png"/>
                         <h4 className="mt-5 mb-3 max-sm:mt-2 text-base max-sm:text-xs max-lg:text-sm font-bold flex justify-center space-x-1 items-center"><FaRoute /> <span>Back-End Developer</span></h4>
                         <div className=" mb-3 ml-5 h-[120px] max-sm:h-[105px] flex space-y-1 flex-col">
                         
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>JavaScript, Html, Css.</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>MySQL, MongoDB.</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Framework NodeJS</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>RESTful API</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Server-side rendering</span></p>
                         </div>
                         <Button type="primary" className="bg-gradient-to-r from-blue-500 to-cyan-600 font-semibold max-sm:text-xs ">See more</Button>
                    </div>
                </div>
                <div className=" py-10 px-5 pb-10 max-sm:px-2 text-center">
                    <div className="bg-white w-100 h-[270px] max-sm:h-[220px] !border border-inherit rounded-md shadow-xl text-center">
                        <img className="w-[60px] mt-[-30px] mx-auto max-sm:w-[50px] max-sm:mt-[-25px]"
                         src="/src/assets/images/fullstack.png"/>
                         <h4 className="mt-5 mb-3 max-sm:mt-2 text-base max-sm:text-xs max-lg:text-sm font-bold flex justify-center space-x-1 items-center"><FaRoute /> <span>FullStack Developer</span></h4>
                         <div className=" mb-3 ml-5 h-[120px] max-sm:h-[105px] flex space-y-1 flex-col">
                         
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Front-End</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Back-End</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Testing</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>DevOP</span></p>
                        
                         </div>
                         <Button type="primary" className="bg-gradient-to-r from-blue-500 to-cyan-600 font-semibold max-sm:text-xs ">See more</Button>
                    </div>
                </div>
                <div className=" py-10 px-5 pb-10 max-sm:px-2 text-center">
                    <div className="bg-white w-100 h-[270px] max-sm:h-[220px] !border border-inherit rounded-md shadow-xl text-center">
                        <img className="w-[60px] mt-[-30px] mx-auto max-sm:w-[50px] max-sm:mt-[-25px]"
                         src="/src/assets/images/testter.png"/>
                         <h4 className="mt-5 mb-3 max-sm:mt-2 text-base max-sm:text-xs max-lg:text-sm font-bold flex justify-center space-x-1 items-center"><FaRoute /> <span>Tester</span></h4>
                         <div className=" mb-3 ml-5 h-[120px] max-sm:h-[105px] flex space-y-1 flex-col">
                         
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>JavaScript, Html, Css.</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Manual Test</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Python</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Automation Test</span></p>
                         
                         </div>
                         <Button type="primary" className="bg-gradient-to-r from-blue-500 to-cyan-600 font-semibold max-sm:text-xs ">See more</Button>
                    </div>
                </div>
                <div className=" py-10 px-5 pb-10 max-sm:px-2 text-center">
                    <div className="bg-white w-100 h-[270px] max-sm:h-[220px] !border border-inherit rounded-md shadow-xl text-center">
                        <img className="w-[60px] mt-[-30px] mx-auto max-sm:w-[50px] max-sm:mt-[-25px]"
                         src="/src/assets/images/mobile.png"/>
                         <h4 className="mt-5 mb-3 max-sm:mt-2 text-base max-sm:text-xs max-lg:text-sm font-bold flex justify-center space-x-1 items-center"><FaRoute /> <span>Mobile Developer</span></h4>
                         <div className=" mb-3 ml-5 h-[120px] max-sm:h-[105px] flex space-y-1 flex-col">
                         
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Dark</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Flutter</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Flutter Advanced</span></p>
                         <p className="text-black text-sm flex max-sm:text-[10px] justify-start items-center leading-3 space-x-1"><BsCheck className="!text-lg text-green-600"/>
                         <span>Firebase</span></p>
                         </div>
                         <Button type="primary" className="bg-gradient-to-r from-blue-500 to-cyan-600 font-semibold max-sm:text-xs ">See more</Button>
                    </div>
                </div>

                
            </Carousel>
        </div>
    );
}

export default SliderRoadmap;