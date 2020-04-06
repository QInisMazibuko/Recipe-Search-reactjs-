import React from 'react';

const Form = props=>(

    <form onSubmit={props.getRecipe} style={{ marginbottom:"2rem"}}>
        <input className='form__input' type='text' name='recipeName' placeholder='ingredient..'/>
        <button className='form__button'>Search</button>
    </form>
)

export default Form;