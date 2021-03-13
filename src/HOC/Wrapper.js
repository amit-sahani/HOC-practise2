import React from 'react'
import styles from '../styles/CommonStyle'

const translateProps = (props) =>{
    let _styles = {...styles.default}

    if(props.disable){
        _styles = {..._styles, ...styles.disable}
    }
    return _styles

}

const Wrapper = (WrappedComponent) => {
    const newFunction = (props) =>{
        console.log(props)
        return <WrappedComponent styles={translateProps(props)} />
    }
    return newFunction
}

export default Wrapper
