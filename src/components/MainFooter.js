import React from 'react';
import {Row, Col} from 'antd';

class MainFooter extends React.Component{
    render(){
        return(
            <div>
                <Row type="flex" justify="center" className='footer'>
                    <Col xs={18} sm={10} md={10} lg={8} className='footerLogo'> 
                    </Col>
                </Row>
                <Row type="flex" justify="center" className='footer'>
                    <Col xs={18} sm={10} md={10} lg={22}>
                        <h5>&copy; Jinling Palace All Rights Reserved.</h5>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MainFooter;