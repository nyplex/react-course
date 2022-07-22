import React, { useCallback, useEffect } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
    const [meals, setMeals] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchMealsHandler = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                "https://react-http-1f93b-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
            );
            const data = await response.json();
            const loadedMeals = [];
            for (const key in data) {
                loadedMeals.push({
                    ...data[key],
                    id: key
                });
            }
            setMeals(loadedMeals);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchMealsHandler();
    }, [fetchMealsHandler]);

    let content = <p>Found no meals</p>;

    if (meals.length > 0) {
        content = meals.map((meal) => (
            <MealItem
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
                id={meal.id}
            />
        ));
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (loading) {
        content = <p>Loading...</p>;
    }
    
    

    return (
        <section className={classes.meals}>
            <Card>{content}</Card>
        </section>
    );
};

export default AvailableMeals;
