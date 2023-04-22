import React from 'react'
import PropTypes from 'prop-types'


const Button = props => {
    const size=props.size ? 'btn-'+ props.size :""
    const aninmation =props.animation ? '' :'btn-animation'
    
    return (
        <button 
            className ={`btn ${size} ${aninmation}`}
            onClick={props.onClick ? ()=>props.onClick():null}
            style={{background:"#4267b2",color:"#fff"}}
        >
        <span className="btn__txt">{props.children}</span>
        {
            props.icon ? (
                <span className="btn__icon">
                    <box-icon  name={`${props.icon}`} color={`${props.color}`}></box-icon>
                </span>
            ):null
        }
        </button>
    )
}

Button.propTypes = {
    size: PropTypes.string.isRequired,
    icon: PropTypes.any,
    animation: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.string,
}

Button.defaultProps = {
    icon: '',
    size: '',
    animation: false,
    onclick:{},
    color:'',
    
}

export default Button