import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

class HydrantNavbar extends React.Component {
      render() {
        return (
            <Navbar className = "App-header" expand="lg" >
                <Navbar.Brand>
                    <Link to="/">Hydrant</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => this.props.history.push('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => this.props.history.push('register')}>Register</Nav.Link>
                    <Nav.Link onClick={() => this.props.history.push('search')}>Search</Nav.Link>
                    <Nav.Link onClick={() => this.props.history.push('create')}>Create</Nav.Link>
                    <NavDropdown title="Sample Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => this.props.history.push('hydrant/1')}>Sample Hydrant</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default withRouter(HydrantNavbar);