import React, {useState} from 'react'
import classes from './SubForm.module.css'
import EnterFoodItems from './EnterFoodItems'

const Form = (props) => {
    // const [mealType, setMealType] = useState();
    return (
        <div className={classes.form}>
            <form className={classes.formbox}>
                    <label style={{marginTop: "1rem"}}>Meal type: Breakfast </label>
                    <EnterFoodItems />
                    <hr style={{width: "18rem"}}></hr>
            </form>
            <p>Over here!</p>
  
        </div>
    )
}
export default Form;