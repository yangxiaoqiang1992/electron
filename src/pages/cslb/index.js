import React, { Component } from 'react'
import AsideMenu from "@components/common/menu"
import {cslbMneu} from '@src/data/data'

export default class Cslb extends Component {
  render() {
    return (
      <main className="page-main">
        <AsideMenu menu={cslbMneu} page="cslb">
        </AsideMenu>
      </main>
    )
  }
}
