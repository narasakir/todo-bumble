import React, { useState } from 'react'

import { TodoList } from '../TodoList'
import { TodoForm } from '../TodoForm'

export const Todo = ( ) => {
    const [item, setItem] = useState('')
    const [list, setList] = useState([])

    const handleAdd = (e) => {
        e.preventDefault()
        setList([...list, { text: item , isChecked: true }])
    }

    const handleCheck = (id) => () => {
        const updateList = list.map((item, index) => 
            id === index ? {...item, isChecked: !item.isChecked } : item)

        setList(updateList)
    }

    const handleRemove = (id) => () => {
        const updateList = list.filter((item, index) => id !== index)
        setList(updateList)
    } 

    const handleChange = (e) => setItem(e.target.value)

    return (
        <div>
            <TodoForm onChange={handleChange} onAdd={handleAdd} value={item} />
            <TodoList list={list} onCheck={handleCheck} onRemove={handleRemove} />
        </div>
    )
}