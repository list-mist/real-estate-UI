import React from "react";
import { property, propertyCategories } from '../types';
import { Button, Card, Space} from "antd";

import {styled} from "styled-components";

type Props = {
    prop : property[],
}
const StyledDiv = styled.div`
    padding : 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Adjust as needed */
`;

const CardWrapper = styled.div`
    flex: 0 0 calc(25% - 16px); /* Adjust as needed */
    margin-bottom: 16px; /* Add margin between rows */
    box-sizing: border-box; /* Ensure padding and border don't affect width */
`;

const StyledSpace = styled(Space)`
    padding-top:80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const { Meta } = Card;
const Property : React.FC<Props> = (props) =>{
    const { prop } = props;
     return <>
     <StyledSpace>
    <Button type="primary"  danger >{propertyCategories.MOST_POPULAR}</Button>
    <Button type="primary"  danger>{propertyCategories.BY_PROPERTY_TYPE}</Button>
    <Button type="primary"  danger>{propertyCategories.BY_BUDGET}</Button>
    <Button type="primary"  danger>{propertyCategories.BY_BHK}</Button>
  </StyledSpace>
     <StyledDiv>
    {prop.map((item) => (
        <CardWrapper >
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={item.propertyImage}/>}
      >
        <Meta title={item.propertyName} description={item.propertyDescription} />
      </Card>
      </CardWrapper>
    ))}
  </StyledDiv>
     </>
}

export default Property;