import {Anchor} from "antd";

const Header : React.FC = () =>{
    return <div style={{ padding: '20px' }}>
        <Anchor
            direction="horizontal"
            items={[
                {
                    key: 'part-1',
                    href: '#part-1',
                    title: 'Part 1',
                },
                {
                    key: 'part-2',
                    href: '#part-2',
                    title: 'Part 2',
                },
                {
                    key: 'part-3',
                    href: '#part-3',
                    title: 'Part 3',
                },
            ]} />
    </div>;
}

export default Header;