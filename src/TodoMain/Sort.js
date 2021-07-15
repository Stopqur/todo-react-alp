import React from 'react'

export default function Sort ({sortBtnEarlier, sortBtnLater}) {
    return (
        <div className='main__sort'>
            <p className = "main__sortText">Sort by date:</p>
            <button onClick={() => sortBtnEarlier()} type ="button" className = "btnSort">
                <img className="btnSort__icon" src='https://img.icons8.com/ios-filled/50/000000/long-arrow-up.png'></img>
            </button>
            <button onClick={() => sortBtnLater()} type ="button" className = "btnSort">
                <img className="btnSort__icon btnSort__icon_rotate" src='https://img.icons8.com/ios-filled/50/000000/long-arrow-up.png'></img>
            </button>
        </div>
    )
}