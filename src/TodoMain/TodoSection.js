import React, {useEffect, useState} from 'react'

import TodoTitle from './TodoTitle'
import TodoForm from './TodoForm'
import Options from './Options'
import TodoItem from './TodoItem'
import Pagination from './Pagination'


function TodoSection() {
    

    // const [titleInput, setTitleInput] = useState('')
    
    const [todos, setTodos] = useState([])
    const [filterTodos, setFilterTodos] = useState([...todos])
    const [currentPage, setCurrentPage] = useState(1)
    const [flagHideBtn, setFlagHideBtn] = useState(false)
    console.log(' ========= Render todoSection', todos)
    const countTodoOnPage = 3    

    function sliceTodosList(arrTodo) {
        const lastIdTask = currentPage * countTodoOnPage
        const firstIdTask = lastIdTask - countTodoOnPage
        setFilterTodos(arrTodo.slice(firstIdTask, lastIdTask))
    }

    function handleAddItem (userInput, funcDelete) {
        const newItem = {
            id: Date.now(), 
            title: userInput,
            completed: false,
            date: new Date(),
            class: 'taskItem__text'
        }
        // console.log(titleInput)
        funcDelete('')
        setTodos([...todos, newItem])
        setFilterTodos([...todos, newItem])
        if (filterTodos.length > 2) {
            sliceTodosList(todos)
        }
    }



    useEffect(() => {
        sliceTodosList(todos)
        console.log('it"s working')
    }, [currentPage])

    useEffect (() => {
        if (filterTodos.length < 1 && todos.length !== 0 && currentPage !== 1) {
            setCurrentPage(currentPage - 1)
            sliceTodosList(todos)
        } 
        else if (filterTodos.length < 1 && todos.length !== 0 && currentPage === 1) {
            sliceTodosList(todos)
        }
    }, [filterTodos.length])
    


    function completeTodo (id) {
        setFilterTodos([...filterTodos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                return todo
            } return todo
        })])
    }

    
    function handleDeleteToDo (itemId) {
        setFilterTodos([...filterTodos.filter(todo => todo.id !== itemId) ])
        setTodos([...todos.filter(todo => todo.id !== itemId) ])
    }

    
// Filtration
    const lastIdTask = currentPage * countTodoOnPage
    const firstIdTask = lastIdTask - countTodoOnPage

    function handleFilterAll () {
        setFlagHideBtn(false)
        sliceTodosList(todos)
        console.log(filterTodos.length)
    }
    
    function handleFilterDone () {
        if (todos.length === 1 && todos[0].completed === false) {
            setFilterTodos([])
            console.log('Less 1: ', filterTodos, filterTodos.length)
        } else { 
            setFilterTodos(todos.filter(todo => todo.completed === true))
            console.log('More 1: ', filterTodos.length)
            handleHidePagi()
        }
        // if(filterTodos.length < 3) {
        //     setFlagHideBtn(true)
        // } 
        // else{setFlagHideBtn(false)}
        console.log(filterTodos.length, todos.length, flagHideBtn)
    }
    
    function handleFilterUndone () {
        setFilterTodos(todos.filter(todo => todo.completed === false))
        console.log(filterTodos)

        handleHidePagi()
        // if(filterTodos.length < 3) {
        //     setFlagHideBtn(true)
        // } 
        // else{setFlagHideBtn(false)}
    }


    



//Sort
    function handleSortEarlier () {
        const sortTodo = [...filterTodos]
        setFilterTodos(sortTodo.sort(function(a, b) {
            return b.id - a.id
        }))
        console.log(filterTodos)
    }
    function handleSortLater () {
        const sortTodo = [...filterTodos]
        setFilterTodos(sortTodo.sort(function(a, b) {
            return a.id - b.id 
        }))
    }
    



//Pagination 

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

    function handlePaginationBtn (num) {
        setCurrentPage(num)
        console.log('number of page: ', currentPage)
    }
    



// Actions on definite task

    const [boolVal, setBoolVal] = useState(true)

    function handleClickForm (task) {
        setBoolVal(false)
        console.log(task)
    }

    function handleClickEsc (e, task, func) {
        if (e.key === 'Escape') {
            setFilterTodos([...filterTodos.map(todo => {
                func(task.title)
                // task.title = old
                return todo
            })])
            setBoolVal(true)
        }
    }

    function handleClickEnter (event, newTitle, task) {
        if(boolVal === false && event.key === 'Enter') {
            setFilterTodos([...filterTodos.map(todo => {
                task.title = newTitle
                return todo
            })])
            setBoolVal(true)
            
        }
    }






    return (
        <section className='main__menu'>
            <TodoTitle />    
            <TodoForm addTodo={handleAddItem}/>
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
                                // titleInput={titleInput}
                                clickEnter={handleClickEnter}
                                clickForm={handleClickForm}
                                clickEsc={handleClickEsc}
                                boolVal={boolVal}
                                // changeText={changeText}
                                // setTaskFlag={setTaskFlag}
                                
                                // sliceTodo={handleSliceTodos}
                            />
                    })
                }
            </ul>
            {todos.length > 3 && <Pagination 
                btnSwitchPage={handlePaginationBtn} 
                countTodoOnPage={countTodoOnPage}                
                countFilterTodo={todos.length}
                // changePage={changePage}
            />}
        </section>
    )
}

export default TodoSection