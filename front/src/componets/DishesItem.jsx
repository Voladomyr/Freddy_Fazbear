import React, { useState, useEffect } from "react";
import '../styles/DisheItem.css';
import Axios from "axios";

const DishesItem = ({ data }) => {
  const [ResData, setResData] = useState([]);
  const [ResId, setResId] = useState(data.restaurant);
  const userId = parseInt(localStorage.getItem('userId'), 10);
  console.log(userId);

  const addToCart = () => {
    // Отримання ідентифікатора користувача та ідентифікатора страви і відправка запиту на бекенд
    Axios
      .post(`http://127.0.0.1:8000/add_dish_to_cart/`, {
        customer_id: userId,
        dish_id: data.id,
      })
      .then((response) => {
        // Додавання страви до кошика можливо також оновити стан на клієнті
        // setSelectedDishes([...selectedDishes, data]);
      })
      .catch((error) => {
        console.error("Помилка запиту до API", error);
      });
  };

  useEffect(() => {
    Axios
      .get(`http://127.0.0.1:8000/api/Restaurants/${ResId}/`)
      .then((response) => {
        setResData(response.data);
      })
      .catch((error) => {
        console.error("Помилка запиту до API", error);
      });
  }, [ResId]);

  return (
    <div className="dish-item">
      <img className="MainDishesImg" src={data.photo} alt="none" />
      <div className="Price">${data.cost}</div>
      <div className="NameDish">{data.name}</div>
      <div className="restaurantName">{ResData.name}</div>
      <button onClick={addToCart} className="group-29">
        <div className="rectangle-24"></div>
        <div className="add">Add</div>
      </button>
    </div>
  );
};

export default DishesItem;
