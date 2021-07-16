import React from 'react'
import QuantityBtn from './QuantityBtn'
import { Box, Button } from '@material-ui/core';

export default function Quantity ({filterAllBtn, filterDoneBtn, filterUndoneBtn}) {
    

    return (
        <Box>
            <Button onClick={ () => filterAllBtn()} variant="contained" color="common" type="button">All</Button>
            <Button onClick={ () => filterDoneBtn()} variant="contained" color="common" style={ { marginLeft: '20px'}} type="button">Done</Button>
            <Button onClick={ () => filterUndoneBtn()} variant="contained" color="common" style={ { marginLeft: '20px'}} type="button">Undone</Button>
        </Box>
        // <div className='main__buttons'>
        //     <button onClick={ () => filterAllBtn()} type="button" className="btnShow">All</button>
        //     <button onClick={ () => filterDoneBtn()} type="button" className="btnShow">Done</button>
        //     <button onClick={ () => filterUndoneBtn()} type="button" className="btnShow">Undone</button>
        // </div>
    )
}