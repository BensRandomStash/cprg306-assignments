import Item from "./item";
import { useState } from "react";

export default function ItemList ({ items, onItemSelect }) {

    let itemArray = items.map( (items) => ({...items}));

    const [sortBY, setSortBy] = useState("name");

    if(sortBY = "name"){
        setSortBy = name;
    }
    else if(sortBy = "category"){
        setSortBy = category;
    }
    
    return (
        <div>
            <button onClick={sortBY("name")}>Sort by name</button>
            <button onClick={SortBy("category")}>Sort by category</button>
            <Item onClick={onItemSelect} />
            <section>
                {itemArray.map((item) => ( <Item item = {item}/>))}
            </section>
        </div>
    );
}