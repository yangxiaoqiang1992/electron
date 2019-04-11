import React, { Component } from 'react'
import {PageHeader,Icon} from 'antd'

export default class ToolsHeader extends Component {
  render() {
    const extra  = this.props.extra && this.props.extra
    const title = this.props.title && this.props.title
    const routes = this.props.breadcrumb ? this.props.breadcrumb : []
    const backIcon = this.props.backIcon  && <Icon type="arrow-left"></Icon>
    return (
      <PageHeader 
        extra={extra}  
        title={title}  
        breadcrumb={{ routes }}  
        backIcon={backIcon} 
        className={['page-header',this.props.className].join(' ')}>
        {this.props.children}
      </PageHeader>
    )
  }
}
