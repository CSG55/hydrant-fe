import React from 'react';
import logo from '../../common/hydrant-logo.png';

class Homepage extends React.Component {
   render() {
      return (
         <div>
            <img src={logo} className="App-logo" alt="red cartoon-like hydrant logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a> 
      </div>
      );
   }
}
export default Homepage;
