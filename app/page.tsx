import NewTodo from '@/components/CreateTodo'
import DeleteTodo from '@/components/DeleteTodo'
import UpdateTodo from '@/components/UpdateTodo'
import Image from 'next/image'

type typeTodo = {
  id: string
  todoDetail: string
}

async function getTodo() {
  const res = await fetch(`http://localhost:5000/todo`, { cache: 'no-store' })
  return res.json()
}

// json-server --watch db.json -p 5000
export default async function Home() {

  const todo: typeTodo[] = await getTodo()

  return (
    <main>

      <h1>Todo List</h1>
      <NewTodo></NewTodo>

      <ul>
        {todo.map((v: typeTodo, i: number, a: object) => {
          return (

            <li key={i} className='flex'>
              {`${i + 1}. ${v.todoDetail}`}
              <>
                <DeleteTodo data={v} />
                <UpdateTodo data={v} />
              </>
            </li>

          )
        })}
      </ul>

    </main>
  )
}
