import React, { useState } from 'react';

const SignUpSucccessComponent: React.FC = () => {

    return (
       <div className='text-center '>
        <video autoPlay muted loop className="h-[70%] w-[70%] mx-auto object-cover">
                <source src="https://live.staticflickr.com/video/52813748214/d6092a9457/360p.mp4?s=eyJpIjo1MjgxMzc0ODIxNCwiZSI6MTY4MTM1ODkyMCwicyI6IjFlODg2ZGU5YWY5ZTQ2OTA5ZTM4MjdjM2IyMDlhMWUxZTliMDJkNDUiLCJ2IjoxfQ" type="video/mp4"/>
        </video>
        <h5 className='text-xl font-semibold px-8 mb-5'>You have successfully registered an account</h5>
        <p className='text-base font-semibold text-orange-500 pb-3'>Please verify your email!</p>
       </div>
    );
}

export default SignUpSucccessComponent;