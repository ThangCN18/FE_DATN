import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { Avatar, Card, Skeleton } from 'antd';
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FaRegTrashAlt } from "react-icons/fa"

const { Meta } = Card;


function CartDropdown() {

  const [loading, setLoading] = useState(false);


  const items: MenuProps['items'] = [
    {
      key: 'card1',
      label: (
        <Card style={{ width: 300 }} loading={loading} className="cart-item-menu my-1 max-sm:!w-[200px]">
          <Meta className="!py-0"
            avatar={<Avatar className="!rounded-sm w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]" src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" />}
            title={<h5 className="truncate w-[170px] max-sm:w-[100px] max-sm:text-xs">HTMLádasdasdasádasdsa</h5>}
            description={<p className="max-sm:text-xs">499.000 đ</p>}
          />
          <Button type="text"><div><FaRegTrashAlt /></div></Button>
        </Card>
      ),
    },
    {
      key: 'card2',
      label: (
        <Card style={{ width: 300 }} loading={loading} className="cart-item-menu my-1 max-sm:!w-[200px]">
          <Meta className="!py-0"
            avatar={<Avatar className="!rounded-sm w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]" src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" />}
            title={<h5 className="truncate w-[170px] max-sm:w-[100px] max-sm:text-xs">HTMLádasdasdasádasdsa</h5>}
            description={<p className="max-sm:text-xs">499.000 đ</p>}
          />
          <Button type="text"><div><FaRegTrashAlt /></div></Button>
        </Card>
      ),
    },
    {
      key: 'card3',
      label: (
        <div className="flex justify-between items-center my-2">
          <p className="max-sm:text-xs">Total: 998.000 đ</p>
          <Link to={"/cart?select=all"}><Button type="primary" className="!bg-blue-500 max-sm:text-xs">Buy now</Button></Link>
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" className="max-sm:hidden" arrow>
      <Button className="!p-0 border-none bg-none shadow-none rounded-full flex justify-center items-center">
        <div className="text-base"><MdOutlineShoppingCart /></div></Button>
    </Dropdown>
  );
}

export default CartDropdown;