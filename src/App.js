import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Nav from './components/Nav';
import Books from './containers/Books';
import CreateBook from './containers/CreateBook';

class App extends Component {
  

    state = {
      pathname: '',
    };
    // this.notifypathname = this.notifypathname.bind(this);


  notifypathname = (pathname) => {
    this.setState({
      pathname:pathname,
    });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Nav notifypathname={this.notifypathname}
        pathname={this.state.pathname} />
        <Switch>
          <Route path="/" exact component={() => <Books/>}></Route>
          <Route path="/create" exact component={() => <CreateBook/>}></Route>
          <Route 
          path="/edit/:id" 
          exact 
          book={this.state.book} 
          component={(props) => <CreateBook {...props}/>}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
