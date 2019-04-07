import React, { Component } from 'react'
import { Row, Col } from 'antd';
import '@static/css/header/header.css'
export default class Header extends Component {
  render() {
    return (
      <div className="header frosted" id="header">
          <Row className='header-row'>
            <Col span={3} >
               
            </Col>
            <Col span={9}>

            </Col>
            <Col span={12} className="tools-bar">

            </Col>
          </Row>
      </div>
    )
  }
}

