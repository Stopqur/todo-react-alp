import React, { useState } from 'react' 
import { Button, Box } from '@material-ui/core';

function Pagination ({ btnSwitchPage, countTodoOnPage, countTodos }) {
    // const [pageNum, setPageNum] = useState([])
    const pageNum = []

    for (let i = 1; i <= Math.ceil(countTodos / countTodoOnPage); i++) {
        pageNum.push(i)
    }
    return (
        <Box>
            {pageNum.map(btn => <Button onClick={() => btnSwitchPage(btn)} className='pagination__btn'>{btn}</Button>)}
        </Box>

        // <div className='pagination'>
        //     {pageNum.map(btn => <button onClick={() => btnSwitchPage(btn)} className='pagination__btn'>{btn}</button>)}
        //     {/* {pageNum}
        //     {console.log("array:",pageNum,countTodos,countTodoOnPage)} */}
        // </div>
    )
}

export default Pagination