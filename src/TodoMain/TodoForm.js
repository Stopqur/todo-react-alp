import React, {useState} from 'react'
import { Box, InputLabel, FormControl, Input, Button } from '@material-ui/core';

export default function TodoForm({titleInput, colorText, currentTime, handleChangeInput, addTodo, deleteInput, changeTime, changeDate, currentDate}) {

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
        <Box mt={3} pb={5}>
            <InputLabel>Ввод текста</InputLabel>
            <FormControl component='form' style={ { display: 'flex'} } onSubmit={(e) => handleFormSubmit(e)}>
                <Box display='flex' justifyContent="space-around"> 
                    <Input 
                        className={colorText}
                        style={ { width: '70%'} }
                        type="text"
                        value={titleInput}
                        onChange={handleChangeInput} 
                        placeholder="Write a goal..."
                    >
                    </Input>
                    <Button variant="contained" color="primary" style={ { width: '20%', marginLeft: '90px'} } type="submit">Create</Button>
                </Box>
            </FormControl>
        </Box>


        // <div>
        //      <label className='srOnly'>Ввод текста</label>
        //      <form 
        //         className = "main__form"  
        //         onSubmit={(e) => handleFormSubmit(e)}>
        //         <input  
        //             id = "main__inputId" 
        //             className = "main__input" 
        //             type="text" 
        //             value={titleInput} 
        //             onChange={handleChangeInput} 
        //             placeholder="Write a goal..."
        //             autoComplete='off'
        //         />
        //         <button 
        //             type="submit" 
        //             className="main__btnCreate"
        //         >
        //             Create
        //         </button>
        //     </form>
        // </div>
    )
}