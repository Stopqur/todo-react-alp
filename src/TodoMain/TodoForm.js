import React, {useState} from 'react'

export default function TodoForm({titleInput, currentTime, handleChangeInput, addTodo, deleteInput, changeTime, changeDate, currentDate}) {

    const handleFormSubmit = (event) => {
        if(titleInput !== '') {
            event.preventDefault();
            console.log("SENT VALUE", event.target.value);
            addTodo(titleInput);
            deleteInput()
        } event.preventDefault();
    }

    const [value, setValue] = useState('');

    // const reset = () => {
    //     setValue('');
    // }

    // function handleChangeInput (e) {
    //     setValue(e.target.value)
    // }

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
                    onChange={handleChangeInput} 
                    placeholder="Write a goal..."
                    autoComplete='off'
                />
                <button 
                    type="submit" 
                    className="main__btnCreate"
                >
                    Create
                </button>
                {/* <FormInput onClickAdd={onClickAdd} changeValue={valueInput} onChange={onChangeTodo}/> */}
                {/* <FormButton onClick={onClickAdd()}/> */}
            </form>
        </div>
    )
}