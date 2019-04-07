import React, { Component } from 'react'
import AsideMenu from '@components/common/menu'
import {menu} from '@src/data/data'

export default class Wdwp extends Component {
  render() {
    return (
      <main className="page-main">
        <AsideMenu menu={menu}/>
        <div className="page-inner">
             我的网盘
        </div>
      </main>
    )
  }
}
