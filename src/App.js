import React from "react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";
import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import store from './redux/store'
import {setPizzas, setPizzas as setPizzasAction} from "./redux/actions/pizzas";
import {connect} from "react-redux";


// function App() {
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas)
//         })
//     },[])
//
//   return (
//       <div className="wrapper">
//         <Header/>
//         <div className="content">
//            <Route path='/' render={() => <Home items={pizzas}/>} exact/>
//            <Route path='/cart' component={Cart} exact/>
//         </div>
//       </div>
//   );
// }
class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.setPizzas(data.pizzas)
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path='/' render={() => <Home items={this.props.items}/>} exact/>
                    <Route path='/cart' component={Cart} exact/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.pizzas.items
    }
}
const mapDispartchToProps = {
    setPizzas
}
export default connect(mapStateToProps, mapDispartchToProps)(App)

