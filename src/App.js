import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import VerifyEmail from "./pages/VerifyEmail"
import SignUp from "./pages/SignUp"
import { Provider } from "react-redux"
import store from "./redux/store"

function App()
{
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/email/verify/:token" component={VerifyEmail}/>
                </Switch>
            </Router> 
        </Provider>
    )
}

export default App

