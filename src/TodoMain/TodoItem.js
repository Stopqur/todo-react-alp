import React, {useState} from 'react'

export default function TodoItem({todo, todoDelete, changeText, completeTodo, taskFlag}) {
    
    const [boolVal, setBoolVal] = useState(true)
    const [classItem, setClassItem] = useState('taskItem__text')
    
    const [changeTitle, setChangeTitle] = useState(todo.title)

    // const [taskFlag, setTaskFlag] = useState(todo.completed)

    // function completeTodo (task) {
    //     console.log(task.completed)
    //     task.completed = !task.completed

    //     console.log(task.completed)
    //     // if (task.completed === true) {
    //     //     setClassItem('taskItem__text taskItemItem__text_decor')
            
    //     // } else {
    //     //     setClassItem('taskItem__text')
    //     // }
    // }

    function changeText (e) {
        setChangeTitle(e.target.value)
        // setTitleInput(changeTitle)
    }

    // const [changeTodo, setChangeTodo] = useState('')
    
    // function changeText (e) {
    //     setChangeTodo(todo.title)
    //     todo.title = e.target.value
    // }


    function clickForm () {
        setBoolVal(false)
    }

    function clickEsc (e) {
        if (e.key === 'Escape') {
            setBoolVal(true)
        }
    }

    function clickEnter (event) {
        if(boolVal === false && event.key === 'Enter') {
            setBoolVal(true)
                
        }
    }

    return  (
        <li className="taskItem">
            <label className="taskItem__label" htmlFor={todo.id}>
                <input 
                    id={todo.id} 
                    type="checkbox" 
                    onChange={() => completeTodo(todo)}
                    checked={todo.completed}
                />
            </label>
            <form 
                className='taskForm'
                onDoubleClick={() => clickForm()}
                onKeyDown={(e) => clickEsc(e)}
            
            >
                { (boolVal) 
                ? <p className={classItem}>{changeTitle}</p> 
                : <textarea onKeyPress={clickEnter} onChange={(e) => changeText(e)} id={todo.id} className={classItem} value={changeTitle}></textarea>
                }
                {/* {`${todo.title}, ${todo.completed}`} */}
            </form>
            <p className="taskItem__date">{todo.date.toLocaleString()}</p>
            <button 
                onClick={() => todoDelete(todo.id)} 
                type="button" 
                className="taskItem__btnCheck">
                <img className="taskItem__btnCheckIcon" src="https://img.icons8.com/material-sharp/24/000000/trash.png" />
            </button>
        </li>
    )
}   

{/* <label classNameName = "taskItem__label" for="itemCheck">
        <input id = "itemCheck" type="checkbox">    
        <div className = "taskItem__textBox">
            <p className = "taskItem__text"></p>
        </div>
        <p className = "taskItem__date">09/07/2021</p>
    </label>
    <button type ="button" className = "taskItem__btnCheck"><img className = "taskItem__btnCheckIcon" src = "./src/image/trash.svg"></button> */}