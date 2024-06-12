import style from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={style.itemcontainer}>
      <img className={style.itemimage} src={food.image} alt="" />
      <div className={style.itemdata}>
        <p className={style.itempara}>{food.title}</p>
      </div>
      <div className={style.buttonconta}>
        <button onClick={() => setFoodId(food.id)} className={style.itemButton}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
