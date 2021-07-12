import React from 'react'
import QuantityBtn from './QuantityBtn'

export default function Quantity () {
    const contentBtns = [
        {title:'All', id: 1},
        {title:'Done', id: 2},
        {title:'Undone', id: 3}
    ]

    return (
        <div className='main__buttons'>
            {contentBtns.map(btn => <QuantityBtn title={btn.title} key={btn.id}/>)}
        </div>
    )
}