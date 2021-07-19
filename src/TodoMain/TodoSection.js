import React, {useState} from 'react'

import TodoTitle from './TodoTitle'
import TodoForm from './TodoForm'
import Options from './Options'
import TodoItem from './TodoItem'
import Pagination from './Pagination'


function TodoSection({createBlock}) {
    console.log(' ========= Render todoSection')
    const [todos, setTodos] = useState([])
    
    const [filterTodos, setFilterTodos] = useState([...todos])
    
    // const [titleInput, setTitleInput] = useState('')

    const [pagination, setPagination] = useState([])

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [countTodoOnPage] = useState(3)




    // const lastIdTask = currentPage * countTodoOnPage

    // const firstIdTask = lastIdTask - countTodoOnPage

    // const currentTasks = filterTodos.slice(firstIdTask, lastIdTask)


    

    // const [allTodo, setAllTodo] = useState(todos)

    function handleAddItem (userInput) {
        const newItem = {
            id: Date.now(),
            title: userInput,
            completed: false,
            date: new Date()
        }
        setTodos([...todos, newItem])
        setFilterTodos([...todos, newItem])
       
        if (filterTodos.length > 2) {
            handleSliceTodos()
            console.log('show me count todo:', filterTodos.length,filterTodos,todos)
            const newBtn = {title: 0, id: Date.now()}
            return setPagination([...pagination, newBtn])
        } console.log('show me count todo:', filterTodos.length,filterTodos,todos)
    }
    

    // function handleChangeInput (event) {
    //     setTitleInput(event.target.value)
    // }
    
    // function handleDeleteInput() {
    //     setTitleInput('')
    // }
    
    const [classItem, setClassItem] = useState('taskItem__text')
    const [changeTodo, setChangeTodo] = useState('')


    function handleCompleteTodo (task) {
        task.completed = !task.completed
        if (task.completed === true) {
            setClassItem('taskItem__text taskItemItem__text_decor')

        } else {
            setClassItem('taskItem__text')
        }
    }
    
    function handleChangeText (e, task) {
        setChangeTodo(task.title)
        task.title = e.target.value
    }

    function handleDeleteToDo (itemId) {
        setFilterTodos([...filterTodos.filter(todo => todo.id !== itemId) ])
        setTodos([...todos.filter(todo => todo.id !== itemId) ])
        console.log(itemId)
    }
    
    
    // Filterbuttons

    function handleFilterAll () {
        setFilterTodos([...todos])
    }

    function handleFilterDone () {
        // setFilterTodos([...todos])
        setFilterTodos(todos.filter(todo => todo.completed === true))
        console.log(filterTodos)
    }

    function handleFilterUndone () {
        // setFilterTodos([...todos])
        setFilterTodos(todos.filter(todo => todo.completed === false))
    }


    //Sort

    function handleSortEarlier () {
        const sortTodo = [...filterTodos]
        setFilterTodos(sortTodo.sort(function(a, b) {
            console.log("1 элемент", a, "2 элемент:", b)
            return b.id - a.id
        }))
    }

    function handleSortLater () {
        const sortTodo = [...filterTodos]
        setFilterTodos(sortTodo.sort(function(a, b) {
            console.log("1 элемент", a, "2 элемент:", b)
            return a.id - b.id 
        }))
    }

    //Pagination 
    const lastIdTask = currentPage * countTodoOnPage
    const firstIdTask = lastIdTask - countTodoOnPage
    const currentTasks = filterTodos.slice(firstIdTask, lastIdTask)
    function handleSliceTodos () {
        setFilterTodos(currentTasks)
    }
    
    function handlePaginationBtn (num) {
        const lastIdTask = num * countTodoOnPage
        const firstIdTask = lastIdTask - countTodoOnPage
        console.log(todos.length,num, firstIdTask, lastIdTask)
        setFilterTodos(todos.slice(firstIdTask, lastIdTask))
    }

    
    return (
        <section className='main__menu'>
            <TodoTitle />    
            <TodoForm 
                addTodo={handleAddItem} 
            />
            <Options sortTodosLater={handleSortLater} sortTodosEarlier={handleSortEarlier} filterAll={handleFilterAll} filterUndone={handleFilterUndone} filterDone={handleFilterDone}/>
            <ul className="main__taskList">
                {filterTodos.map(todo => {
                    return <TodoItem 
                        changeText={handleChangeText}
                        classItem={classItem}
                        completeTodo={handleCompleteTodo}
                        todoDelete={handleDeleteToDo}
                        todo={todo} 
                        key={todo.id}/>
                    })
                }
            </ul>
            <Pagination btnSwitchPage={handlePaginationBtn} countTodos={todos.length} countTodoOnPage={countTodoOnPage}/>
        </section>
    )
}

export default TodoSection