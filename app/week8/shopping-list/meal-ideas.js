"use client";

import { useState } from "react";
import { useEffect } from "react";

export default function mealIdeas(){
    const [meals, setMeals] = useState(null);

    async function fetchMealIdeas(ingredient) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (!response.ok) {
                console.log(response.status);
            }
            const data = await response.json();
            setMeals(data);
        }
        catch (error) {
            console.error("Error: ", error);
        }
    }

    function loadMealIdeas() {
        meals = fetchMealIdeas(ingredient);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [])

    return (
        <div>
            <h1>Meal List</h1>
            <li loadMealIdeas={setMeals} />
        </div>
    )
}
