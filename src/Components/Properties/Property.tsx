import React from "react";
import { property } from "../types";
import { Card, Space } from "antd";
import { DribbbleSquareOutlined,
         UserOutlined ,
         HomeOutlined
} from "@ant-design/icons"
import {styled} from "styled-components";

type Props = {
    prop : property,
}

// const Wrapper = styled div`
// display: flex;
// `

const Property : React.FC<Props> = (props) =>{
    const { prop } = props;
     return <>
        <Space direction="vertical" size={16}>
        <DribbbleSquareOutlined />
        
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <HomeOutlined />
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>

      <UserOutlined />
    </Card>
       </Space>
     </>
}

export default Property;