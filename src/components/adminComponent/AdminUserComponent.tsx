

import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Avatar, InputRef, Modal, Spin } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { BsFillEyeFill } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
import SkeletonButton from 'antd/es/skeleton/Button';
import SkeletonNode from 'antd/es/skeleton/Node';
import SkeletonAvatar from 'antd/es/skeleton/Avatar';
import { LoadingOutlined } from '@ant-design/icons';
import AdminUserShowComponent from './AdminUserShowComponent';


interface UserType {
  key: string
  email: string
  lastName: string
  firstName: string
  role: string
  avatar: string
  phoneNumber: string
}

type DataIndex = keyof UserType;

let datave: UserType[] = [
  {
    key: "1",
    email: "nct@gmail.com",
    lastName: "Nguyen",
    firstName: "thăng",
    role: "admin",
    avatar: "https://coursesbe.s3.ap-southeast-1.amazonaws.com/50b44393-1768-4b4d-8797-6f29296c07a4-96956a604c54950acc45.jpg",
    phoneNumber: "0357863600"
  },
  {
    key: "2",
    email: "nct@gmail.com",
    lastName: "Nguyen",
    firstName: "thăng",
    role: "admin",
    avatar: "https://coursesbe.s3.ap-southeast-1.amazonaws.com/50b44393-1768-4b4d-8797-6f29296c07a4-96956a604c54950acc45.jpg",
    phoneNumber: "0357863600"
  },
  {
    key: "3",
    email: "nct@gmail.comádadsasdsdssdadsasdaddas",
    lastName: "Nguyen",
    firstName: "thăng",
    role: "user",
    avatar: "https://coursesbe.s3.ap-southeast-1.amazonaws.com/50b44393-1768-4b4d-8797-6f29296c07a4-96956a604c54950acc45.jpg",
    phoneNumber: "0357863600"
  },
  {
    key: "4",
    email: "nct@gmail.com",
    lastName: "Nguyen",
    firstName: "thăng",
    role: "user",
    avatar: null,
    phoneNumber: "0357863600"
  },
  {
    key: "5",
    email: "nct@gmail.com",
    lastName: "Nguyen",
    firstName: "thăng",
    role: "user",
    avatar: null,
    phoneNumber: "0357863600"
  },
  {
    key: "6",
    email: "nct@gmail.com",
    lastName: "Nguyen",
    firstName: "thăng",
    role: "user",
    avatar: null,
    phoneNumber: "0357863600"
  },
  {
    key: "7",
    email: "nct@gmail.com",
    lastName: "Nguyen",
    firstName: "thăng",
    role: "user",
    avatar: null,
    phoneNumber: "0357863600"
  },
  {
    key: "8",
    email: "nct@gmail.com",
    lastName: "Nguyen",
    firstName: "thăng",
    role: "user",
    avatar: null,
    phoneNumber: "0357863600"
  },
  {
    key: "9",
    email: "nct@gmail.com",
    lastName: "Nguyen",
    firstName: "thăng",
    role: "user",
    avatar: null,
    phoneNumber: "0357863600"
  },
  {
    key: "10",
    email: "nct@gmail.com",
    lastName: "Nguyen",
    firstName: "thăng",
    role: "user",
    avatar: null,
    phoneNumber: "0357863601"
  },
];



