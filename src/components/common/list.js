import React, { Component } from 'react'
import '@static/css/common/list.css'
import {Table,Icon} from 'antd'

export default class List extends Component {
  state={
    selectedRowKeys:[]
  }
  onSelectedRowKeysChange=(selectedRowKeys)=>{
    this.setState({
      selectedRowKeys:selectedRowKeys
    }) 
  }
  clickHandler(item,index,e){
    // const keysArr = this.state.selectedRowKeys
    // if(!keysArr.includes(item.key)){
    //   keysArr.push(item.key)
    // }else{
    //   keysArr = []
    // }
    // this.setState({
    //   selectedRowKeys:keysArr
    // })
  }
  render() {
    const rowSelection={
      selectedRowKeys:this.state.selectedRowKeys,
      onChange:this.onSelectedRowKeysChange
    }
    const action =[{
        key:'open-file',
        type:'file-text',
        name:'打开文件'
      },
      {
        key:'open-folder',
        type:'folder',
        name:'打开所在文件夹'
      },
      {
        key:'clear',
        type:'delete',
        name:'清除记录'
      }]
    const hoverAction = [
      {
        key:'share',
        type:'share-alt',
        name:'创建分享'
      },
      {
        key:'open-file',
        type:'download',
        name:'下载'
      },
      {
        key:'delete',
        type:'delete',
        name:'删除'
      }
    ]  
    const {type,dataSource,columns} = this.props
    columns.map((item)=>{
      if(item.key === 'name'){
        Object.assign(item,{
          render:(text,record)=>{
            let icon = record.type === 'folder'?'folder':'file-'+record.fileType 
            return (<span><Icon type={icon}  className="file-icon"></Icon>{text}
                      <span className="hover-action">
                          {
                              hoverAction.map((item)=>{
                                return <Icon type={item.type} key={item.key} className="operate-btn" />
                              })
                          }
                      </span>
                    </span>)
          }
        })
      }
      return item
    })
    if(this.props.showAction){
      //利用some判断是否已经存在操作列，防止重复添加
      let hasAction =columns.some((item)=>{
        return item.key === 'action' 
      })
      if(!hasAction){
        columns.push({
          title:'操作',
          key:'action',
          render:()=>{
            return action.map((item)=>{
              return <Icon type={item.type} key={item.key} className="operate-btn" />
            })
          }
        })
      }
    }
    return (
      <div className={['list',this.props.className].join(' ')} >
        {type && type === "list" && <Table dataSource={dataSource} columns={columns} rowSelection={rowSelection} />}
        {type && type === 'cell' && <ul className="cell-list">
          {
            dataSource.map((item,index)=>{
              // react事件参数，e必须为最后一个参数
              let icon = item.type === 'folder'?'folder':'file-'+item.fileType 
              return (
                     <li key={index}  onClick={(e)=>{this.clickHandler(item,index,e)}}>
                       <span className="cell-icon"><Icon type={icon} key={item.key} className="operate-btn" /></span>
                       <span className="cell-name">{item.name}</span>
                      </li>)
            })
          }
        </ul>}
      </div>
    )
  }
}
