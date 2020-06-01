import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import Home from '../Home';
import Comments from '../Comments';
import User from '../User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/posts/:id/comments" component={Comments} />
          <Route path="/users/:id" component={User} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
