import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TeamMap from './components/TeamMap'
import TeamPage from './components/TeamPage'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TeamMap} />
        <Route exact path="/singleTeam" component={TeamPage}/>>

        <Route render={
          () => <h1><span>404</span> Not Found</h1>
        } />
      </Switch>
    </div>
  );
}

export default App;
