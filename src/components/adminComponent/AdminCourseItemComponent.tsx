import api from '../../configs/axiosConfig';
import { setLoading, unsetLoading } from '../../store/loadSlice';
import { setNotify } from '../../store/notifycationSlide';
import { RootState } from '../../store/types';
import { Avatar, Badge, Button, Card, Col, Form, Image, Input, Modal, Space, Tooltip } from 'antd';
import React,{useState, useEffect} from 'react'
import { BiEdit } from 'react-icons/bi';
import { BsFillEyeFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import UploadImageComponent from '../UploadImageComponent';
import TextArea from 'antd/es/input/TextArea';
import Carousel from 'react-multi-carousel';
const { Option } = Select;
import { Select } from 'antd';
import type { SelectProps } from 'antd';

import {useNavigate} from 'react-router-dom'

interface propstype {
    course: any
    handelGetDataCourse: (page: number) => Promise<void>
}

const AdminCourseItemComponent:  React.FC<propstype>= ({course, handelGetDataCourse}) => {
    const [onshowaction, setonshowaction] = useState(false)
    const [showmodalview, setshowmodalview] = useState(false)
    const [showmodaledit, setshowmodaledit] = useState(false)
    const [showmodaldelete, setshowmodaldelete] = useState(false)
    const auth = useSelector((state: RootState) => state.root.auth)
    const dispatch = useDispatch()
    const [showmodalupdate, setshowmodalupdate] = useState(false)
    const [datacoursechange, setdatacoursechange] = useState([])
    const [url_image, seturl_image] = useState(course.image)
    const navigate = useNavigate()
    const headers = {
        Accept: '*/*',
        Authorization: 'Bearer ' + auth.user.accessToken,
      };

    const handleDeleteCourse = async () =>{
        dispatch(setLoading({}))
        await api.delete('/courses/'+ course.id,

            {
                headers
              },
       
        ).then((response:any)=>{
            if (response.status === 204){
                handelGetDataCourse(1)
                dispatch(setNotify({typeNotify: "success", titleNotify: "Delete course successful!", messageNotify: 'You Delete course successful'}))
                dispatch(unsetLoading({}))
                setshowmodaldelete(false)
            }
        }).catch((error: any)=>{
            console.log(error)
            dispatch(setNotify({typeNotify: "error", titleNotify: "Delete course unsuccessful!", messageNotify: error.response.data.message}))
            dispatch(unsetLoading({}))
            setshowmodaldelete(false)
        })

    }


    const [form] = Form.useForm();
  
    const handleEditCourse = async (inputData: any) =>{
        dispatch(setLoading({}))
        await api.patch('/courses/'+ course.id,
            inputData,
            {
                headers
              },
       
        ).then((response:any)=>{
            if (response.status === 204){
                form.resetFields()
                handelGetDataCourse(1)
                dispatch(setNotify({typeNotify: "success", titleNotify: "Edit course successful!", messageNotify: 'You Edit course successful'}))
                dispatch(unsetLoading({}))
                setshowmodaledit(false)
            }
        }).catch((error: any)=>{
            console.log(error)
            dispatch(setNotify({typeNotify: "error", titleNotify: "Edit course unsuccessful!", messageNotify: error.response.data.message}))
            dispatch(unsetLoading({}))
        })
  
    }
  
    const onFinish = (values: any) => {
        if(url_image != ""){
            const requirements = values.requirements.split('\n');
            const benefits = values.benefits.split('\n');
            const inputData = {
                name: values.name, 
                description: values.description, 
                image: url_image,
                headline: values.headline,
                price: values.price? Number(values.price): 0,
                level: Number(values.level),
                discount: values.discount? Number(values.discount): 0,
                language: "VN",
                requirements: requirements,
                benefits: benefits
            }
            handleEditCourse(inputData)
  
        }
        
      };


    return ( 
        <>
        <Col span={8}>
            
        <Badge.Ribbon text={course.price == 0? "Free": "$"+course.price} color={course.price == 0? "green": ""}>
        <Card bordered={false} onMouseOver={()=>{setonshowaction(true)}} onMouseLeave={()=>{setonshowaction(false)}} className='!shadow-lg cursor-pointer hover:bg-sky-100 bg-sky-50'>
            <div className='flex justify-around items-start space-x-4'>
            <Image src={course.image} className='!w-[100px] !h-[70px] max-lg:!w-[80px] rounded-md shadow-md max-lg:!h-[40px]'/>
            <div>
            <h4 className='truncate text-lg font-bold mb-2 '>{course.name}</h4>
            <p className='text-webkit-line-clamp-3 '>{course.description}</p>
            <div className='flex justify-end mt-2'>

            </div>
            </div>
            </div>
            
            <div className='flex justify-end items-center space-x-4 h-0 relative'>
            {onshowaction? <div  className='flex justify-center px-5  absolute bottom-0 py-3 shadow-lg rounded-lg items-center space-x-4 bg-slate-50'>
                <Button size="small" onClick={()=>{navigate(`/admin/course/${course.id}`)}} className='text-blue-600 border-blue-600 '><BsFillEyeFill /></Button>
                <Button size="small" onClick={()=>{setshowmodaledit(true)}} className='text-yellow-600 border-yellow-600 mx-2'><BiEdit /></Button>
                <Button size="small" onClick={()=>{setshowmodaldelete(true)}}  className='text-red-600 border-red-600'><MdDeleteForever /></Button>
                </div>:null}
                                                 
            </div>
            
        </Card>
        </Badge.Ribbon>
    </Col>
    

    <Modal title={""} width={400} open={showmodaldelete} footer={false} 
      onCancel={()=>{setshowmodaldelete(false)
      }} >
           <MdDeleteForever className='text-red-500 mx-auto my-1 text-[40px]' />
            
            <p className='text-base font-bold my-2 text-center text-red-500'> <span>Make sure you delete the course</span></p>
            <p className='text-sm my-2 text-center truncate'> <span>Delete course: </span> <span className="font-medium">{course.name} </span></p>
            <div className='flex justify-end px-3 pt-4'>
            <Button  danger onClick={()=>{handleDeleteCourse()}} >Delete</Button>
            </div>
          </Modal>


          <Modal open={showmodaledit} onCancel={()=>{setshowmodaledit(false)}} footer={null}>
        <h4 className='text-xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-[#024cac] to-[#0492ff]'>Edit course</h4>
            <hr className='my-3'></hr>
         
          <UploadImageComponent url_image={url_image} seturl_image={seturl_image}/>
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
                    initialValue={course.name}
                >
                    <Input className='font-normal text-base'/>
                </Form.Item>
                <Space>
                <Form.Item
                    label="Price"
                    name="price"
                    className='mb-4'
                    initialValue={course.price}                   
                >
                   <Input type='number' min={0} className='font-normal text-base'/>
                </Form.Item>
                <Form.Item
                    label="Discount"
                    name="discount"
                    className='mb-4'
                    initialValue={course.discount}
                >
                   <Input type='number' min={0} className='font-normal text-base'/>
                </Form.Item>
                </Space>
                <Form.Item name="level" label="Level" initialValue={course.level}  rules={[{ required: true }]}>
                  <Select
                    placeholder="Select a option"
                    allowClear
                  
                  >
                    <Option value="1">Basic</Option>
                    <Option value="2">Advance</Option>
                    
                  </Select>
                </Form.Item>
                
                <Form.Item
                    label="Description"
                    name="description"
                    className='mb-4'
                    initialValue={course.description}
                    rules={[{ required: true, message: 'Please input description!', type: "string" }]}
                >
                    <TextArea rows={3} className='font-normal text-base'/>
                </Form.Item>

                <Form.Item
                    label="Headline"
                    name="headline"
                    className='mb-4'
                    initialValue={course.headline}
                    rules={[{ required: true, message: 'Please input headline!', type: "string" }]}
                >
                    <Input className='font-normal text-base'/>
                </Form.Item>

                <Space>
                <Form.Item
                    label="Requirements"
                    name="requirements"
                    className='mb-4'
                    initialValue={course.requirements.join('\n')}
                    rules={[{ required: true, message: 'Please input requirements!', type: "string" }]}
                >
                    <TextArea rows={4} className='font-normal text-base'/>
                </Form.Item>
                <Form.Item
                    label="Benefits"
                    name="benefits"
                    className='mb-4'
                    initialValue={course.benefits.join('\n')}
                    rules={[{ required: true, message: 'Please input benefits!', type: "string" }]}
                >
                    <TextArea rows={4} className='font-normal text-base'/>
                </Form.Item>
                </Space>
              

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
 
export default AdminCourseItemComponent;