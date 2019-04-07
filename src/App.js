import React, { Component, Fragment } from 'react';
import Header from '@components/common/header'
import AsideMenu from '@components/common/menu'
import {menu} from '@src/data/data'
class App extends Component {
  render() {
    return (
      <Fragment>
         <Header  />
         <AsideMenu menu={menu}/>
      </Fragment>
    );
  }
}

export default App;
