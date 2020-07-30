import React from 'react'

export const TodoForm = ({ onChange, onAdd, value }) => (
    <form>
        <label>Todo List</label>
        <input type="text" value={value} onChange={onChange} />
        <button onClick={onAdd}>Adicionar</button>
    </form>
)