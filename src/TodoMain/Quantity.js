import React from 'react'
import QuantityBtn from './QuantityBtn'

export default function Quantity ({filterAllBtn, filterDoneBtn, filterUndoneBtn, hidePagiBtn}) {
    

    return (
        <div className='main__buttons'>
            <button onClick={ () => filterAllBtn()} type="button" className="btnShow">All</button>
            <button onClick={ () => filterDoneBtn()} type="button" className="btnShow">Done</button>
            <button onClick={ () => filterUndoneBtn()} type="button" className="btnShow">Undone</button>
        </div>
    )
}