import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../css/App.css';
import SearchView from '../Search/SearchView';
import HydrantViewer from '../Hydrants/HydrantViewer';
import Homepage from './Homepage';
import UserRegistration from '../Register/UserRegistration';
import CreateHydrantForm from '../Hydrants/HydrantEditor';
import HydrantNavbar from './HydrantNavbar';

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