import React, { Component } from 'react'

styles = {
    default:{
        backgroundColor: "white",
        padding: "10px",
        color: "black"
    },
    disable:{
        backgroundColor: "gray",
        color: "white"
    }
}

class Button extends Component {
    render() {
        return (
            <div>
                <button style={styles.default}>I am a Button</button>
            </div>
        )
    }
}

export default Button
