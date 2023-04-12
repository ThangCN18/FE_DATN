import api from '../../configs/axiosConfig';
import { setLoading, unsetLoading } from '../../store/loadSlice';
import { setNotify } from '../../store/notifycationSlide';
import { RootState } from '../../store/types';
import { Avatar, Badge, Button, Card, Col, Collapse, Form, Image, Input, InputNumber, Modal, Row, Space, Tooltip } from 'antd';
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
    lecture: any
    handelGetDataCourse: () => Promise<void>
}

const AdminLectureComponent:  React.FC<propstype>= ({section, lecture, handelGetDataCourse}) => {
    
    const [showmodaledit, setshowmodaledit] = useState(false)
    const [showmodaldelete, setshowmodaldelete] = useState(false)
    const auth = useSelector((state: RootState) => state.root.auth)
    const [videoUrl, setvideoUrl] = useState('https://youtu.be/'+lecture.videoUrl)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const headers = {
        Accept: '*/*',
        Authorization: 'Bearer ' + auth.user.accessToken,
      };


      const handledeletelecture = async () =>{
        dispatch(setLoading({}))
        await api.delete(`/sections/${section.id}/lectures/${lecture.id}/`,
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
  

    const handleeditLecture = async (inputData: any) =>{
        dispatch(setLoading({}))
        await api.patch(`/sections/${section.id}/lectures/${lecture.id}/`,
            inputData,
            {
                headers
              },
       
        ).then((response:any)=>{
            if (response.status === 204){
                form.resetFields()
                handelGetDataCourse()
                dispatch(setNotify({typeNotify: "success", titleNotify: "Edit lecture successful!", messageNotify: 'You Edit lecture successful'}))
                dispatch(unsetLoading({}))
                setshowmodaledit(false)
                
            }
        }).catch((error: any)=>{
            console.log(error)
            dispatch(setNotify({typeNotify: "error", titleNotify: "Edit lecture unsuccessful!", messageNotify: error.response.data.message}))
            dispatch(unsetLoading({}))
        })
  
    }
   
  
    

  
    const onFinish = (values: any) => {
        
            
        const inputData = {
            name: values.name,
            description: values.description, 
            duration: Number(values.duration), 
            numLecture: Number(values.numLecture), 
            videoUrl: values.videoUrl.split("/")[3], 
        }
        handleeditLecture(inputData)
            
      };

      


    return ( 
        <>
      <div className='flex justify-between items-center py-4 border-2 px-3 rounded-sm border-gray-200'>
                                    <div className='flex justify-start items-center space-x-3 '>
                                        <SiYoutubemusic className='text-gray-600'/>
                                        <p className='truncate'>{lecture.name}</p>
                                    </div>
                                    <div>
                                    <Button size="small"  onClick={()=>{setshowmodaledit(true)}}  className='text-blue-600 border-blue-600 '><BiEdit /></Button>
                                    <Button size="small" onClick={()=>{setshowmodaldelete(true)}}  className='text-red-600 border-red-600 mx-2'><MdDeleteForever /></Button>
                                    </div>
                                </div>
                           
    

    <Modal title={""} width={400} open={showmodaldelete} footer={false} 
      onCancel={()=>{setshowmodaldelete(false)
      }} >
           <MdDeleteForever className='text-red-500 mx-auto my-1 text-[40px]' />
            
            <p className='text-base font-bold my-2 text-center text-red-500'> <span>Make sure you delete the lecture</span></p>
            <p className='text-sm my-2 text-center truncate'> <span>Delete lecture: </span> <span className="font-medium">{lecture.name} </span></p>
            <div className='flex justify-end px-3 pt-4'>
            <Button  danger onClick={()=>{handledeletelecture()}} >Delete</Button>
            </div>
          </Modal>




        


        <Modal open={showmodaledit} className='!w-[600px]' onCancel={()=>{setshowmodaledit(false)}} footer={null}>
        <h4 className='text-xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-[#024cac] to-[#0492ff]'>Create New Lecture</h4>
            <hr className='my-3'></hr>
         
          
          <Form
            name="basic"
            layout="vertical"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            className='mt-8'
            onFinish={onFinish}
        >
            <Row gutter={[16,16]}>
                <Col span={12}>
                <Form.Item
                    label="Link video"
                    name="videoUrl"
                    className='mb-4'
                    initialValue={videoUrl}
                    
                    rules={[{ required: true, message: 'Please input videoUrl!', type: "string" }]}
                >
                    <Input onChange={e=> {setvideoUrl(e.target.value)}} className='font-normal text-base'/>
                </Form.Item>
                <div className='bg-gray-200 rounded-md w-100% h-[200px]'>
                    {videoUrl? <>{videoUrl.split("/")[3]?<>
                    <iframe width="270" height="200" src={"https://www.youtube.com/embed/"+videoUrl.split("/")[3]} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </>:null}</>: null}
                </div>

                </Col>
                <Col span={12}>
                <Form.Item
                    label="Name"
                    name="name"
                    className='mb-4'
                    initialValue={lecture.name}
                    rules={[{ required: true, message: 'Please input name!', type: "string" }]}
                >
                    <Input className='font-normal text-base'/>
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    className='mb-4'
                    initialValue={lecture.description}
                    rules={[{ required: true, message: 'Please input description!', type: "string" }]}
                >
                    <TextArea className='font-normal text-base'/>
                </Form.Item>

                
                <Space >
                <Form.Item
                    label="Duration"
                    name="duration"
                    className='mb-4'
                    initialValue={lecture.duration}
                    rules={[{ required: true, message: 'Please input duration!', type: "number" }]}
                >
                    <InputNumber min={1} className='font-normal text-base !w-[100%]'/>
                </Form.Item>
                <Form.Item
                    label="Number Lecture"
                    name="numLecture"
                    className='mb-4'
                    initialValue={lecture.numLecture}
                    rules={[{ required: true, message: 'Please input numLecture!', type: "number" }]}
                >
                    <InputNumber min={1} className='font-normal text-base !w-[100%]'/>
                </Form.Item>

                </Space>

                </Col>
            </Row>
               

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
 
export default AdminLectureComponent;