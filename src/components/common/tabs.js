import React, { Component } from 'react'
import {Menu} from 'antd'

export default class Tabs extends Component {
  render() {
    return (
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        {
          this.props.tabs.map((item)=>{
            return <Menu.Item key={item.key}>{item.name}</Menu.Item>
          })
        }
      </Menu>
    )
  }
}
