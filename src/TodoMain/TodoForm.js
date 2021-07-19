import React, {useState} from 'react'

export default function TodoForm({ addTodo, deleteInput}) {

    const [titleInput, setTitleInput] = useState('')

    const handleFormSubmit = (event) => {
        if(titleInput !== '') {
            event.preventDefault();
            console.log("SENT VALUE", event.target.value);
            addTodo(titleInput);
            setTitleInput('')
        } event.preventDefault();
    }


    function handleChangeInput (event) {
        setTitleInput(event.target.value)
    }


    return (
        <div>
             <label className='srOnly'>Ввод текста</label>
             <form 
                className = "main__form"  
                onSubmit={(e) => handleFormSubmit(e)}>
                <input  
                    id = "main__inputId" 
                    className = "main__input" 
                    type="text" 
                    value={titleInput} 
                    onChange={(e) => handleChangeInput(e)} 
                    placeholder="Write a goal..."
                    autoComplete='off'
                />
                <button 
                    type="submit" 
                    className="main__btnCreate"
                >
                    Create
                </button>
            </form>
        </div>
    )
}