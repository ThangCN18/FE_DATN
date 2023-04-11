import { Button, Collapse, Skeleton, Space } from 'antd'
import api from '../../configs/axiosConfig'
import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import { BiEdit } from 'react-icons/bi';
import {SiYoutubemusic} from "react-icons/si"
import {AiOutlineMore} from "react-icons/ai"
const { Panel } = Collapse;
 
const AdminDetailCourseComponent: React.FC  = () => {

    const [loadinga, setLoadinga] = useState(false)
    const location = useLocation()
    const [course, setcourse] = useState<any>(null)

    const location_id = location.pathname.split('/')[3]


    const handelGetDataCourse = async () => {
        if (loadinga) {
            return;
          }
        await api.get(`/courses/${location_id}`)
        .then((response:any)=>{
        if (response.status === 200){
          setcourse(response.data)
        }
    }).catch((error: any)=>{
        setLoadinga(false);
    })
    
      }
    

    useEffect(() => {
        handelGetDataCourse()
    }, [])
    
    return ( 
        <>
        {
            course?<>
            <Space direction="vertical" className='w-[100%]'>
                <div className='flex justify-between items-center'>
                <h5 className='mb-4 text-lg font-bold truncate'>{course.name}</h5>
                <Button>Add Section</Button>
                </div>
                
                {
                    course.sections?<>
                    {
                        course.sections.map(section =>{
                            return <Collapse  key={section.id} >
                                        <Panel header={<div className='flex justify-between items-center'>
                                            <h5 className='text-base font-semibold truncate'>{section.name}</h5>
                                            <Button size="small"  className='text-blue-600 border-blue-600 mx-2'><BiEdit /></Button>
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
                        })
                    }
                    </> :null
                }
            
            </Space>
            
            
            </>:<>
            <Skeleton active paragraph={null}  className='!w-[50%] !text-4xl mb-3'/>
            <Skeleton.Button active  className='!w-[100%] !h-[45px] mb-3'/>
            <Skeleton.Button active  className='!w-[100%] !h-[45px] mb-3'/>
            <Skeleton.Button active  className='!w-[100%] !h-[45px] mb-3'/>
            <Skeleton.Button active  className='!w-[100%] !h-[45px] mb-3'/>
            <Skeleton.Button active  className='!w-[100%] !h-[45px] mb-3'/>
            <Skeleton.Button active  className='!w-[100%] !h-[45px] mb-3'/>
            <Skeleton.Button active  className='!w-[100%] !h-[45px] mb-3'/>
            <Skeleton.Button active  className='!w-[100%] !h-[45px] mb-3'/>
            <Skeleton.Button active  className='!w-[100%] !h-[45px]'/>
            </>
        }
        

  </>

     );
}
 
export default AdminDetailCourseComponent;