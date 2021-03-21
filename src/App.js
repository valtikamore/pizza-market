import React from "react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";
import {useEffect} from "react";
import axios from "axios";
import {fetchPizzas, setPizzas} from "./redux/actions/pizzas";
import {useDispatch} from "react-redux";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' component={Home} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    )
}
export default App

