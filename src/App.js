import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchView from './SearchView';
import Homepage from './Homepage';
import UserRegistration from './UserRegistration';
function App() {
  return (
<div className="App">
  <Navbar className = "App-header" expand="lg" >
    <Navbar.Brand href="#home">Hydrant</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
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