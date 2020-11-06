import React from 'react'
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ component: Component, authenticated, ...rest}) => (
    <Route 
    {...rest}
    render={(props) => authenticated === true ? <Redirect to='/'/> : <Component {...props}/>}
    />
)

export default AuthRoute
