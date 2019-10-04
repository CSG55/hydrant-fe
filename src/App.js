import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchView from './SearchView';
import Homepage from './Homepage';
import UserRegistration from './UserRegistration';
import HydrantNavbar from './HydrantNavbar';
function App() {
  return (
<div className="App">
  <HydrantNavbar/>
  <div className="App-body">
    <BrowserRouter>
      <Switch>
        <Route exact path="/hydrant/:id(\d+)" component={SearchView} />
        <Route exact path="/search" component={SearchView} />
        <Route exact path="/register" component={UserRegistration} />
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  </div>
  <div className="App-footer">

  </div>
</div>
  );
}

export default App;