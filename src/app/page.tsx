'use client'

import TaskForm from '@/components/task/task-form'
import TaskList from '@/components/task/task-list'
import { Task } from '@/types/task'
import { useState } from 'react'

const Home = () => {
    const [list, setList] = useState<Task[]>([])

    return (
        <>
            <div className="py-10 px-4 md:px-0 max-w-[31rem] h-full mx-auto flex flex-col gap-y-2">
                <TaskForm setList={setList} />
                <TaskList className="grow" list={list} setList={setList} />
            </div>
        </>
    )
}

export default Home
