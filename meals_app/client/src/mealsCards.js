import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const Body=()=>{

    const [foodItems, setItems] = useState([])


    useEffect(
        () => {
            axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then (response => {
                setItems(response.data.meals);
                console.log(response.data);
            })
            .catch(
                err => {
                    console.log(err);
                }
            )
        },[]
    )

    const itemList = foodItems.map (
        (item) => {
            return   <div className='foodItemCard'>
                <img src={item.strMealThumb } alt='Meal-img'></img>
                <h3> {item.strMeal}</h3>
                <div className='foodItemType'>
                    <p>{item.strIngredient1},{item.strIngredient2}</p>
                    <p>{item.strArea}</p>
                </div>
                
                <p id='foodCategory'>{item.strCategory}</p>
                
                 </div>
        }
    )

  return (
        <div className='mealsSection'>
            <h4>Meals made for you and delivered to your location</h4>
              <div className='all_Items'>
      
                        {itemList}
                     </div>
        </div>
    
  )
}

export default Body