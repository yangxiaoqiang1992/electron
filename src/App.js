import React, { Component, Fragment } from 'react';
import Header from '@components/common/header'
import '@static/css/pages/page.css'
import RouterMap from '@router/router'
class App extends Component {
  render() {
    return (
      <Fragment>
         <Header />
         <RouterMap />
      </Fragment>
    );
  }
}

export default App;
