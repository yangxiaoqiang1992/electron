import React, { Component } from 'react'
import { Row, Col } from 'antd';
import '@static/css/header/header.css'
import Tabs from '@components/common/tabs'
import {tabs} from '@src/data/data'
export default class Header extends Component {
  render() {
    return (
      <div className="header frosted" id="header">
          <Row className='header-row'>
            <Col span={3} >
               
            </Col>
            <Col span={9} className="header-tabs">
               <Tabs tabs={tabs}/> 
            </Col>
            <Col span={12} className="tools-bar">

            </Col>
          </Row>
      </div>
    )
  }
}

