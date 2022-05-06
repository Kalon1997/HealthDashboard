import React from 'react'
import classes from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navs}>
                    <span>Your Dashboard</span>
                    <span> Add New Details</span>
            </div>
        </div>
    )
}
export default Navbar;