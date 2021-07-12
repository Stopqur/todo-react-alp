import React from 'react'
import {useState} from 'react'

function FormButton (props) {
    return (
        <button 
            type="button" 
            className="main__btnCreate"
            onClick={props.onClick}
        >
            Create
        </button>
    )
}

export default FormButton