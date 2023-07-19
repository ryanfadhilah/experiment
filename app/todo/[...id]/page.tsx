import React from 'react'

const TodoItem = ({ params }: { params: { id: string } }) => {
    return (
        <div>TodoItem {params.id}</div>
    )
}

export default TodoItem