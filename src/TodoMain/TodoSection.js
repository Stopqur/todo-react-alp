import React, {useEffect, useState} from 'react'

import TodoTitle from './TodoTitle'
import TodoForm from './TodoForm'
import Options from './Options'
import TodoItem from './TodoItem'
import Pagination from './Pagination'


function TodoSection({createBlock}) {
    console.log(' ========= Render todoSection')

    const [titleInput, setTitleInput] = useState('')
    
    const [todos, setTodos] = useState([])
    const [filterTodos, setFilterTodos] = useState([...todos])
    const [currentPage, setCurrentPage] = useState(1)
    const [flagHideBtn, setFlagHideBtn] = useState(false)
    
    const countTodoOnPage = 3    

    function sliceTodosList() {
        const lastIdTask = currentPage * countTodoOnPage
        const firstIdTask = lastIdTask - countTodoOnPage
        setFilterTodos(todos.slice(firstIdTask, lastIdTask))
    }

    function handleAddItem (userInput) {
        const newItem = {
            id: Date.now(),
            title: titleInput,
            completed: taskFlag,
            date: new Date(),
            class: 'taskItem__text'
        }
        console.log(titleInput)
        setTitleInput('')
        setTodos([...todos, newItem])
        setFilterTodos([...todos, newItem])
        if (filterTodos.length > 2) {
            sliceTodosList()
        }
    }


    const [taskFlag, setTaskFlag] = useState(false)

    function completeTodo (task) {
        setTaskFlag(!task.completed)
        task.completed = taskFlag
        console.log(task.completed, taskFlag)
    }

    useEffect(() => {
        sliceTodosList()
        console.log('it"s working')
    }, [currentPage])

    useEffect (() => {
        if (filterTodos.length < 1 && todos.length !== 0 && currentPage !== 1) {
            setCurrentPage(currentPage - 1)
            sliceTodosList()
        } 
        else if (filterTodos.length < 1 && todos.length !== 0 && currentPage === 1) {
            sliceTodosList()
        }
    }, [filterTodos.length])
    
    function handleDeleteToDo (itemId) {
        setFilterTodos([...filterTodos.filter(todo => todo.id !== itemId) ])
        setTodos([...todos.filter(todo => todo.id !== itemId) ])
        console.log(currentPage, filterTodos.length)
        
        // if (filterTodos.length < 1 ) {
        //     // setCurrentPage(currentPage - 1)
        //     const lastIdTask = currentPage * countTodoOnPage
        //     const firstIdTask = lastIdTask - countTodoOnPage
        //     setFilterTodos([...filterTodos.filter(todo => todo.id !== itemId).slice(firstIdTask - 3, lastIdTask - 3) ])
        //     setTodos([...todos.filter(todo => todo.id !== itemId).slice(firstIdTask - 3, lastIdTask - 3) ])
        // }



        //     // setFilterTodos(todos.slice(currentPage))
        //     // handleSlicePrevTodos()
    }
    
    // function handleCompleteTodo (task) {
    //     task.completed = !task.completed
    //     // if (task.completed === true) {
    //     //     setClassItem('taskItem__text taskItemItem__text_decor')
            
    //     // } else {
    //     //     setClassItem('taskItem__text')
    //     // }
    // }


//----------------Task FLAG-------------------

    // const [taskFlag, setTaskFlag] = useState(false)

    // function completeTodo (task) {
    //     setTaskFlag(!taskFlag)
    //     console.log(task.completed, taskFlag)
    // }

    

    // Filterbuttons
    function handleFilterAll () {
        setFlagHideBtn(false)
        sliceTodosList()
        console.log(filterTodos.length)
    }
    
    function handleFilterDone () {
        setFilterTodos(todos.filter(todo => todo.completed === true).slice(firstIdTask, lastIdTask))
        handleHidePagi()
        // if(filterTodos.length < 3) {
        //     setFlagHideBtn(true)
        // } 
        // else{setFlagHideBtn(false)}
        console.log(filterTodos.length, flagHideBtn)
    }
    
    function handleFilterUndone () {
        setFilterTodos(todos.filter(todo => todo.completed === false).slice(firstIdTask, lastIdTask))
        handleHidePagi()
        // if(filterTodos.length < 3) {
        //     setFlagHideBtn(true)
        // } 
        // else{setFlagHideBtn(false)}
    }

// Hide pagination on length array less 3

    function handleHidePagi () {
        if(filterTodos.length < 3) {
            setFlagHideBtn(true)
            console.log(filterTodos.length)
        } 
        else {
            setFlagHideBtn(false)
            console.log(filterTodos.length)

        }
    }
    

    



    //Sort
    function handleSortEarlier () {
        const sortTodo = [...filterTodos]
        setFilterTodos(sortTodo.sort(function(a, b) {
            return b.id - a.id
        }))
    }
    function handleSortLater () {
        const sortTodo = [...filterTodos]
        setFilterTodos(sortTodo.sort(function(a, b) {
            return a.id - b.id 
        }))
    }
    



    //Pagination 

    // function changePage (number) {
    //     setCurrentPage(number)
    // }

    // // function handleSliceTodos () {
    // //     setFilterTodos(currentTasks)
    // // }

    
    const lastIdTask = currentPage * countTodoOnPage
    const firstIdTask = lastIdTask - countTodoOnPage
    // const currentTasks = setFilterTodos(todos.slice(firstIdTask, lastIdTask))
    
    // function handleSlicePrevTodos () {
    //     setFilterTodos(todos.slice(currentPage * 3 - 6, currentPage * 3 - 3))
    // }

    function handlePaginationBtn (num) {
        setCurrentPage(num)
        console.log('number of page: ', currentPage)
    }
       
    


    return (
        <section className='main__menu'>
            <TodoTitle />    
            <TodoForm 
                addTodo={handleAddItem} 
                setTitleInput={setTitleInput}
                titleInput={titleInput}
            />
            <Options 
                sortTodosLater={handleSortLater} 
                sortTodosEarlier={handleSortEarlier} 
                filterAll={handleFilterAll} 
                filterUndone={handleFilterUndone} 
                filterDone={handleFilterDone}
            />
            <ul className="main__taskList">
                {filterTodos.map(todo => {
                    return <TodoItem 
                                // changeText={handleChangeText}
                                completeTodo={completeTodo}
                                todoDelete={handleDeleteToDo}
                                classItem={todo.class}
                                todo={todo} 
                                key={todo.id}
                                setTitleInput={setTitleInput}
                                titleInput={titleInput}
                                // setTaskFlag={setTaskFlag}
                                
                                // sliceTodo={handleSliceTodos}
                            />
                    })
                }
            </ul>
            {flagHideBtn || todos.length > 3 && <Pagination 
                btnSwitchPage={handlePaginationBtn} 
                countTodoOnPage={countTodoOnPage}                
                countFilterTodo={todos.length}
                // changePage={changePage}
            />}
        </section>
    )
}

export default TodoSection