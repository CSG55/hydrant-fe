import React from 'react';
import {Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../common/hydrant-logo.png';
import FlexContainer from '../../common/FlexContainer';
class Homepage extends React.Component {
   render() {
      return (
         <React.Fragment>
            <img src={logo} className="App-logo" alt="red cartoon-like hydrant logo" />
            <FlexContainer>
               <Link to="/register">
                  <button className="btn btn-primary">Register for an Account</button>
               </Link>
               <Link to="/search">
                  <button className="btn btn-primary">Search for Hydrants</button>
               </Link>
               <Link to="/create">
                  <button className="btn btn-primary">Create a Hydrant</button>
               </Link>
            </FlexContainer>
      </React.Fragment>
      );
   }
}
export default Homepage;
