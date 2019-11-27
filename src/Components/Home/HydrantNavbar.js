import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { withRouter, Link} from 'react-router-dom';

class HydrantNavbar extends React.Component {
    constructor(props){
        super(props);
        this.state = { navExpanded: false };

        this.setNavExpanded = this.setNavExpanded.bind(this);
        this.onNavlinkClick = this.onNavlinkClick.bind(this);
    }

    setNavExpanded(expanded) {
        this.setState({ navExpanded: expanded });
    };
    
    onNavlinkClick(url) {
        this.props.history.push(url);
        this.setState({ navExpanded: false });
    };
    
      render() {
        return (
            <Navbar onToggle={this.setNavExpanded} expanded={this.state.navExpanded} className = "App-header" expand="lg" >
                <Navbar.Brand>
                    <Link to="/">Hydrant</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => this.onNavlinkClick('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => this.onNavlinkClick('register')}>Register</Nav.Link>
                    <Nav.Link onClick={() => this.onNavlinkClick('search')}>Search</Nav.Link>
                    <Nav.Link onClick={() => this.onNavlinkClick('create')}>Create</Nav.Link>
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