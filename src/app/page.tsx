'use client'

import TaskList from '@/components/task/task-list'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dispatch, SetStateAction, useState } from 'react'

const Home = () => {
    const [list, setList] = useState<string[]>([])

    return (
        <>
            <form action={formData => handleAddTask(formData, setList)}>
                <Card>
                    <CardContent>
                        <div className="flex flex-col gap-y-2">
                            <Label htmlFor="title">title</Label>
                            <Input autoFocus id="title" name="title" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>save</Button>
                    </CardFooter>
                </Card>
            </form>
            <TaskList list={list} setList={setList} />
        </>
    )
}

const handleAddTask = (formData: FormData, setList: Dispatch<SetStateAction<string[]>>) => {
    const title = formData.get('title') as string

    if (title) {
        setList(prev => [...prev, title])
    }
}

export default Home
