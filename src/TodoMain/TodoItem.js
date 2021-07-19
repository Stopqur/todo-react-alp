import React, {useState} from 'react'

export default function TodoItem({todo, todoDelete, changeText, classItem,completeTodo}) {
    
    // const [classItem, setClassItem] = useState('taskItem__text')

    // const [changeTodo, setChangeTodo] = useState('')
    
    // function changeText (e) {
    //     setChangeTodo(todo.title)
    //     todo.title = e.target.value
    // }

    // function completeTodo () {
    //     todo.completed = !todo.completed
    //     if (todo.completed === true) {
    //         setClassItem('taskItem__text taskItemItem__text_decor')

    //     } else {
    //         setClassItem('taskItem__text')
    //     }
    // }


    return  <li className="taskItem">
                <label className="taskItem__label" htmlFor={todo.id}>
                    <input 
                        id={todo.id} 
                        type="checkbox" 
                        onChange={() => completeTodo(todo)}
                        checked={todo.completed}
                    />
                </label>
                <div className="taskItem__textBox">
                    <input onChange={(e) => changeText(e, todo)} id={todo.id} className={classItem} value={`${todo.title}, ${todo.completed}`}></input>
                    {/* <input onChange={(e) => changeText(e, todo)} key={todo.id} id={todo.id} className={classItem} value={todo.title}></input> */}

                    {/* <p className={classItem}>{todo.title}, {number}, {`${todo.completed}`}</p> */}
                </div>
                <p className="taskItem__date">{todo.date.toLocaleString()}</p>
                <button onClick={() => todoDelete(todo.id)} 
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