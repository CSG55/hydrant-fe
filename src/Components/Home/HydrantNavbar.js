import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
class HydrantNavbar extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props, props);
    }
    render() {
        return (
            <Navbar className = "App-header" expand="lg" >
                <Navbar.Brand href="/">Hydrant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* The NavLinks should ideally be within the router.
                    For these to work with react-router, we would need to encapsulate this header
                    with the Router, which is in the body */}
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                    <NavDropdown title="Sample Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="hydrant/1">Sample Hydrant</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default HydrantNavbar;