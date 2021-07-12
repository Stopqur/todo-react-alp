import React from 'react'
import SortBtn from './SortBtn'

export default function Sort () {
    return (
        <div className='main__sort'>
            <p className = "main__sortText">Sort by date:</p>
            <SortBtn />
            <SortBtn modClass='btnSort__icon_rotate'/>
        </div>
    )
}