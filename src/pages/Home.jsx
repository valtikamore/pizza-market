import Categories from "../Components/Categories";
import SortPopup from "../Components/SortPopUp";
import React from "react";
import PizzaBlock from "../Components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import pizzas from "../redux/reducers/pizzas";

function Home () {
    const dispatch = useDispatch()
    const items = useSelector(({items}) => pizzas.items)
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={(name) => console.log(name)}
                    items={
                        [
                            'Meat',
                            'Vegetarian',
                            'Grill',
                            'Spicy',
                            'Closed',
                        ]}/>
                <SortPopup items={
                    [
                        {name:'Popularity',type:'popular'},
                        {name:'Price',type:'price'},
                        {name:'Alphabet',type:'alphabet'},
                        ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map(i =>
                    <PizzaBlock key={i.id} {...i} />
                    )}
            </div>
        </div>
    )
}
export default Home