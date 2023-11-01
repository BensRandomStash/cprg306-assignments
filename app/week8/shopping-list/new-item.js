"use client";

import { useState } from "react";

export default function NewItem ({ onAddItem }) {
    const [name, setName] = useState("");

    const [quantity, setQuantity] = useState(1);

    const [category, setCategory] = useState("Produce");

    const handleChange = (event) => {
        setCategory(event.target.value.toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddItem("Added Item: " + name + ", quantity: " + quantity + ", category: " + category);
        setName = "";
        setQuantity = 1;
        setCategory = "Produce";
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input class="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type = "text" placeholder = "Item name" value = {name} onChange={setName} required/>
            <input class="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type = "number" min = "1" max = "99" value = {quantity} onChange={setQuantity} required/>
            <select class="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" value={category} onChange={setCategory}> 
            <option value = "Produce">Produce</option>
            <option value = "Dairy">Dairy</option>
            <option value = "Bakery">Bakery</option>
            <option value = "Meat">Meat</option>
            <option value = "Frozen Foods">Frozen Foods</option>
            <option value = "Canned Goods">Canned Goods</option>
            <option value = "Dry Goods">Dry Goods</option>
            <option value = "Beverages">Beverages</option>
            <option value = "Snacks">Snacks</option>
            <option value = "Household">Household</option>
            <option value = "Other">Other</option>
            </select>
            <button type="submit" value={handleSubmit}>+</button>
        </form>
    );
}