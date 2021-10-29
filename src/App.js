import React, {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/imports/Header'
import Footer from './components/imports/Footer'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Matches from './components/pages/Matches'
import UpdateUser from './components/pages/UpdateUser'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

// import { checkAuthentication } from '.';

class App extends Component {

render () {
  return (
        <div className="App">
          <BrowserRouter>
            <Header />
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/matches' component={Matches}></Route>
                <Route path='/account' component={UpdateUser}></Route>
              </Switch>

              <img id="home" src="https://parade.com/wp-content/uploads/2019/04/pet-quotes.jpg" alt=""></img>

            <Footer />
          </BrowserRouter>
       
          
        </div>
    );
  }
}

export default App;
