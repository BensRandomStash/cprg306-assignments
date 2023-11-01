import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function page() {

    const {items, setItem} = useState(itemData);
    const selectedItemName = useState(null);
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleAddItem = (item) => {
        setItem([...items, item]);
    }

    const handleItemSelect = (name) => {
        selectedItemName([...itemData.name, name]);
    }

    return (
        <main>
            <h1>Shopping List</h1>
            <section>
                { user ? (
                    <p>Welcome, {user.displayName}. You are signed in!</p>
                ) : (
                    <p>You must sign in to view this page.</p>
                )}
            </section>
            <div>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <MealIdeas />
        </main>
    )
}