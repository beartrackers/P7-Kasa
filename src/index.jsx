import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
// import Footer from './components/Footer'
// import Error from './components/Error'
console.log(ReactDOM)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="fiche-logement/:id"></Route>
        <Route path="A-propos"></Route>
        <Route path="*">{/* <Error /> */}</Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
