import React from 'react'
import { Box, Typography, Button, CardMedia } from '@material-ui/core';

export default function Sort ({sortBtnEarlier, sortBtnLater}) {
    return (
        <Box display='flex' alignItems='center'>
            <Typography>Sort by date:</Typography>
            <Button onClick={() => sortBtnEarlier()} type ="button">
                iconArrowUp
                {/* <CardMedia></CardMedia> */}
            </Button>
            <Button onClick={() => sortBtnLater()} type ="button">
                iconArrowDown
                {/* <CardMedia></CardMedia> */}
            </Button>
        </Box>

        // <div className='main__sort'>
        //     <p className = "main__sortText">Sort by date:</p>
        //     <button onClick={() => sortBtnEarlier()} type ="button" className = "btnSort">
        //         <img className="btnSort__icon" src='https://img.icons8.com/ios-filled/50/000000/long-arrow-up.png'></img>
        //     </button>
        //     <button onClick={() => sortBtnLater()} type ="button" className = "btnSort">
        //         <img className="btnSort__icon btnSort__icon_rotate" src='https://img.icons8.com/ios-filled/50/000000/long-arrow-up.png'></img>
        //     </button>
        // </div>
    )
}