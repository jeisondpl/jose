import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SignIn from './page/OnBoarding/SignIn'
import Home from './page/home'
import NotFound from './page/NotFound'
import {Propietario, Mascotas} from './page'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/createPropietario">
          <Propietario />
        </Route>
        <Route exact path="/createMascotas">
          <Mascotas />
        </Route>
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
