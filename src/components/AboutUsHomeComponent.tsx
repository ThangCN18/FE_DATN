import { Button } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

 
const AboutUsHomeComponent: React.FC = () => {
    return ( 
        <div className='max-w-[1400px] flex justify-between items-center w-100% bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto px-4 my-7 max-md:space-x-2 space-x-16'>
            <div className='flex flex-col justify-center items-start px-10 max-md:px-0 max-md:py-5 space-y-2'>
                <h4 className='text-sm text-gray-800 font-bold'>About Us</h4>
                <div className="logo flex justify-start items-center space-x-3 max-sm:space-x-1">
                    <img className="w-[45px] max-lg:w-[25px]" src="/./src/assets/images/logo-learning.png" alt="logo"/>
                    <h4 className="text-black text-2xl !leading-4 font-bold !py-0 max-lg:text-base max-md:text-sm">Wizcove IT <span>specialize in providing IT courses.</span></h4>
                    
                </div>
                <p className='text-base max-lg:text-sm  font-semibold text-gray-800 max-md:text-xs'>We want to share this passion with everyone by providing high-quality programming courses and helping students develop the necessary skills to become successful programmers.</p>
                <Link to="about-us"><Button type='primary' className='bg-blue-100 text-base font-medium h-10 max-md:text-sm max-md:h-7 max-md:w-[230px] max-md:!mt-5 !mt-8 w-[300px] text-zinc-800'>See more information about us</Button></Link>
            </div>
            <img className='h-[100%] max-lg:h-[90%] max-md:h-[160px]' src='/src/assets/images/wicoveitcard-dd9b01fcd2.svg'/>
            
        </div>
     );
}
 
export default AboutUsHomeComponent;

