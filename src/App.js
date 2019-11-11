import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchView from './Components/Search/SearchView';
import HydrantViewer from './Components/Hydrants/HydrantViewer';
import Homepage from './Components/Home/Homepage';
import UserRegistration from './Components/Register/UserRegistration';
import CreateHydrantForm from './Components/Hydrants/HydrantEditor';
import HydrantNavbar from './Components/Home/HydrantNavbar';

import './css/App.css';

function App() {
  return (
<div className="App">
  {/* This NavBar serves as both the header and the menu for the app */}
    {/* BrowserRouter is used for more optimal navigation in-app.
    Refreshes are not performed when switching pages under the router.  */}
    <BrowserRouter> 
      <HydrantNavbar/>
      <div className="App-body">
        <Switch>
          <Route exact path="/hydrant/:id(\d+)" component={HydrantViewer} />
          <Route exact path="/search" component={SearchView} />
          <Route exact path="/register" component={UserRegistration} />
          <Route exact path="/create" component={CreateHydrantForm} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>

    </BrowserRouter>
  <div className="App-footer">
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  </div>
</div>
  );
}

export default App;