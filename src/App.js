import React, { Component, Fragment } from 'react';
import Header from '@components/common/header'
import '@static/css/pages/page.css'
import {BrowserRouter} from 'react-router-dom'
import RouterMap from '@router/router'
class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <RouterMap />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
