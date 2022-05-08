import React from 'react'
import {useDispatch} from 'react-redux'
import { openPortalAction, showDashboardAction, showFormAction } from '../actions/user'
import classes from './Navbar.module.css'
const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <div className={classes.navbar}>
            <div className={classes.navs}>
                    <span onClick={(e) => {dispatch(showDashboardAction())}}>Your Dashboard</span>
                    <span onClick={(e) => {dispatch(showFormAction())}}> Add New Details</span>
                    <button className={classes.btn} onClick={(e)=>{
                        dispatch(openPortalAction());
                    }}>Login / Register</button>
            </div>
        </div>
    )
}
export default Navbar;