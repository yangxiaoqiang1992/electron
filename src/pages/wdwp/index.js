import React, { Component } from 'react'
import { Input,Icon } from 'antd'
import AsideMenu from '@components/common/menu'
import ToolsHeader from '@components/common/toolsHeader'
import {menu,tools} from '@src/data/data'
import Tools from '@components/common/Tools'


export default class Wdwp extends Component {
  constructor(props){
     super(props)
     this.state={
      listStyle:'cell'
     }
  }
  changeIcon(){
     let style = this.state.listStyle
     if(style === 'cell'){
      style = 'list' 
     }else{
      style = 'cell' 
     }
     this.setState({
       listStyle:style
     })
  }
  render() {
    const routes =[
      {
        path:'/', 
        breadcrumbName:'首页'
      },
      {
        path:'/wdwp', 
        breadcrumbName:'我的网盘',
      }
    ]
    return (
      <main className="page-main">
        <AsideMenu menu={menu} />
        <div className="page-inner">
            <ToolsHeader extra={<Tools tools={tools}  />}>
              <div className="list-icon" onClick={()=>this.changeIcon()}>
                 {this.state.listStyle === 'cell' ? <Icon type="bars"></Icon> : <Icon type="appstore"></Icon>}
              </div>  
            </ToolsHeader>
            <ToolsHeader breadcrumb={ routes }  backIcon={true}  className="page-header-bread">
               <Input.Search />
            </ToolsHeader>
        </div>
      </main>
    )
  }
}
