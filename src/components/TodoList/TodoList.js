import React from 'react'

export const TodoList = ({ list, onCheck, onRemove }) => {
    return (
        <div>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={item.text + index}>
                            <input type="checkbox" checked={item.isChecked} onChange={onCheck(index)} /> 
                            {item.text}
                            <span onClick={onRemove(index)}> ==> x</span> 
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}