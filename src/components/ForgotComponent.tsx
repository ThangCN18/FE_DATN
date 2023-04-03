import React, { useState } from 'react';
import { Button, Modal, Checkbox, Form, Input, Space } from 'antd';
import { FaApple, FaFacebookF, FaRegUser, FaTwitter } from 'react-icons/fa';
import {FcGoogle} from "react-icons/fc"
import { Link } from 'react-router-dom';

interface props {
    setcontentModal: React.Dispatch<React.SetStateAction<number>>
};

 
const ForgotComponent: React.FC<props> = ({setcontentModal}) => {
    return ( 
        <Form
                name="basic"
                layout="vertical"
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
            >
                
                <Form.Item
                    label="Email"
                    name="email"
                    className='mb-4'
                    rules={[{ required: true, message: 'Please input your email!', type: "email" }]}
                >
                    <Input className='font-normal text-base' />
                </Form.Item>

                <Form.Item className='mb-4' >
                    <Button className='w-[100%] h-9 bg-gradient-to-r  from-[#01a1fa] to-[#1ddbb7] hover:opacity-75 !font-medium !text-base' type="primary" htmlType="submit">
                        Send
                    </Button>
                </Form.Item>

            </Form>
     );
}
 
export default ForgotComponent;