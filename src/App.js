
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import {Route} from "react-router-dom";
import Cart from "./Components/Cart";


function App() {


  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
           <Route path='/' component={Home} exact/>
           <Route path='/cart' component={Cart} exact/>
        </div>
      </div>
  );
}

export default App;
