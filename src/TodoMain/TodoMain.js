import React from 'react'
import Section from './TodoSection'

function TodoMain(props) {
    return (
        <main className='main container'>
            <Section createBlock={props.createBlock}/>
        </main>
    )
}

export default TodoMain