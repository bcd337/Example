import React from 'react'
import {Route, Switch, Router} from "react-router-dom"

import Home from './Home'
import Sidebar from './Sidebar'
import Data from './Data'
import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import LoginRoute from './Route'
import history from "./history"
import Region from './Region'
import Commodity from './Commodity'
import News from './News'

const router = () => { 

    return (
        <Router history={history}>
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
                    <Route path={"/"}>
                        <Sidebar />
                        <div className="flex-grow-1">
                            <div className="d-flex flex-column h-100">
                                <div className="h-56px text-dark bg-warning text-nowrap overflow-hidden centering-left pl-3 font-weight-bold">
                                    Dashboard Monitoring
                                </div>
                                <div className="flex-grow-1">
                                    <Switch>
                                        <LoginRoute exact path={"/"}>
                                            <Home/>
                                        </LoginRoute>
                                        <LoginRoute exact path={"/data"}>
                                            <Data/>
                                        </LoginRoute>
                                        <LoginRoute exact path={"/region"}>
                                            <Region/>
                                        </LoginRoute>
                                        <LoginRoute exact path={"/commodity"}>
                                            <Commodity/>
                                        </LoginRoute>
                                        <LoginRoute exact path={"/news"}>
                                            <News />
                                        </LoginRoute>
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