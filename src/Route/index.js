import React, { Component } from 'react'
import {
    Route,
    Redirect,
} from "react-router-dom"
import isLogin from '../helpers/isLogin'

class route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            children, 
            ...rest
        } = this.props

        return (
            <Route
                {...rest}
                render={({ location }) =>
                isLogin() ? (
                    children
                ) : (
                    <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                    />
                )
                }
            />
        )
    }
}

export default route