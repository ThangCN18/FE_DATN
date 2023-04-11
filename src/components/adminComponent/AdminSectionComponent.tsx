import api from '../../configs/axiosConfig';
import { setLoading, unsetLoading } from '../../store/loadSlice';
import { setNotify } from '../../store/notifycationSlide';
import { RootState } from '../../store/types';
import { Avatar, Badge, Button, Card, Col, Collapse, Form, Image, Input, Modal, Space, Tooltip } from 'antd';
import React,{useState, useEffect} from 'react'
import { BiEdit } from 'react-icons/bi';
import { BsFillEyeFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import UploadImageComponent from '../UploadImageComponent';
import TextArea from 'antd/es/input/TextArea';
import Carousel from 'react-multi-carousel';
import {GrFormAdd} from "react-icons/gr"
const { Option } = Select;
import { Select } from 'antd';
import type { SelectProps } from 'antd';
const { Panel } = Collapse;
 

import {useNavigate} from 'react-router-dom'
import { SiYoutubemusic } from 'react-icons/si';
import { AiOutlineMore } from 'react-icons/ai';

interface propstype {
    section: any
    course: any
    handelGetDataCourse: () => Promise<void>
}

const AdminSectionComponent:  React.FC<propstype>= ({section, course, handelGetDataCourse}) => {
    const [onshowaction, setonshowaction] = useState(false)
    const [showmodaledit, setshowmodaledit] = useState(false)
    const [showmodaldelete, setshowmodaldelete] = useState(false)
    const auth = useSelector((state: RootState) => state.root.auth)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const headers = {
        Accept: '*/*',
        Authorization: 'Bearer ' + auth.user.accessToken,
      };


      const handledeleteSection = async () =>{
        dispatch(setLoading({}))
        await api.delete(`/courses/${course.id}/sections/${section.id}`,
            {
                headers
              },
       
        ).then((response:any)=>{
            if (response.status === 204){
                handelGetDataCourse()
                dispatch(setNotify({typeNotify: "success", titleNotify: "Delete section successful!", messageNotify: 'You delete section successful'}))
                dispatch(unsetLoading({}))
                setshowmodaldelete(false)
            }
        }).catch((error: any)=>{
            console.log(error)
            dispatch(setNotify({typeNotify: "error", titleNotify: "delete section unsuccessful!", messageNotify: error.response.data.message}))
            dispatch(unsetLoading({}))
        })
  
    }
  
   

    const [form] = Form.useForm();
  
   
  
    const handleeditsection = async (inputData: any) =>{
        dispatch(setLoading({}))
        await api.patch(`/courses/${course.id}/sections/${section.id}`,
            inputData,
            {
                headers
              },
       
        ).then((response:any)=>{
            if (response.status === 204){
                form.resetFields()
                handelGetDataCourse()
                dispatch(setNotify({typeNotify: "success", titleNotify: "Edit section successful!", messageNotify: 'You Edit section successful'}))
                dispatch(unsetLoading({}))
                setshowmodaledit(false)
            }
        }).catch((error: any)=>{
            console.log(error)
            dispatch(setNotify({typeNotify: "error", titleNotify: "Edit section unsuccessful!", messageNotify: error.response.data.message}))
            dispatch(unsetLoading({}))
        })
  
    }

  
    const onFinish = (values: any) => {
        
            
            const inputData = {
                name: values.name, 
            }
            handleeditsection(inputData)
      };



    return ( 
        <>
       <Collapse >
            <Panel header={<div className='flex justify-between items-center'>
                <h5 className='text-base font-semibold truncate'>{section.name}</h5>
                <div>
                    <Button size="small"  onClick={()=>{setshowmodaledit(true)}}  className='text-blue-600 border-blue-600 '><BiEdit /></Button>
                    <Button size="small" onClick={()=>{setshowmodaldelete(true)}}  className='text-red-600 border-red-600 mx-2'><MdDeleteForever /></Button>
                    <Button size="small"  className='text-green-600 border-green-600 '><GrFormAdd /></Button>
                </div>
            </div>}  key="1">

                {
                    section.lectures?<>
                        {
                            section.lectures.map(lecture =>{
                                return <div className='flex justify-between items-center'>
                                    <div className='flex justify-start items-center space-x-3'>
                                        <SiYoutubemusic className='text-gray-600'/>
                                        <p className='truncate'>{lecture.name}</p>
                                    </div>
                                    <AiOutlineMore className='text-gray-600'/>
                                </div>
                            })
                        }
                    </>:null
                }
                
            </Panel>
        </Collapse>
    

    <Modal title={""} width={400} open={showmodaldelete} footer={false} 
      onCancel={()=>{setshowmodaldelete(false)
      }} >
           <MdDeleteForever className='text-red-500 mx-auto my-1 text-[40px]' />
            
            <p className='text-base font-bold my-2 text-center text-red-500'> <span>Make sure you delete the section</span></p>
            <p className='text-sm my-2 text-center truncate'> <span>Delete section: </span> <span className="font-medium">{section.name} </span></p>
            <div className='flex justify-end px-3 pt-4'>
            <Button  danger onClick={()=>{handledeleteSection()}} >Delete</Button>
            </div>
          </Modal>

     <Modal open={showmodaledit} onCancel={()=>{setshowmodaledit(false)}} footer={null}>
        <h4 className='text-xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-[#024cac] to-[#0492ff]'>Create new section</h4>
            <hr className='my-3'></hr>
         
          
          <Form
            name="basic"
            layout="vertical"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            className='mt-8'
            onFinish={onFinish}
        >
                <Form.Item
                    label="Name"
                    name="name"
                    className='mb-4'
                    rules={[{ required: true, message: 'Please input name!', type: "string" }]}
                    initialValue={section.name}
                >
                    <Input className='font-normal text-base'/>
                </Form.Item>

            <Form.Item className='mb-4 mt-7 text-center' >
                <Button className='w-[150px] h-9 bg-gradient-to-r from-[#024cac] to-[#0492ff] hover:opacity-75 !font-medium !text-base' type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
          
        </Modal>


        <Modal open={showmodaledit} onCancel={()=>{setshowmodaledit(false)}} footer={null}>
        <h4 className='text-xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-[#024cac] to-[#0492ff]'>Create New Section</h4>
            <hr className='my-3'></hr>
         
          
          <Form
            name="basic"
            layout="vertical"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            className='mt-8'
            onFinish={onFinish}
        >
                <Form.Item
                    label="Name"
                    name="name"
                    className='mb-4'
                    rules={[{ required: true, message: 'Please input name!', type: "string" }]}
                    initialValue={section.name}
                >
                    <Input className='font-normal text-base'/>
                </Form.Item>

            <Form.Item className='mb-4 mt-7 text-center' >
                <Button className='w-[150px] h-9 bg-gradient-to-r from-[#024cac] to-[#0492ff] hover:opacity-75 !font-medium !text-base' type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
          
        </Modal>
         


    
    </>
     );
}
 
export default AdminSectionComponent;