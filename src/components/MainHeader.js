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
                        <Link to='home'>Home</Link>
                    </Menu.Item>
                    <Menu.Item title='Menu'>
                        <Link to='menu'>Menu</Link>
                    </Menu.Item>
                    <Menu.Item title='Design'>
                        <Link to='design'>Design</Link>
                    </Menu.Item>
                    <Menu.Item title='Contact'>
                        <Link to='contact'>Contact</Link>
                    </Menu.Item>
                </Menu>
            </Row>
        )
    }
}

export default MainHeader;