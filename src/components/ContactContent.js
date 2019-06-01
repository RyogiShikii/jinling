import React from 'react';
import {Layout, Row, Col} from 'antd';
import MapWrapper from './MapWrapper';
import {Marker, InfoWindow} from 'react-google-maps';


class ContactContent extends React.Component {
    render(){
        const {Content} = Layout;
        let map = (
            <MapWrapper
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `25em` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                defaultZoom={18}
                defaultCenter = {{lat: 49.284199, lng:-123.118286}}
            >
                <Marker position={{lat: 49.284199, lng:-123.118286}}>
                    <InfoWindow>
                        <div>
                            <h4>Jinling Palace</h4>
                        </div>
                    </InfoWindow>
                </Marker>
            </MapWrapper>
        );
        return(
            <Content>
                <Row type='flex' justify='center'>
                    <Col xs={24} sm={24} md={8} lg={22} className='contactCard'>
                        <h1>An Extraordinary Restaurant Comming Soon!</h1>
                        <h4>645 Howe Street, Vancouver, BC</h4>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={22}>
                        {map}
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default ContactContent;