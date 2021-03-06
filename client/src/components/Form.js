import React, {useState} from 'react'
import classes from './Form.module.css'
import EnterFoodItems from './EnterFoodItems'

const Form = () => {
    // const [mealType, setMealType] = useState();
    return (
        <div className={classes.form}>
            <form className={classes.formbox}>
                    <label>Food Items in the meal: Enter in grams </label>
                    <hr style={{width: "18rem"}}></hr>
                    
                    <label style={{marginTop: "1rem"}}>Meal type: Breakfast </label>
                    <EnterFoodItems />
                    <hr style={{width: "18rem"}}></hr>
                    
            </form>
            <p>Over here!</p>
  
        </div>
    )
}
export default Form;