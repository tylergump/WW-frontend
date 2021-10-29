import React from 'react'
import { useHistory } from 'react-router-dom'

export default function HomeBtns() {
    const history = useHistory()

    const registerRouteChange = () => {
        let path = "/register"
        history.push(path)
    }

    const loginRouteChange = () => {
        let path = "/login"
        history.push(path)
    }

    


    return (
        <div>
            <button className="btn" onClick={registerRouteChange}>Register</button>
            <button className="btn" onClick={loginRouteChange}>Login</button>
        </div>
    )
}
