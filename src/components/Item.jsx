import style from "./item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={style.maincontainer}>
        <div className={style.imagecontainer}>
          <img
            className={style.images}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt=""
          />
        </div>
        <div className={style.names}>
          <div>{item.name}</div>
          <div>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
