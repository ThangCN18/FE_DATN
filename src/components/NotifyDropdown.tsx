import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { Avatar, Card, Skeleton } from 'antd';
import { BsBell } from 'react-icons/bs'
import { FaRegTrashAlt } from "react-icons/fa"

const { Meta } = Card;


function NotifyDropdown() {

  const [loading, setLoading] = useState(false);


  const items: MenuProps['items'] = [
    {
      key: 'card1',
      label: (
        <Card style={{ width: 300 }} loading={loading} className="cart-item-menu my-1 max-sm:!w-[200px]">
          <Meta className="!py-0"
            avatar={<Avatar className="!rounded-full w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]" src="/https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" />}
            title={<h5 className="truncate w-[230px]  max-sm:w-[150px] max-sm:text-xs">Đăng ký tai khoản</h5>}
            description={<p className="truncate w-[230px] max-sm:w-[150px] max-sm:text-xs">Bạn đã đk tk thành công</p>}
          />
        </Card>
      ),
    },
    {
      key: 'card2',
      label: (
        <Card style={{ width: 300 }} loading={loading} className="cart-item-menu my-1 max-sm:!w-[200px]">
          <Meta className="!py-0"
            avatar={<Avatar className="!rounded-full w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]" src="/https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" />}
            title={<h5 className="truncate w-[230px]  max-sm:w-[150px] max-sm:text-xs">Đăng ký tai khoản</h5>}
            description={<p className="truncate w-[230px] max-sm:w-[150px] max-sm:text-xs">Bạn đã đk tk thành công</p>}
          />
        </Card>
      ),
    },
    {
      key: 'card3',
      label: (
        <Card style={{ width: 300 }} loading={loading} className="cart-item-menu my-1 max-sm:!w-[200px]">
          <Meta className="!py-0"
            avatar={<Avatar className="!rounded-full w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]" src="/https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" />}
            title={<h5 className="truncate w-[230px]  max-sm:w-[150px] max-sm:text-xs">Đăng ký tai khoản</h5>}
            description={<p className="truncate w-[230px] max-sm:w-[150px] max-sm:text-xs">Bạn đã đk tk thành công</p>}
          />
        </Card>
      ),
    },
    {
      key: 'card4',
      label: (
        <Card style={{ width: 300 }} loading={loading} className="cart-item-menu my-1 max-sm:!w-[200px]">
          <Meta className="!py-0"
            avatar={<Avatar className="!rounded-full w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]" src="/https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" />}
            title={<h5 className="truncate w-[230px]  max-sm:w-[150px] max-sm:text-xs">Đăng ký tai khoản</h5>}
            description={<p className="truncate w-[230px] max-sm:w-[150px] max-sm:text-xs">Bạn đã đk tk thành công</p>}
          />
        </Card>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" className="max-sm:hidden" arrow>
      <Button className="!p-0 border-none bg-none shadow-none rounded-full flex justify-center items-center">
        <div className="text-base"><BsBell /></div></Button>
    </Dropdown>
  );
}

export default NotifyDropdown;