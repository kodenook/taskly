import TaskItem from '@/components/task/task-item'
import { Card, CardContent } from '@/components/ui/card'
import { Dispatch, SetStateAction } from 'react'

type TaskListProps = {
    list: string[]
    setList: Dispatch<SetStateAction<string[]>>
}

const TaskList = ({ list, setList }: TaskListProps) => {
    return (
        <Card className="flex-1 overflow-y-auto">
            <CardContent>
                <ul className="flex flex-col gap-y-2">
                    {list.map((title, index) => (
                        <TaskItem key={index} remove={() => handleDeleteTask(index, setList)}>{title}</TaskItem>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

const handleDeleteTask = (indexToRemove: number, setList: Dispatch<SetStateAction<string[]>>) => {
    setList(prev => prev.filter((_, i) => i !== indexToRemove))
}

export default TaskList
