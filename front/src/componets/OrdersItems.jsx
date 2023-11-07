import React from "react";
import '../styles/OrdersItems.css'

const OrdersItem = () => {
    return (
        <div className="container">
            <div className="DishOrder">
                <img className="DishImg" ></img>    
                <div className="DishName">Burger Mozza XL</div>
                <div className="DishPrice">39$</div>
                <div className="listCount"></div>
                <button className="DeleteFromOrder"><svg
  class="vector"
  width="25"
  height="25"
  viewBox="0 0 25 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.2386 12.5L24.3459 5.39276C25.218 4.5206 25.218 3.10653 24.3459 2.23366L22.7663 0.654119C21.8942 -0.21804 20.4801 -0.21804 19.6072 0.654119L12.5 7.76136L5.39276 0.654119C4.5206 -0.21804 3.10653 -0.21804 2.23366 0.654119L0.654119 2.23366C-0.21804 3.10582 -0.21804 4.51989 0.654119 5.39276L7.76136 12.5L0.654119 19.6072C-0.21804 20.4794 -0.21804 21.8935 0.654119 22.7663L2.23366 24.3459C3.10582 25.218 4.5206 25.218 5.39276 24.3459L12.5 17.2386L19.6072 24.3459C20.4794 25.218 21.8942 25.218 22.7663 24.3459L24.3459 22.7663C25.218 21.8942 25.218 20.4801 24.3459 19.6072L17.2386 12.5Z"
    fill="#797575"
  />
</svg></button>
            </div>
            <div className="RestaurantOrder">

            </div>
        </div>
    );
}

export default OrdersItem;