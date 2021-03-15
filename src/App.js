
import React from "react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";
import {useEffect} from "react";
import {useState} from "react";


function App() {
    const [pizzas,setPizzas] = useState([])
    useEffect(() => {
    fetch('http://localhost:3000/db.json')
        .then((resp) => resp.json())
        .then( (json) => {
        setPizzas(json.pizzas)
    })
    },[])

  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
           <Route path='/' render={() => <Home items={pizzas}/>} exact/>
           <Route path='/cart' component={Cart} exact/>
        </div>
      </div>
  );
}

export default App;
