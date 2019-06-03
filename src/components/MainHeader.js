import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Row, Col} from 'antd';

class MainHeader extends React.Component{
    render(){
        return(
            <Row type='flex' justify='center' className='MainHeader'>
                <Col xs={24} sm={24} md={8} lg={6}>
                    <Menu
                        mode='horizontal'
                    >
                        <Menu.Item title='Home'>
                            <Link to='home'>Home</Link>
                        </Menu.Item>
                        <Menu.Item title='Menu'>
                            <Link to='menu'>Menu</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={24} sm={24} md={8} lg={6} className='headLogo'>
                </Col>
                <Col xs={24} sm={24} md={8} lg={6}>
                    <Menu
                        mode='horizontal'
                    >
                        <Menu.Item title='Design'>
                            <Link to='design'>Design</Link>
                        </Menu.Item>
                        <Menu.Item title='Contact'>
                            <Link to='contact'>Contact</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        )
    }
}

export default MainHeader;