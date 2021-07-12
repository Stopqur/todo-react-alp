import React from 'react'
import SortIcon from './SortIcon'

export default function SortBtn(props) {
    return (
    <button type ="button" className = "btnSort">
        <SortIcon rotate={props.modClass}/>
    </button>
    )
}