import React from 'react'
import Quantity from './Quantity'
import Sort from './Sort'

export default function Options ({filterAll, filterDone, filterUndone, sortTodosEarlier, sortTodosLater}) {

    return (
    <div className='main__options'>
        <Quantity filterAllBtn={filterAll} filterDoneBtn={filterDone} filterUndoneBtn={filterUndone}/>
        <Sort sortBtnEarlier={sortTodosEarlier} sortBtnLater={sortTodosLater}/>
    </div>
    )
}