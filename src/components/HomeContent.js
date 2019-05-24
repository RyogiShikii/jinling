import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Row, Col, Card, Button} from 'antd';

class HomeContent extends React.Component{
    render() {
        const {Content} = Layout;
        return (
            <Content>
                <Row type="flex" justify="space-around">
                    <Col xs={24} sm={24} md={24} lg={24} className='homeBackground'>
                        <h1>Welcome to Jinling Palace</h1>
                        <p>We offer the best</p>
                        <p><Button><Link>Explore Our Menu</Link></Button></p>
                    </Col>
                </Row>
                <Row type='flex' justify='center'>
                    <Col xs={24} sm={24} md={8} lg={11}>
                        <Card
                            className = 'serviceCard_1'
                        >
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={11}>
                        <Card
                            className='serviceCard_content'
                        >
                            <h3>Application</h3>
                            <p><Button><Link to='login'>Start Now</Link></Button></p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={11}>
                        <Card
                            className='serviceCard_content'
                        >
                            <h3>Find Us</h3>
                            <p><Button><Link to='Location'>Learn More</Link></Button></p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={11}>
                        <Card
                            className='serviceCard_2'
                        >
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={11}>
                        <Card
                            className = 'serviceCard_3'
                        >
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={11}>
                        <Card
                            className='serviceCard_content'
                        >
                            <h3>Application</h3>
                            <p><Button><Link to='login'>Start Now</Link></Button></p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={11}>
                        <Card
                            className='serviceCard_content'
                        >
                            <h3>Find Us</h3>
                            <p><Button><Link to='Location'>Learn More</Link></Button></p>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={11}>
                        <Card
                            className='serviceCard_4'
                        >
                        </Card>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default HomeContent;