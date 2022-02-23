
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodData, setFoodData] = useState(foods);

  const addNewFoodItem = newFoodItem => {
      const updatedFoodData = [...foodData, newFoodItem];
      const updatedFoodList = [...foodList, newFoodItem];
      
      setFoodData(updatedFoodData);
      setFoodList(updatedFoodList);
  };

  const filterFoods = (searchTerm) => {
    let filteredFoodItems;

    if (searchTerm === '') {
        filteredFoodItems = foodData;
    } else {
        filteredFoodItems = foodData.filter(food => {
          return food.name.toLowerCase() === searchTerm.toLowerCase();
        });
    }
      setFoodList(filteredFoodItems);
  };

    const deleteFoodItem = (itemForDeletion) => {
        const newFoodList = foodData.filter(food => {
          return food.name !== itemForDeletion;
        })
        
        setFoodData(newFoodList);
        setFoodList(newFoodList);
    };

  return (
    <div className="App">
    <h2>Food List</h2>
    <AddFoodForm addNewFoodItem={addNewFoodItem}/>
    <br />
    <Search filterFoods={filterFoods}/>
    {foodList.map((foodItem) => {
      return(
        <FoodBox key={foodItem.name} 
        name={foodItem.name} image={foodItem.image} 
        calories={foodItem.calories} servings={foodItem.servings}
        deleteFoodItem={deleteFoodItem}  
        />
        )
    })}
      

    </div>
  );
}

export default App;
