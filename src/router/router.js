import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Wdwp from '@src/pages/wdwp'
import Cslb from '@src/pages/cslb'
import Hyfx from '@src/pages/hyfx'
import Gnbx from '@src/pages/gnbx'

export default ()=>(
    <Switch>
      <Route path="/" exact component={Wdwp}>
      </Route>
      <Route path="/wdwp"  component={Wdwp}>
        {/* <Route path="/recent" conponent={recent}></Route> */}
      </Route>
      <Route path="/cslb"  component={Cslb}></Route>
      <Route path="/hyfx"  component={Hyfx}></Route>
      <Route path="/gnbx"  component={Gnbx}></Route>
    </Switch>  
)
