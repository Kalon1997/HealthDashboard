import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactDom from 'react-dom'
import classes from './Login.module.css'
import { closePortalAction, loginModeOnAction, registerModeOnAction } from '../actions/user'

const Backdrop=()=>{
    const dispatch = useDispatch()
    return <div onClick={(e)=>{dispatch(closePortalAction())}} className={classes.backdrop}></div>
}
const Modal=()=>{
    const dispatch = useDispatch()
    const {loginMode} = useSelector((state) => (state.myweb))
    return (
        <div className={classes.modal}>
           <form className={classes.login}>
           { loginMode && <h3><span className={classes.loginSpan} onClick={(e)=>{ dispatch(loginModeOnAction())}}><u>Login /</u></span><span className={classes.registerSpan}  onClick={(e)=>{ dispatch(registerModeOnAction())}}> Register ?</span> </h3>}
           { !loginMode && <h3><span className={classes.loginSpan} onClick={(e)=>{ dispatch(loginModeOnAction())}}>Login /</span><span className={classes.registerSpan}  onClick={(e)=>{ dispatch(registerModeOnAction())}}><u>Register ?</u></span> </h3>}    
                { !loginMode && <input placeholder='Name'></input>}
                <input placeholder='email'></input>
                <input placeholder='password'></input>
                { loginMode ? <button className={classes.btn}>Login</button> : <button className={classes.btn}>Register</button>}
           </form>
        </div>
    ) 
}
const Login = () => {
    return (
        <div>
           {ReactDom.createPortal(<Backdrop />, document.getElementById('backdrop'))}
           {ReactDom.createPortal(<Modal />, document.getElementById('modal'))}
        </div>
    )
}
export default Login;