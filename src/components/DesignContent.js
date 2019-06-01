import React from 'react';
import {Layout, Row, Col} from 'antd';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'http://www.mycashmart.com/static/media/d1.jpg', width: 3, height: 4 },
  { src: 'http://www.mycashmart.com/static/media/design1.jpg', width: 4, height: 3 },
  { src: 'http://www.mycashmart.com/static/media/d2.jpg', width: 4, height: 3 },
  { src: 'http://www.mycashmart.com/static/media/design2.jpg', width: 4, height: 3 },
  { src: 'http://www.mycashmart.com/static/media/d3.jpg', width: 3, height: 4 },
  { src: 'http://www.mycashmart.com/static/media/d4.jpg', width: 3, height: 4 },
  { src: 'http://www.mycashmart.com/static/media/d5.jpg', width: 3, height: 4 },
  { src: 'http://www.mycashmart.com/static/media/d6.jpg', width: 1, height: 1 },
  { src: 'http://www.mycashmart.com/static/media/design4.jpg', width: 4, height: 3 },
  { src: 'http://www.mycashmart.com/static/media/d7.jpg', width: 4, height: 3 },
  { src: 'http://www.mycashmart.com/static/media/d8.jpg', width: 1, height: 1 },
  { src: 'http://www.mycashmart.com/static/media/d10.jpg', width: 5, height: 2 },
  { src: 'http://www.mycashmart.com/static/media/design5.jpg', width: 4, height: 3 },
  { src: 'http://www.mycashmart.com/static/media/design6.jpg', width: 4, height: 3 },
  { src: 'http://www.mycashmart.com/static/media/d9.jpg', width: 5, height: 2 },
  { src: 'http://www.mycashmart.com/static/media/design7.jpg', width: 2, height: 1 },
];


class DesignContent extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
      const {Content} = Layout;
    return (
      <Content>
        <Row type='flex' justify='center'>
            <Col xs={24} sm={24} md={8} lg={22}>
                <Gallery photos={photos} onClick={this.openLightbox} direction={'column'} />
                <Lightbox 
                    images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </Col>
        </Row>
      </Content>
    )
  }
}

export default DesignContent;
