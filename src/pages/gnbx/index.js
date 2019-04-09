import React, { Component } from 'react'
import {Icon} from 'antd'
import {gnbx} from '../../data/data'

export default class Gnbx extends Component {
  render() {
    return (
      <main className="page-main page-gnbx">
        <div className="page-title">
          <h2>功能宝箱</h2>
          <p>更多功能，带给您贴心的体验</p>
        </div>
        <div className="tool-list">
           <ul>
             {
               gnbx.map((item,index)=>{
                  return (
                        <li key={index}>
                          <div className={['icon',item.style].join(' ')}>
                             <Icon type={item.imgUrl}></Icon>
                          </div>
                          <p>{item.title}</p>
                          <div className='desc'>{item.desc}</div>
                        </li>
                      )
               })
             }
           </ul>
        </div>
      </main>
    )
  }
}
