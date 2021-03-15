import Categories from "../Components/Categories";
import SortPopup from "../Components/SortPopUp";
import React from "react";
import PizzaBlock from "../Components/PizzaBlock";

function Home ({items}) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={
                        [
                            'Meat',
                            'Vegetarian',
                            'Grill',
                            'Spicy',
                            'Closed',
                        ]}/>
                <SortPopup items={['Popularity','Price','Alphabet']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map(i =>
                    <PizzaBlock key={i.id} {...i} />
                    )}
            </div>
        </div>
    )
}
export default Home