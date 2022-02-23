//AddFoodForm.js

import {useState} from 'react';
import { Input } from 'antd';


function AddFoodForm(props) {
const[name, setFoodName] = useState('');
const[image, setFoodImage] = useState('');
const[calories, setFoodCalories] = useState('');
const[servings, setFoodServings] = useState('');

const handleNameInput = (e) => setFoodName(e.target.value);
const handleImageInput = (e) => setFoodImage(e.target.value);
const handleCaloriesInput = (e) => setFoodCalories(e.target.value);
const handleServingsInput = (e) => setFoodServings(e.target.value);

const handleSubmit = (e) => {
    e.preventDefault(); //cancels default behavior of the form ie refreshing the page after submit
    const newFoodItem = {name, image, calories, servings};

    props.addNewFoodItem(newFoodItem);
};

return (
    <div className="AddFood">
        <h4>Add a food item</h4>

        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <Input value={name} type="text" onChange={handleNameInput} />
            <label>Image</label>
            <Input value={image} type="text" onChange={handleImageInput} />
            <label>Calories</label>
            <Input value={calories} type="number" onChange={handleCaloriesInput} />
            <label>Servings</label>
            <Input value={servings} type="number" onChange={handleServingsInput} />
            <br />
            <button type="submit">Create new food item</button>
        </form>
    </div>
)

}

export default AddFoodForm;