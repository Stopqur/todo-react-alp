import React from 'react'
import FormInput from './FormInput'
import FormButton from './FormButton'

export default function TodoForm({handleAddItem}) {
    const hanleFormSubmit = (e) => {
        e.preventDefault(); 
        handleAddItem('text2');
    }

    return (
        <div>
             <label className='srOnly'>Ввод текста</label>
             <form className = "main__form" onSubmit={hanleFormSubmit} >
                <FormInput />
                <FormButton onClick={() => handleAddItem('text')}/>
            </form>
        </div>
    )
}