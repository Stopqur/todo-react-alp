import React, {useState} from 'react'

import TodoTitle from './TodoTitle'
import TodoForm from './TodoForm'
import Options from './Options'
import TodoItem from './TodoItem'

function TodoSection({createBlock}) {
    const [todos, setTodos] = useState([])

    
    const [titleInput, setTitleInput] = useState('')

    // const [allTodo, setAllTodo] = useState(todos)

    function handleAddItem (userInput) {
        const newItem = {
            id: Date.now(),
            title: userInput,
            completed: false,
            date: new Date()
        }
        setTodos([...todos, newItem])
    }
    

    function handleChangeInput (e) {
        setTitleInput(e.target.value)
    }
    
    function handleDeleteInput() {
        setTitleInput('')
    }
    
    function handleDeleteToDo (itemId) {
        setTodos([...todos.filter(todo => todo.id !== itemId) ])
        console.log(itemId)
    }
    
    
    // Filterbuttons
    const [filterTodos, setFilterTodos] = useState([...todos])

    function handleFilterAll () {

        setTodos(filterTodos)
    }

    function handleFilterDone () {
        setFilterTodos([...todos])
        setTodos(todos.filter(todo => todo.completed === true))
    }

    function handleFilterUndone () {
        setFilterTodos([...todos])
        setTodos(todos.filter(todo => todo.completed === false))
    }

    //Sort

    function handleSortEarlier () {
        setTodos(todos.sort(function(a, b) {
            console.log(a)
            return a.id - b.id 
        }))
    }

    function handleSortLater () {
        setTodos(todos.sort(function(a, b) {
            console.log(a)
            return b.id - a.id 
        }))
    }

    return (
        <section className='main__menu'>
            <TodoTitle />    
            <TodoForm 
                addTodo={handleAddItem} 
                titleInput={titleInput} 
                handleChangeInput={handleChangeInput} 
                deleteInput={handleDeleteInput} 
            />
            <Options sortTodosLater={handleSortLater} sortTodosEarlier={handleSortEarlier} filterAll={handleFilterAll} filterUndone={handleFilterUndone} filterDone={handleFilterDone}/>
            <ul className="main__taskList">
                {todos.map((todo, index) => {
                return <TodoItem 
                    todoDelete={handleDeleteToDo}
                    todo={todo} 
                    key={index}/>
                })}
            </ul>
        </section>
    )
}

export default TodoSection