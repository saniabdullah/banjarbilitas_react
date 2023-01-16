import { useState } from 'react'
import { Login, Footer, Home, CariGawian, DetailGawian, Admin, Navbar, Signup, ProfilUser, AdminNew } from './containers'
import { TipDetail, TipDetail2, TipDetail3, TipDetail4, TipDetail5 } from './components'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss'

function App() {

  return (
    <>
    <Navbar />
    <div className="App">
      <Router>
      <div className="main-container">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/cari-gawian'>
            <CariGawian />
          </Route>
          <Route exact path='/detail-gawian/:id'>
            <DetailGawian />
          </Route>
          <Route exact path='/admin'>
            <Admin />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          {/* <Route exact path='/profil-user'>
            <ProfilUser />
          </Route> */}
          <Route exact path='/profil-user/:id'>
            <ProfilUser />
          </Route>
          <Route exact path='/tip-detail/1'>
            <TipDetail />
          </Route>
          <Route exact path='/tip-detail/2'>
            <TipDetail2 />
          </Route>
          <Route exact path='/tip-detail/3'>
            <TipDetail3 />
          </Route>
          <Route exact path='/tip-detail/4'>
            <TipDetail4 />
          </Route>
          <Route exact path='/tip-detail/5'>
            <TipDetail5 />
          </Route>
        </Switch>
      </div>
      </Router>
      <Footer />
    </div>
    </>
  )
}

export default App
