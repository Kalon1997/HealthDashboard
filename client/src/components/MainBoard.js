import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import classes from './MainBoard.module.css'
import Form from './Form';
import Display from './Display';
import Navbar from './Navbar';
import Login from './Login';
const MainBoard = () => {
    const {showPortal} = useSelector((state) => (state.myweb))
    const {dash} = useSelector((state) => (state.myweb))
    return (
        <div className={classes.board}>
            { showPortal && <Login />}
            <Navbar />
            {dash === true ? <Display /> : <Form />}
        </div>
    )
}
export default MainBoard;