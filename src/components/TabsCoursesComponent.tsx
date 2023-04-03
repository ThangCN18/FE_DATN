import React from "react"
import ItemCourseComponent from "./ItemCourseComponent"
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import TabItemCourseComponent from "./TabItemCourseComponent";


const onChange = (key: string) => {
    console.log(key);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: <p>Front-End</p>,
      children: <TabItemCourseComponent/>,
    },
    {
      key: '2',
      label: `Back-End`,
      children: <ItemCourseComponent/>,
    },
    {
      key: '3',
      label: `FullStack`,
      children: `Content of Tab Pane 3`,
    },
    {
        key: '4',
        label: `Tester`,
        children: `Content of Tab Pane 3`,
      },
      {
        key: '5',
        label: `Mobile`,
        children: `Content of Tab Pane 3`,
      },
  ];

const TabsCoursesComponent: React.FC = ()=>{
    return(
        <div className="max-w-[1400px] mx-auto text-center rounded-3xl px-[5%] py-[2%] bg-[rgba(71,214,226,.1)] tapscoursescomponemt">
        <Tabs  defaultActiveKey="1" animated  items={items} onChange={onChange} />
        </div>
    )
}
export default TabsCoursesComponent