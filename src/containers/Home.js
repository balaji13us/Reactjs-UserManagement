import React, { Component } from 'react';

import Users from '../components/User/Users';
import Header from '../containers/Header';
import Navigation from '../containers/Navigation';
import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import MainPanel from './MainPanel';

class Home extends Component {
  render() {
    return (
      <div >
        <Container>
          <Row>
            <Col>
              <Header></Header>
            </Col>
          </Row>
          <Row>
            <Col><MainPanel></MainPanel></Col>
          </Row>
        </Container>
        </div>
    );
  }
}

export default Home;
