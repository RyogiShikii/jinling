import React from 'react';
import {Row, Col} from 'antd';

class MainFooter extends React.Component{
    render(){
        return(
            <Row type="flex" justify="center" className='footer'>
                <Col xs={18} sm={10} md={10} lg={10}>
                    <h5>&copy; Jinling Palace All Rights Reserved.</h5>
                </Col>
            </Row>
        )
    }
}

export default MainFooter;