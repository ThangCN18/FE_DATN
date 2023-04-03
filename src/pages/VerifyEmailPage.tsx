
import { RootState } from '@src/store/types';
import api from '../configs/axiosConfig';
import { setLoading, unsetLoading } from '../store/loadSlice';
import { setNotify } from '../store/notifycationSlide';
import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import LoadingComponent from '../components/LoadingComponent';

const VerifyEmailPage: React.FC = () => {

    const [verifyss, setVerifyss] = useState(false)

    const dispatch = useDispatch()
    const loading = useSelector((state: RootState) => state.root.load)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const queryParamValue = searchParams.get('token');
    console.log(queryParamValue)


    const handelVerify = async (data: { token: String }) => {
        dispatch(setLoading({}))
        await api.put('/auth/verify-email', data).then((response: any) => {
            if (response.status === 204) {
                setVerifyss(true)
                dispatch(unsetLoading({}))

            }
        }).catch((error: any) => {
            console.log(error)
            setVerifyss(false)
            dispatch(unsetLoading({}))
        })

    }

    useEffect(() => {

        handelVerify({ token: queryParamValue })
    }, [])


    return (
        <>

            {
                loading.isLoading ?
                    <LoadingComponent /> :
                    <>{
                        verifyss ?
                            <div className='flex justify-center items-center flex-col w-[100vw] h-[100vh]'>
                                <video autoPlay muted className="h-[400px] w-[400px] max-sm:h-[200px] max-sm:w-[200px] mx-auto object-cover">
                                    <source src="/src/assets/videos/79952-successful.mp4" type="video/mp4" />
                                </video>
                                <h5 className='text-xl font-semibold px-8 mb-5 text-green-700 mt-[-100px]'>You have successfully verified your account</h5>
                                <p className='text-base font-medium '>Back to home: <Link to={'/'}><Button className='bg-blue-600 text-white'>Home</Button></Link></p>

                            </div>:
                            <div className='flex justify-center items-center flex-col w-[100vw] h-[100vh]'>
                            <video autoPlay muted className="h-[200px] w-[200px] max-sm:h-[100px] max-sm:w-[100px] mx-auto object-cover">
                                <source src="/src/assets/videos/7502-delete.mp4" type="video/mp4" />
                            </video>
                            <h5 className='text-xl font-semibold px-8 mb-5 text-red-600 '>You have unsuccessfully verified your account</h5>
                            <p className='text-base font-medium '>Back to home: <Link to={'/'}><Button className='bg-blue-600 text-white'>Home</Button></Link></p>

                        </div>
        }

                    </>
            }
        </>
    );
}

export default VerifyEmailPage;
