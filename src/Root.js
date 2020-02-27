import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './Redux/store';
import { Provider } from 'react-redux';
import App from './App';
import SearchResult from './Components/SearchResult'
import About from './Components/About'
import ContactUs from './Components/ContactUs'


function Root(){
  return(
    <Provider store={store}>
        <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route  path="/search" component={SearchResult} />
                    <Route  path="/about" component={About} />
                    <Route  path="/contactus" component={ContactUs} />
                </Switch>
        </Router>
    </Provider>
  )
}

export default Root;
