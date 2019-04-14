import React, { Component } from 'react'
import {Button,Popover} from 'antd'
import AsideMenu from "@components/common/menu"
import {sideMenu} from "@src/data/data"

export default class Hyfx extends Component {
  render() {
    const content = ['创建群组','添加好友'].map((item,index)=>{
      return <div key={index}>{item}</div>
    })
    return (
      <main className="page-main">
        <AsideMenu menu={sideMenu} page="hyfx">
          <Popover content={content} title="" trigger="click" placement="rightTop">
             <Button shape="circle" icon="plus" className="add-btn"/>
          </Popover>   
        </AsideMenu>
        好友分享
      </main>
    )
  }
}
