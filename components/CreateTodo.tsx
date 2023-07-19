"use client"
import { SyntheticEvent } from 'react'
import React, { useState } from 'react'
import MyModal from './MyModal'
import { useRouter } from 'next/navigation'


const CreateTodo = () => {

    const [form, setForm] = useState(
        {
            todo: ""
        }
    )

    const router = useRouter()

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        console.log(form)

        await fetch('http://localhost:5000/todo', {
            method: "POST",
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
        <MyModal btnText="Create Todo">
            <form onSubmit={handleSubmit} className='grid grid-cols-1 w-full h-full gap-5'>
                <label className='text-2xl' htmlFor="todo-list">Create New Todo</label>
                <input className='bg-slate-100 rounded-sm p-5' value={form.todo} placeholder='todo...' type="text" id='todo-list' onChange={(e) => setForm({ todo: e.target.value })} />
                <div className='grid grid-cols-2'>
                    <button className='p-5 bg-teal-50' >Cancel</button>
                    <button className='p-5 bg-teal-50' type='submit'>Submit</button>
                </div>
            </form>
        </MyModal>
    )
}

export default CreateTodo