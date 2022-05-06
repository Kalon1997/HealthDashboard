import React from 'react'
import classes from './MainBoard.module.css'
import Display from './Display';
import Navbar from './Navbar';
const MainBoard = () => {
    return (
        <div className={classes.board}>
            <Navbar />
            <Display />
        </div>
    )
}
export default MainBoard;