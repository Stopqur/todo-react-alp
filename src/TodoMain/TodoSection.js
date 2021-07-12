import React, {useState} from 'react'

import TodoTitle from './TodoTitle'
import TodoForm from './TodoForm'
import Options from './Options'
import TodoItem from './TodoItem'

function TodoSection({createBlock}) {

    const [items, setItems] = useState([]);

    const handleAddItem = data => {        
        setItems([...items, data]);
    }

    

    console.log(items);

    return (
        <section className='main__menu'>
            <TodoTitle />    
            <TodoForm handleAddItem={handleAddItem}/>
            <Options />
            {items.map(text =><TodoItem text={text} />)}
        </section>
    )
}

export default TodoSection