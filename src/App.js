import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainHeader from './components/MainHeader';
import HomeContent from './components/HomeContent';
import MainFooter from './components/MainFooter';
import './App.css';

class App extends React.Component {
  render() {
    const {Header, Footer} = Layout;
    return (
      <Router>
        <Layout>
          <MainHeader />
          <Route exact path='/' component={HomeContent}/>
          <Footer>
            <MainFooter />
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;