const AdminUserComponent: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [loadingSkeleton, setloadingSkeleton] = useState(false);
  const [data, setData] = useState(null)
  const searchInput = useRef<InputRef>(null);
  const [scrolltable, setscrolltable] = useState(false)
  const [scrolltableheight, setscrolltableheight] = useState(600)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userselect, setuserselect] = useState<any>(null);


  const handelshowview = (key: string)=>{
    for (var i = 0; i < data.length; i++) {
      if (data[i].key == key) {
         setuserselect(data[i])
        break;
      }
    }
    
  }
  useEffect(()=>{
    if(userselect){
      setIsModalOpen(true)
    }
  },[userselect])

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<UserType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>

          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>

        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },

  });

  const columns: ColumnsType<UserType> = [
    {
      title: 'Avatar',
      dataIndex: "avatar",
      key: 'avatar',
      width: '5%',
      render: text => <>{
        loadingSkeleton ?
          <SkeletonAvatar active size='small' />
          :
          <>{text ? <Avatar src={text}></Avatar> :
            <Avatar src='/src/assets/images/default-avatar-profile.png'></Avatar>
          }</>
      }</>,

    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '10%',
      ellipsis: true,
      render: text => <>{
        loadingSkeleton ?
          <SkeletonButton active size='small' className='!w-[80%]' />
          :
          <>{text}</>
      }</>,
      ...getColumnSearchProps('email'),
      sorter: (a, b) => a.email.length - b.email.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
      width: '7%',
      render: text => <>{
        loadingSkeleton ?
          <SkeletonButton active size='small' className='!w-[80%]' />
          :
          <>{text}</>
      }</>,
      ...getColumnSearchProps('firstName'),
      sorter: (a, b) => a.firstName.length - b.firstName.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
      width: '7%',
      render: text => <>{
        loadingSkeleton ?
          <SkeletonButton active size='small' className='!w-[80%]' />
          :
          <>{text}</>
      }</>,
      ...getColumnSearchProps('lastName'),
      sorter: (a, b) => a.lastName.length - b.lastName.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      width: '10%',
      render: text => <>{
        loadingSkeleton ?
          <SkeletonButton active size='small' className='!w-[80%]' />
          :
          <>{text}</>
      }</>,
      ...getColumnSearchProps('phoneNumber'),
      sorter: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: '5%',
      render: text => <>{
        loadingSkeleton ?
          <SkeletonButton active size='small' className='!w-[80%]' />
          :
          <>{text}</>
      }</>,
      ...getColumnSearchProps('role'),
      sorter: (a, b) => a.role.length - b.role.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Action',
      dataIndex: 'key',
      key: 'Action',
      width: '8%',
      render: (text) => <>
        {loadingSkeleton ?
          <SkeletonButton active size='small' className='!w-[80%]' />
          :
          <>
            <Button size="small" onClick={()=>handelshowview(text)} className='text-blue-600 border-blue-600'><BsFillEyeFill /></Button>
            <Button size="small" className='text-yellow-600 border-yellow-600 mx-2'><BiEdit /></Button>
            <Button size="small" className='text-red-600 border-red-600'><MdDeleteForever /></Button>
          </>
        }
      </>
    },

  ];

  useEffect(() => {
    setData(datave)
    setloadingSkeleton(true)
    setTimeout(() => {

      setloadingSkeleton(false)
    }, 1000)
    
  }, [])
  const tableRef = useRef(null);

  useEffect(() => {
    
    const tableBody = tableRef.current.querySelector('.ant-table-body');
    tableBody.addEventListener('scroll', handleScroll);
    
    return () => {
      tableBody.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const handleScroll = () => {
    const tableBody = tableRef.current.querySelector('.ant-table-body');
    console.log(tableBody.clientHeight, tableBody.scrollTop, tableBody.scrollHeight)
    if (tableBody.scrollTop >= (tableBody.scrollHeight - tableBody.clientHeight)) {
      setscrolltableheight(tableRef.current.querySelector('.ant-table-body').scrollHeight)
      console.log('Scrolled to bottom');
      setscrolltable(true)
      setTimeout(()=>{
        setData([
          {
            key: "1",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "admin",
            avatar: "https://coursesbe.s3.ap-southeast-1.amazonaws.com/50b44393-1768-4b4d-8797-6f29296c07a4-96956a604c54950acc45.jpg",
            phoneNumber: "0357863600"
          },
          {
            key: "2",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "admin",
            avatar: "https://coursesbe.s3.ap-southeast-1.amazonaws.com/50b44393-1768-4b4d-8797-6f29296c07a4-96956a604c54950acc45.jpg",
            phoneNumber: "0357863600"
          },
          {
            key: "3",
            email: "nct@gmail.comádadsasdsdssdadsasdaddas",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: "https://coursesbe.s3.ap-southeast-1.amazonaws.com/50b44393-1768-4b4d-8797-6f29296c07a4-96956a604c54950acc45.jpg",
            phoneNumber: "0357863600"
          },
          {
            key: "4",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
          {
            key: "5",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
          {
            key: "6",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
          {
            key: "7",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
          {
            key: "8",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
          {
            key: "9",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
          {
            key: "10",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
          {
            key: "17",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
          {
            key: "18",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
          {
            key: "19",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
          {
            key: "110",
            email: "nct@gmail.com",
            lastName: "Nguyen",
            firstName: "thăng",
            role: "user",
            avatar: null,
            phoneNumber: "0357863600"
          },
        ])
        setscrolltable(false)
      },1500)
      
      
    }else{
      setscrolltable(false)
    }
  };


  return <>
  
  <Table columns={columns}
    scroll={{y: "70vh"}}
    ref={tableRef}
    dataSource={data} pagination={false} className='shadow-md'
    footer={() => (<>
    {scrolltable? 
  <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  :null  
  }
     </>)}
    >
    </Table>

    {/* modal view */}
    {
      userselect?
      <Modal title={""} open={isModalOpen} footer={false} 
      onCancel={()=>{setIsModalOpen(false)
        setuserselect(null)
      }} >
          <AdminUserShowComponent user={userselect} />
        </Modal>
      :null
    }
   
    
    </>;
};

export default AdminUserComponent;