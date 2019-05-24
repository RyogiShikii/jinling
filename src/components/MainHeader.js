import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Row, Col} from 'antd';

class MainHeader extends React.Component{
    render(){
        return(
            <Row className='MainHeader'>
                <Menu
                    mode='horizontal'
                >
                    <Menu.Item title='Home'>
                        <Link>Home</Link>
                    </Menu.Item>
                    <Menu.Item title='Menu'>
                        <Link>Menu</Link>
                    </Menu.Item>
                    <Menu.Item title='Design'>
                        <Link>Design</Link>
                    </Menu.Item>
                    <Menu.Item title='Contact'>
                        <Link>Contact</Link>
                    </Menu.Item>
                </Menu>
            </Row>
        )
    }
}

export default MainHeader;