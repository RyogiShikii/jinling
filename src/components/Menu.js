import React from 'react';
import {Layout, Row, Col} from 'antd';
import ImageGallery from 'react-image-gallery';

class Menu extends React.Component{
    render(){
        const {Content} = Layout;
        const images = [
            {
              original: 'http://www.mycashmart.com/static/media/1.jpg',
            },
            {
              original: 'http://www.mycashmart.com/static/media/2.jpg',
            },
            {
              original: 'http://www.mycashmart.com/static/media/3.jpg',
            },
            {
              original: 'http://www.mycashmart.com/static/media/4.jpg',
            },
            {
              original: 'http://www.mycashmart.com/static/media/5.jpg',
            },
            {
              original: 'http://www.mycashmart.com/static/media/6.jpg',
            },
            {
              original: 'http://www.mycashmart.com/static/media/7.jpg',
            },
            {
              original: 'http://www.mycashmart.com/static/media/8.jpg',
            }
          ]
        return(
            <Content>
                <Row type='flex' justify='center'>
                    <Col xs={24} sm={24} md={8} lg={18}>
                        <ImageGallery
                            items={images}
                            showThumbnails={false}
                        />
                    </Col>
                </Row>
            </Content>
        )
    }
}

export default Menu;