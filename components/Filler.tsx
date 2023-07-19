import React from 'react'

const Filler = () => {
    return (
        <>
            <h1 className=' font-bold'>Are you sure you want to delete this item</h1>
            <div className='grid grid-cols-2'>
                <button className='bg-sky-100'>Yes</button>
                <button className='bg-red-100'>No</button>
            </div>
        </>
    )
}

export default Filler