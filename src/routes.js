import React from 'react'
import Home from './Home'
import Sidebar from './Sidebar'
import Data from './Data'
import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"

const router = () => { 

    return (
        <Router>
            <div className="d-flex">

                <Switch>
                    <Route exact path={"/login"}>
                        <Login/>
                    </Route>
                    <Route exact path={"/register"}>
                        <Register/>
                    </Route>
                    <Route exact path={"/forgot_password"}>
                        <ForgotPassword/>
                    </Route>
                    <Route exact path={"/"}>
                        <Sidebar />
                        <div className="flex-grow-1">
                            <div className="d-flex flex-column h-100">
                                <div className="h-56px text-dark bg-warning text-nowrap overflow-hidden centering-left pl-3 font-weight-bold">
                                    Dashboard Monitoring
                                </div>
                                <div className="flex-grow-1">
                                    <Switch>
                                        <Route exact path={"/"}>
                                            <Home/>
                                        </Route>
                                        <Route exact path={"/data"}>
                                            <Data/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                            
                        </div>
                    </Route>
                </Switch>
            
                
            </div>
        </Router>
    )
}

export default router