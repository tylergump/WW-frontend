import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => {
    console.log("Greeting.js state preferences ", state.preferences)
    return {
        username: state.username,
    }
}

const userDisplay = ({ username, preferences }) => (
    <div>
        <h1 className="mt-4">Welcome, {username}!</h1> 
    </div>
)

const Greeting = connect(mapStateToProps)(userDisplay)

export default Greeting