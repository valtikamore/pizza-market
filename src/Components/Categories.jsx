import React, {useState} from 'react';


function Categories ({items}) {

    const [activeItem,setActiveItem] = useState(null)
    const onSelectItem = (index) => {
        setActiveItem(index)
    }
    const categoriesMap = items.map((i,index) => <li
        className={activeItem === index ? 'active' : ''}
        key={i + index}
        onClick={()=>onSelectItem(index)}>{i}</li>)
    return (
    <div className="categories">
        <ul>
            <li
                className={activeItem === null ? 'active' : ''}
                onClick={() => setActiveItem(null)}>All</li>
            {items &&  categoriesMap}
        </ul>
    </div>
    )
}
export  default Categories


