import React from 'react';
import logo from './hydrant-logo.png';

class SearchView extends React.Component {
   constructor() {
      super();
    //   this.state = {}
    console.log('Entered Search view')
   }

   render() {
      return (
         <div>
            <img src={logo} className="App-logo" alt="logo" />
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
export default SearchView;
