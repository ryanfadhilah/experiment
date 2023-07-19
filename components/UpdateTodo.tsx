"use client"

import React, { useState } from 'react'
import MyModal from './MyModal'
import { useRouter } from 'next/navigation'
type typeData = {
    id: string
    todoDetail: string
}

type typeTodo = {
    data: typeData
}
const UpdateTodo = ({ data }: typeTodo) => {

    const [form, setForm] = useState(
        {
            todo: ""
        }
    )

    const router = useRouter()

    const handleSubmit = async (id: string) => {
        console.log(form)
        await fetch(`http://localhost:5000/todo/${data.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todoDetail: form.todo
            })
        })

        setForm({ todo: "" })
        router.push("/")
        console.log(form)

    }

    return (
        <MyModal
            btnText="Update Todo"
            className=''
        >
            <div className='grid grid-cols-1 w-full h-full gap-5'>
                <label className='text-2xl' htmlFor="todo-list">Update Todo</label>
                <input className='bg-slate-100 rounded-sm p-5' value={form.todo} placeholder={data.todoDetail} type="text" id='todo-list' onChange={(e) => setForm({ todo: e.target.value })} />
                <div className='grid grid-cols-2'>
                    <button className='p-5 bg-teal-50' >Cancel</button>
                    <button className='p-5 bg-teal-50' onClick={() => handleSubmit(data.id)}>Submit</button>
                </div>
            </div>
        </MyModal>
    )
}

export default UpdateTodo