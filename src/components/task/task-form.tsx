'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Task } from '@/types/task'
import Form from 'next/form'

type TaskForm = React.ComponentProps<'div'> & {
    setList: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskForm = ({ className, setList }: TaskForm) => {
    return (
        <Card
            className={`${className}`}
        >
            <CardContent>
                <Form action={(formData: FormData) => handleSubmit(formData, setList)} id="form">
                    <Label htmlFor="title">title</Label>
                    <Input id="title" name="title" />
                </Form>
            </CardContent>
            <CardFooter className="justify-end">
                <Button form="form" type="submit">save</Button>
            </CardFooter>
        </Card>
    )
}

const handleSubmit = (formData: FormData, setList: React.Dispatch<React.SetStateAction<Task[]>>) => {
    const title = (formData.get('title') as string).trim()

    if (!title) return

    const task: Task = {
        title,
    }

    setList(prevList => [...prevList, task])
}

export default TaskForm
