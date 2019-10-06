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
  <HydrantNavbar/>
  <div className="App-body">
    <BrowserRouter>
      <Switch>
        <Route exact path="/hydrant/:id(\d+)" component={HydrantViewer} />
        <Route exact path="/search" component={SearchView} />
        <Route exact path="/register" component={UserRegistration} />
        <Route exact path="/create" component={CreateHydrantForm} />
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