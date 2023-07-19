"use client"

import React from 'react'
import MyModal from './MyModal'
import { useRouter } from 'next/navigation'

type typeData = {
    id: string
    todoDetail: string
}

type typeTodo = {
    data: typeData
}

const DeleteTodo = ({ data }: typeTodo) => {

    const router = useRouter()

    async function handleDelete(id: string) {
        await fetch(`http://localhost:5000/todo/${id}`, {
            method: "DELETE"
        })
        router.push("/")
    }

    return (
        <MyModal
            btnText="delete"
            className="bg-black text-white px-4 py-2 rounded-sm hover:bg-teal-500"
        >
            <div className='grid grid-cols-1 gap-5'>
                <h1 className='text-2xl'>Are you sure you want to delete</h1>
                <p className='bg-slate-100 p-5 rounded-md'>"{data.todoDetail}"</p>
                <p>from todo list</p>
                <div className='grid grid-cols-2 bg-black text-white'>
                    <button onClick={() => handleDelete(data.id)} className='p-5 hover:bg-teal-500'>Yes</button>
                    <button className='p-5 hover:bg-teal-500'>No</button>
                </div>
            </div>
        </MyModal>
    )
}

export default DeleteTodo