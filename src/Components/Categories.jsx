import React, {useState} from 'react';


const Categories = React.memo(function Categories ({activeCategory,items,onClIckCategory}) {

    const categoriesMap = items.map((i,index) => <li
        className={activeCategory === index ? 'active' : ''}
        key={i + index}
        onClick={()=>onClIckCategory(index)}>{i}</li>)
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClIckCategory(null)}>All</li>
                {items &&  categoriesMap}
            </ul>
        </div>
    )
})
export  default Categories


