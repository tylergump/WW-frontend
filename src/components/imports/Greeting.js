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
        <h2>Welcome, {username}!</h2> 
    </div>
)

const Greeting = connect(mapStateToProps)(userDisplay)

export default Greeting