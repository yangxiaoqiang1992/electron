import React, { Component } from 'react'
import AsideMenu from '@components/common/menu'
import ToolsHeader from '@components/common/toolsHeader'
import {menu} from '@src/data/data'

export default class Wdwp extends Component {
  render() {
    return (
      <main className="page-main">
        <AsideMenu menu={menu}/>
        <div className="page-inner">
            <ToolsHeader />
        </div>
      </main>
    )
  }
}
