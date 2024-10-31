import { useState } from "react"
interface foodItemsProps {
  food:{
    id:number,
    itemName: string,
    description: string,
    foodImage: string,
    price: number,
    isFavorite : boolean,
  }
    }





function MenuItem({food} : foodItemsProps ){
    //create a state isFavorite that has the inital value of isFavorite that comes from the props
    const [isFavorite , setisFavorite] = useState(food.isFavorite);

    function handleClickFavorite() {
      setisFavorite(isFavorite === true ? false : true )
// food.isFavorite === true ? "❤️" : "🖤"
    }
    return (
      <section className="itemContainer">
        <figure className="imgContainer">
          {/* the image will receive the url src from the props */}
          <img src={food.foodImage} alt={food.itemName} />
          <figcaption>
            {/* the h2 will receive the item name from the props */}
            <h2>{food.itemName}</h2>
            {/* the p will receive the item description from the props */}
            <p>{food.description}</p>
          </figcaption>
        </figure>
        {/* the span will receive the item price from the props */}
        <aside>{food.price} EUR</aside>
  
        {/* the button to play with the isFavorite state:
                - onClick, will toggle the isFavorite state,
                - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
            */}
          
                
          <button type="button" onClick={handleClickFavorite}>{isFavorite === true ? "❤️" : "🖤"}</button>
                 
            
            
      </section>
    )
  }
  
  export default MenuItem;