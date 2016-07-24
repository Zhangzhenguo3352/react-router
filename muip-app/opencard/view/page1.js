import React, { Component } from 'react';
import {Router,Route,Link,browserHistory,IndexRoute} from 'react-router';
import Page2 from './page2.js';
import Index from './index.js';
import Page3 from './page3.js';

class Home extends Component {
  render(){
    return(<h1>{this.props.children}</h1>)
  }
}

const Page1 = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
        <IndexRoute component={Index}/>
        <Route path="page2" component={Page2}/>
        <Route path="page3" component={Page3}/>
    </Route>
  </Router>

export default Page1;
