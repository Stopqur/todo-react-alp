import React from 'react'

export default function TodoItem({ text }) {
    console.log(123);
    return <ul className="main__taskList">
        <li className="taskItem">
            <label className="taskItem__label" for="itemCheck">
                <input id="itemCheck" type="checkbox" />
                <div className="taskItem__textBox">
                    <p className="taskItem__text">{text}</p>
                </div>
                <p className="taskItem__date">09/07/2021</p>
            </label>
            <button type="button" className="taskItem__btnCheck">
                <img className="taskItem__btnCheckIcon" src="https://img.icons8.com/material-sharp/24/000000/trash.png" />
            </button>
        </li>
    </ul>
}

{/* <label classNameName = "taskItem__label" for="itemCheck">
        <input id = "itemCheck" type="checkbox">    
        <div className = "taskItem__textBox">
            <p className = "taskItem__text"></p>
        </div>
        <p className = "taskItem__date">09/07/2021</p>
    </label>
    <button type ="button" className = "taskItem__btnCheck"><img className = "taskItem__btnCheckIcon" src = "./src/image/trash.svg"></button> */}