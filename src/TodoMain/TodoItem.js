import React, {useState} from 'react'

export default function TodoItem({todo, todoDelete, number}) {
    
    const [classItem, setClassItem] = useState('taskItem__text')


    let noneLine = 'taskItem__text'

    function completeTodo () {
        todo.completed = !todo.completed
            if (todo.completed === true) {
                const currentClass = 'taskItem__text taskItemItem__text_decor'
                return setClassItem(currentClass)

            } else {
                const currentClass = 'taskItem__text'
                return setClassItem(currentClass)
            }
        }

    function trashClick () {
        todoDelete(todo.id)
        console.log(todo.id)
    }

    return  <li className="taskItem">
                <label className="taskItem__label" htmlFor={todo.id}>
                <input 
                    id={todo.id} 
                    type="checkbox" 
                    onChange={() => completeTodo()}
                    checked={todo.completed}
                />
                <div className="taskItem__textBox">
                    <p className={classItem}>{todo.title}, {number}, {`${todo.completed}`}</p>
                </div>
                <p className="taskItem__date">{todo.date.toLocaleString()}</p>
                </label>
                <button onClick={() => trashClick()} 
                    type="button" 
                    className="taskItem__btnCheck">
                    <img className="taskItem__btnCheckIcon" src="https://img.icons8.com/material-sharp/24/000000/trash.png" />
                </button>
            </li>
}   

{/* <label classNameName = "taskItem__label" for="itemCheck">
        <input id = "itemCheck" type="checkbox">    
        <div className = "taskItem__textBox">
            <p className = "taskItem__text"></p>
        </div>
        <p className = "taskItem__date">09/07/2021</p>
    </label>
    <button type ="button" className = "taskItem__btnCheck"><img className = "taskItem__btnCheckIcon" src = "./src/image/trash.svg"></button> */}