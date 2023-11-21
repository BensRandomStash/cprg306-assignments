import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { getItems } from "../_services/shopping-list-service";
import { addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";

export default function page() {

    const handleAddItem = (item) => {
        setItem([...items, item]);
    }

    const handleItemSelect = (name) => {
        selectedItemName([...itemData.name, name]);
    }

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [itemList, setItemList] = useState();

    getItems(user.id, setItemList);

    return (
        <main>
            <h1>Shopping List</h1>
            <section>
                { user ? (
                    <div>
                        <p>Welcome, {user.displayName}. You are signed in!</p>
                        {
                            itemList.map( (item) => {
                                <div>
                                    <p>{item.id}</p>
                                    <p>{item.name}</p>
                                    <p>{item.category}</p>
                                    <p>{item.quantity}</p>
                                </div>
                            })
                        }
                    </div>
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