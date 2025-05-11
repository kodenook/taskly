import TaskItemLoader from '@/components/task/loader/task-item-loader'
import { Card, CardContent } from '@/components/ui/card'
import { Task } from '@/types/task'
import dynamic from 'next/dynamic'

const TaskItem = dynamic(() => import('@/components/task/task-item'), { loading: () => <TaskItemLoader /> })

type TaskList = React.ComponentProps<'div'> & {
    list: Task[]
    setList: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList = ({ className, list, setList }: TaskList) => {
    const handleClick = (e: React.MouseEvent) => {
        const target = (e.target as HTMLElement).closest('[data-action="remove"]')

        if (target) {
            const index = target.getAttribute('data-index')
            if (index) {
                setList(prev => prev.filter((_, idx) => idx !== parseInt(index)))
            }
        }
    }

    return (
        <Card
            className={`h-px min-h-[13rem] ${className}`}
        >
            <CardContent className="overflow-y-auto">
                <ul className="flex flex-col gap-y-2" onClick={handleClick}>
                    {list.map((item, index) => (
                        <TaskItem index={index} item={item} key={index} />
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export default TaskList
