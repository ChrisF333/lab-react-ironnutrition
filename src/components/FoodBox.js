//FoodBox.js

import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  //const {food} = props; don't need this right now as we are passing everything individually

    const handleDeleteFoodItem = (e) => {
        const itemForDeletion = props.name;

        props.deleteFoodItem(itemForDeletion);
    }

  return (
    <Col>
      <Card
        title={props.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.image} height={60} alt="food" />
        <p>Calories: {props.calories}</p>
        <p>Servings: {props.servings}</p>
        <p>
          <b>Total Calories: {props.calories*props.servings} </b> kcal
        </p>
        <Button value={props.name} type="primary" onClick={handleDeleteFoodItem}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;