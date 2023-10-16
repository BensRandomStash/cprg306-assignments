import Item from "./item";
import { useState } from "react";
import Items from "./items.json";

export default function ItemList () {

    let itemArray = Items.map( (item) => ({...item}));

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
            <section>
                {itemArray.map((item) => ( <Item item = {item}/>))}
            </section>
        </div>
    );
}