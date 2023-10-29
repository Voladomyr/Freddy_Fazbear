import React from "react";
import Background from "./componets/Background";
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import SearchIcon from "./componets/UI/SearchLong/SearchIcon";
import SearchLongInput from "./componets/UI/SearchLong/SearchLongInput";
import UserInterface from "./componets/UserInterface";
import ListRestaurant from "./componets/ListRetaurant";
import DishesItem from "./componets/DishesItem";
import RestaurtantItem from "./componets/RestaurantItem";
import ProfileIcon from "./componets/ProfileIcon";
import Message from "./componets/Message";

function All (){
    return(
        <div>
            <Background/>
            <Header/>
            <Navigation/>
            <SearchIcon>
                <SearchLongInput/>
            </SearchIcon>
            <UserInterface/>
            <ListRestaurant>
                <DishesItem/>
                <RestaurtantItem/>
                <DishesItem/>
                <DishesItem/>
                <RestaurtantItem/>
                <DishesItem/>
                <DishesItem/>
                <RestaurtantItem/>
                <DishesItem/>
            </ListRestaurant>
            <ProfileIcon/>
            <Message>
                Обирай з розумом або животом!
            </Message>
        </div>
    )
}

export default All;