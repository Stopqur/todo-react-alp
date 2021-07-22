import React, { useState } from 'react'

function Pagination({ btnSwitchPage, countTodoOnPage, countFilterTodo }) {
    const pageNum = []

    for (let i = 1; i <= Math.ceil(countFilterTodo / countTodoOnPage); i++) {
        pageNum.push(i)
    }

   
    return (
        <div className='pagination'>
            {pageNum.map((btn, i) => {                
                return (
                    <button
                        key = {i}
                        className='pagination__btn'
                        onClick={() => btnSwitchPage(btn)}
                    >
                        {btn}
                    </button>
                )
            })
            }
        </div>
    )
}

export default Pagination