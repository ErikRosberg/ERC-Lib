import React from 'react'

function Button({ className, ButtonLabel }) {
    return (
        <button className={className}> {ButtonLabel} </button>
    )
}

export default Button