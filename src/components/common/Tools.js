import React, { Component,Fragment } from 'react'
import {Button, Dropdown,Menu} from 'antd'

export default class Tools extends Component {
  render() {
    return (
      <Fragment>
         {
           this.props.tools.map((item,index)=>{
              if(item.type === 'button'){
                 return  <Button  icon={item.icon} key={index}>{item.name}</Button>
              }else{
                const list = item.list
                const menu =(
                  <Menu>
                    {
                      list.map((item1,index1)=>{
                        return <Menu.Item key={index1}>{item1.name}</Menu.Item>
                      })
                    }
                  </Menu>  
                )
                return (
                  <Dropdown overlay={menu} key={index}>
                    <Button  icon={item.icon}>{item.name}</Button>
                  </Dropdown>
                )
              }
           })
         }
      </Fragment>
    )
  }
}
