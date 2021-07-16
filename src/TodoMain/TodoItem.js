import React, {useState} from 'react'
import { ListItem, InputLabel, Input, Button, Box, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    title: {
        color: 'white'
    },
    dateText: {
        color: 'orange'
    }
}))


export default function TodoItem({todo, todoDelete, number, colorText}) {
    const classes = useStyles();

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

    return (
        <ListItem>
            <InputLabel htmlFor={todo.id}>
                <Input
                    id={todo.id.toString()} 
                    type="checkbox" 
                    onChange={() => completeTodo()}
                    checked={todo.completed}
                >

                </Input>
                <Box>
                    <Typography className={classes.title} >{todo.title}, {number}, {`${todo.completed}`}</Typography>
                </Box>
                <Typography className={classes.dateText}>{todo.date.toLocaleString()}</Typography>
            </InputLabel>
            <Button onClick={() => trashClick()} type="button">
                Trash
                {/* <CardMedia></CardMedia> */}
            </Button>
        </ListItem>
    

            // <li className="taskItem">
            //     <label className="taskItem__label" htmlFor={todo.id}>
                //     <input 
                //         id={todo.id} 
                //         type="checkbox" 
                //         onChange={() => completeTodo()}
                //         checked={todo.completed}
                //     />
                //     <div className="taskItem__textBox">
                //         <p className={classItem}>{todo.title}, {number}, {`${todo.completed}`}</p>
                //     </div>
                //     <p className="taskItem__date">{todo.date.toLocaleString()}</p>
            //     </label>
            //     <button onClick={() => trashClick()} 
            //         type="button" 
            //         className="taskItem__btnCheck">
            //         <img className="taskItem__btnCheckIcon" src="https://img.icons8.com/material-sharp/24/000000/trash.png" />
            //     </button>
            // </li>
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