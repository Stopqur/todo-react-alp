import React, {useState} from 'react'
import { Typography, Button, Box, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import TodoTitle from './TodoTitle'
import TodoForm from './TodoForm'
import Options from './Options'
import TodoItem from './TodoItem'
import Pagination from './Pagination'

const useStyles = makeStyles(() => ({
    title: {
        color: 'white'
    }
}))


function TodoSection({createBlock}) {
    const classes = useStyles();

    const [todos, setTodos] = useState([])
    
    const [filterTodos, setFilterTodos] = useState([...todos])
    
    const [titleInput, setTitleInput] = useState('')

    const [pagination, setPagination] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [countTodoOnPage] = useState(5)




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
        console.log('its working')
        if (filterTodos.length > 2) {
            handleSliceTodos()
            console.log('show me count todo:', filterTodos.length,filterTodos,todos)
            const newBtn = {title: 0, id: Date.now()}
            return setPagination([...pagination, newBtn])
        } console.log('show me count todo:', filterTodos.length,filterTodos,todos)
    }
    

    function handleChangeInput (e) {
        setTitleInput(e.target.value)
    }
    
    function handleDeleteInput() {
        setTitleInput('')
    }
    
    function handleDeleteToDo (itemId) {
        setFilterTodos([...filterTodos.filter(todo => todo.id !== itemId) ])
        setTodos([...todos.filter(todo => todo.id !== itemId) ])
        console.log(itemId)
    }
    
    
    // Filterbuttons

    function handleFilterAll () {
        setFilterTodos(todos)
    }

    function handleFilterDone () {
        // setFilterTodos([...todos])
        setFilterTodos(todos.filter(todo => todo.completed === true))
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
        <Box>
            <Typography className={ classes.title } variant='h3'>toDo List</Typography>
            <TodoForm
                addTodo={handleAddItem} 
                titleInput={titleInput} 
                handleChangeInput={handleChangeInput} 
                deleteInput={handleDeleteInput} 
                colorText={classes.title}
            >
            </TodoForm>
            <Options 
                sortTodosLater={handleSortLater} 
                sortTodosEarlier={handleSortEarlier} 
                filterAll={handleFilterAll} 
                filterUndone={handleFilterUndone} 
                filterDone={handleFilterDone}
            />
            <List>
            {filterTodos.map((todo, index) => {
                 return <TodoItem 
                    style={{width: '100%'}}
                    colorText={classes.title}
                    number={index}
                    todoDelete={handleDeleteToDo}
                    todo={todo} 
                    key={index}
                        />
                })
             }
            </List>
            <Pagination btnSwitchPage={handlePaginationBtn} countTodos={todos.length} countTodoOnPage={countTodoOnPage}/>
        </Box>
    )
    // (
        // <section className='main__menu'>
        //     <TodoTitle />    
        //     <TodoForm 
        //         addTodo={handleAddItem} 
        //         titleInput={titleInput} 
        //         handleChangeInput={handleChangeInput} 
        //         deleteInput={handleDeleteInput} 
        //     />
        //     <Options sortTodosLater={handleSortLater} sortTodosEarlier={handleSortEarlier} filterAll={handleFilterAll} filterUndone={handleFilterUndone} filterDone={handleFilterDone}/>
        //     <ul className="main__taskList">
        //         {filterTodos.map((todo, index) => {
        //             return <TodoItem 
        //                 number={index}
        //                 todoDelete={handleDeleteToDo}
        //                 todo={todo} 
        //                 key={index}/>
        //             })
        //         }
        //     </ul>
        //     <Pagination btnSwitchPage={handlePaginationBtn} countTodos={todos.length} countTodoOnPage={countTodoOnPage}/>
        // </section>
    // )
}

export default TodoSection