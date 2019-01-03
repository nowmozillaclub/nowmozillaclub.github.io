import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Events from './views/Events';
import Members from './views/Members';
import Gamescript from './views/Gamescript';
import Githack from './views/Githack';
import Android from './views/Android';
import Contact from './views/Contact';
import Privacy from './views/Privacy';
import NotFound from './views/NotFound';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/events" component={Events}/>
          <Route path="/members" component={Members}/>
          <Route path="/gamescript" component={Gamescript}/>
          <Route path="/githack" component={Githack}/>
          <Route path="/android" component={Android}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/privacy" component={Privacy}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Content;
