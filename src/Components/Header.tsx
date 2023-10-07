import {Anchor} from "antd";
import { DribbbleSquareOutlined,
    UserOutlined ,
    HomeOutlined
} from "@ant-design/icons"

import styled from "styled-components"
const StyledHomeOutlined = styled(HomeOutlined)`
 padding : 2px;
 font-size:50px;
`;
const StyledAnchor = styled(Anchor)`
  display: block;
  width: 100%;
  background-color: burlywood;
`
const Header : React.FC = () =>{
    return <div>
        <StyledAnchor
            direction="horizontal"
            items={[
                {
                    key: 'part-1',
                    href: '#part-1',
                    title: <StyledHomeOutlined />,
                },
                
            ]} />
    </div>;
}

export default Header;