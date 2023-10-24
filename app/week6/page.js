import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";

export default function page() {

    const {items, setItem} = useState(itemData);

    const handleAddItem = (item) => {
        setItem([...items, item]);
    }

    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}