import React, { Component } from 'react'
import Wrapper from '../HOC/Wrapper'

class Button extends Component {

    render() {

        console.log(this.props.styles)
        return (
            <div>
                <button style={this.props.styles}>I am a Button</button>
            </div>
        )
    }
}

export default Wrapper(Button)
