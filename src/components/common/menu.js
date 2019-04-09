import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '@static/css/menu.css'
import { Menu, Icon } from 'antd'

export default class AsideMenu extends Component {
  state = {
    collapsed: false
  }
  constructor(props){
     super(props)
     this.renderMenu=this.renderMenu.bind(this)
  }
  renderMenu(data){
    let sub =null
    let children = data.children
    if(typeof(children)!='undefined' && children.length > 0){
        sub=children.map((item)=>{
          return this.renderMenu(item)
        })
       return <Menu.SubMenu  key={data.key} title={<span><Icon type={data.icon} /><span>{data.name}</span></span>}>{sub}</Menu.SubMenu> 
    }else{
      return <Menu.Item key={data.key}><Icon type={data.icon} /><span>{data.name}</span></Menu.Item>
    }
  }
  render() {
    return (
      <aside className={['aside-menu',this.props.page ? this.props.page + '_tab' :''].join(' ')}> 
        <Menu mode="inline" inlineCollapsed={this.state.collapsed}  defaultOpenKeys={['2']}>
          {
            this.props.menu.map((item)=>{ 
                if(typeof(item.children)!='undefined' && item.children.length > 0){
                  return this.renderMenu(item)
                }else{
                  return <Menu.Item key={item.key}><Icon type={item.icon} /><span>{item.name}</span></Menu.Item>
                }
            })
          }
        </Menu>
        {this.props.children}
      </aside> 
    )
  }
}
// Menu.propTypes={
//   menu:PropTypes.array.isRequired
// }
