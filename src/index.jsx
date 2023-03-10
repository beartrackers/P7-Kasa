import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import About from './pages/About'
import FicheLogement from './pages/fiche-logement'
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fiche-logement/:id">
          <FicheLogement />
        </Route>
        <Route path="/a-propos">
          <About />
        </Route>
        <Route name="404">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
