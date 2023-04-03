

import React, { useEffect, useState } from 'react';
import { Button, Modal, Checkbox, Form, Input, Space } from 'antd';
import { FaApple, FaFacebookF, FaRegUser, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, unsetLoading } from '../../store/loadSlice';
import api from '../../configs/axiosConfig';
import { setNotify } from '../../store/notifycationSlide';
import { RootState } from '../../store/types';
import { editUser } from '../../store/authSlice';

interface props {
    user: UserData
};
interface UserData {
        key: string
        email: string
        lastName: string
        firstName: string
        role: string
        avatar: string
        phoneNumber: string
      }

const AdminUserShowComponent: React.FC<props>= ({user}) => {
    
    return (

            <Form
            name="basic"
            layout="vertical"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            className='mt-8'
        >
            <h4 className='text-xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-[#024cac] to-[#0492ff]'>Edit your information</h4>
            <hr className='my-3'></hr>
            <Space>
            <Form.Item

                    label="First name"
                    name="firstName"
                    initialValue={"ádadsas"}
                    className='mb-4'
                    >
                    <Input className='font-normal text-base'  disabled/>
                </Form.Item>
                <Form.Item

                    label="Last name"
                    name="lastname"
                    initialValue={user? user.lastName: ""}
                    className='mb-4'
                >
                    <Input className='font-normal text-base' disabled/>
                </Form.Item>
            </Space>
            <Form.Item
                label="Email"
                name="email"
                className='mb-4'
                initialValue={user? user.email: ""}

            >
                <Input className='font-normal text-base' disabled/>
            </Form.Item>

            <Form.Item
                label="Phone Number"
                name="phoneNumber"
                className='mb-4'
                initialValue={user? user.phoneNumber: ""}

            >
                <Input className='font-normal text-base' disabled/>
            </Form.Item>
            </Form>


       
    );
}

export default AdminUserShowComponent;