import { Task } from '@/types/task'
import { Circle, CircleCheckBig, Trash2 } from 'lucide-react'
import { useState } from 'react'

type TaskItem = React.ComponentProps<'li'> & {
    index: number
    item: Task
}

const TaskItem = ({ className, index, item, ...props }: TaskItem) => {
    const [ready, setReady] = useState<boolean>(false)

    return (
        <li
            className={`flex flex-row gap-x-2 items-center border border-gray-200 rounded-md p-1 justify-between ${className}`}
            {...props}
        >
            <span className="hover:bg-gray-200 p-1 rounded-md cursor-pointer" onClick={() => setReady(!ready)}>
                {!ready ? <Circle /> : <CircleCheckBig />}
            </span>
            <span className="flex-1">
                {item.title}
            </span>
            <Trash2 className="text-red-500 cursor-pointer" data-action="remove" data-index={index} />
        </li>
    )
}

export default TaskItem
