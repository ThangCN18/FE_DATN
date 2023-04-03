import React, { useState } from 'react';

const SignUpSucccessComponent: React.FC = () => {

    return (
       <div className='text-center '>
        <video autoPlay muted loop className="h-[70%] w-[70%] mx-auto object-cover">
                <source src="/src/assets/videos/112417-verify-your-email.mp4" type="video/mp4"/>
        </video>
        <h5 className='text-xl font-semibold px-8 mb-5'>You have successfully registered an account</h5>
        <p className='text-base font-semibold text-orange-500 pb-3'>Please verify your email!</p>
       </div>
    );
}

export default SignUpSucccessComponent;