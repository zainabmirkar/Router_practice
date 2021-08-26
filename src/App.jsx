import React from 'react';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import User from './User';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div>
        <Menu />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/user/:name" component={User}/>
        </Switch>
        </div>
    </BrowserRouter>
  );
}

const Home = () =>{
  return(
      <div className="home">
   <h1 className="home_h1" >This is Home section</h1>
   </div>
  )
}

export default App;
