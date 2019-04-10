import React, { Component } from 'react'
import {PageHeader} from 'antd'
import Tools from './Tools'
import {tools} from '../../data/data'

export default class ToolsHeader extends Component {
  render() {
    return (
      <PageHeader extra={<Tools tools={tools}  />} className="page-header">
         
      </PageHeader>
    )
  }
}
