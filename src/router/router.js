import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Wdwp from '@src/pages/wdwp'
import Cslb from '@src/pages/cslb'
import Hyfx from '@src/pages/wdwp'
import Gnbx from '@src/pages/cslb'

export default ()=>(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Wdwp}></Route>
      <Route path="cslb"  component={Cslb}></Route>
      <Route path="hyfx"  component={Hyfx}></Route>
      <Route path="gnbx"  component={Gnbx}></Route>
    </Switch>  
  </BrowserRouter>
)
