import React, { Component } from 'react'
import AsideMenu from "@components/common/menu"
import {cslbMenu} from '@src/data/data'
import ThreeComponent from '@components/three/three'

export default class Cslb extends Component {
  render() {
    return (
      <main className="page-main">
        <AsideMenu menu={cslbMenu} page="cslb">
        </AsideMenu>
        <div className="page-inner">
          <ThreeComponent />
        </div>
      </main>
    )
  }
}
