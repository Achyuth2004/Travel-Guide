import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

import Users from './users/pages/Users' 
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UserPlaces  from './places/pages/UserPlaces'
import UpdatePlace from './places/pages/UpdatePlace'
import Auth from './users/pages/Auth'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
      <Route path='/users' exact>
         <Users />
      </Route>
      <Route path='/:userId/places' exact>
        <UserPlaces />
      </Route>
      <Route path='/places/new' exact>
         <NewPlace />
      </Route>
      <Route path='/places/:placeId'>
        <UpdatePlace />
      </Route>
      <Route path='/auth'>
        <Auth />
      </Route>
      <Redirect to='/' />
      </Switch>
      </main>
    </Router>
  )
}

export default App
