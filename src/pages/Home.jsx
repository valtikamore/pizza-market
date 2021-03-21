import Categories from "../Components/Categories";
import SortPopup from "../Components/SortPopUp";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import {LoadingPizzas} from "../Components/PizzaBlock/LoadingPizzas";


const categoriesItems = [
    'Meat',
    'Vegetarian',
    'Grill',
    'Spicy',
    'Closed',
]
const sortItems = [
    {name: 'Popularity', type: 'popular',order:'desc'},
    {name: 'Price', type: 'price',order:'desc'},
    {name: 'Alphabet', type: 'name',order:'asc'},
]

function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)
    useEffect(() => {
        dispatch(fetchPizzas(sortBy,category))
    }, [sortBy,category])
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    })
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    })
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClIckCategory={onSelectCategory}
                    items={categoriesItems}/>
                <SortPopup
                    items={sortItems}
                    activeSortType={sortBy.type}
                    onClickSortPopup={onSelectSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => <PizzaBlock key={obj.id} isLoaded={true} {...obj}/>)
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <LoadingPizzas key={index}/>)}
            </div>
        </div>
    )
}

export default Home