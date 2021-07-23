import React, {useState} from 'react'

export default function TodoItem({todo, todoDelete, completeTodo, clickEnter, clickForm, clickEsc, boolVal}) {
    
    const [classItem, setClassItem] = useState('taskItem__text')
    
    const [changeTitle, setChangeTitle] = useState(todo.title)

  

    function changeText (task, e ) {
        setChangeTitle(e.target.value)
    }

    

    

    return  (
        <li className="taskItem">
            <label className="taskItem__label" htmlFor={todo.id}>
                <input 
                    id={todo.id} 
                    type="checkbox" 
                    onChange={() => completeTodo(todo.id)}
                    checked={todo.completed}
                />
            </label>
            <form 
                className='taskForm'
                onDoubleClick={() => clickForm(todo)}
                onKeyDown={(e) => clickEsc(e, todo, setChangeTitle)}
            
            >
                { (boolVal) 
                ? <p className={classItem}>{changeTitle}</p> 
                : <textarea onKeyPress={(e) => clickEnter(e, changeTitle, todo, setChangeTitle)} onChange={(e) => changeText(todo, e)} id={todo.id} className={classItem} value={changeTitle}></textarea>
                }
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
