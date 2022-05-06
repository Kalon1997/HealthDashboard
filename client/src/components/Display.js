import React from 'react'
import classes from './Display.module.css'
import Calendar from './miniboards/Calendar';
import Water from './miniboards/Water';
const Display = () => {
    return (
        <div className={classes.display}>
            <div className={classes.slab1}>
            <Calendar  />
            <Water  />
            </div>
            <div className={classes.slab2}>
            <Calendar  />
            <Water  />
            </div>
        </div>
    )
}
export default Display;