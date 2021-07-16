import React from 'react'
import Section from './TodoSection'
import { Container } from '@material-ui/core';

function TodoMain(props) {
    return (
        <Container>
            <Section createBlock={props.createBlock}/>
        </Container>

    )
}

export default TodoMain