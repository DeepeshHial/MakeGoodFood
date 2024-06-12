import { useEffect, useState } from "react";
import style from "./fooddetails.module.css";
import Itemlist from "./Itemlist";

export default function FoodDetails({ foodIDs, apis }) {
  const URL = `https://api.spoonacular.com/recipes/${foodIDs}/information`;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [food, setFood] = useState({});
  const [isLoading, steLoading] = useState(true);

  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      steLoading(false);
    }
    fetchfood();
  }, [foodIDs]);
  return (
    <div className={style.foodcard}>
      <div className={style.innerfoodcard}>
        <h1>{food.title}</h1>
        <img className={style.imagescard} src={food.image} alt="" />
        <div className={style.details}>
          <span>
            <strong>⌛{food.readyInMinutes} min</strong>
          </span>
          <span>
            <strong>👪Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕vegetarian" : "🍗Non-vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🥒vegan" : ""}</strong>
          </span>
        </div>
        💲
        <span>
          <strong>{food.pricePerServing / 100} Per Serving</strong>
        </span>
      </div>
      <h2>Ingredients</h2>
      <Itemlist food={food} isLoading={isLoading} />
      <h2>Instructions</h2>
      <div className={style.instruction}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
