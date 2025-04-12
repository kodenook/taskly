import { Circle, CircleCheckBig, Trash2 } from 'lucide-react'
import { useState } from 'react'

type TaskItemProps = React.ComponentProps<'li'> & {
    remove?: () => void
}

const TaskItem = ({ children, className = '', remove, ...props }: TaskItemProps) => {
    const [ready, setReady] = useState<boolean>(false)

    return (
        <li
            {...props}
            className={`border px-2 min-h-10 rounded-md flex justify-between items-center ${className}`}
        >
            <div className="flex flex-row items-center gap-x-2">
                {ready
                    ? (
                            <CircleCheckBig className="cursor-pointer hover:bg-gray-200/70 min-w-3xl p-1 rounded-sm flex-none" onClick={() => setReady(!ready)} />
                        )
                    : (
                            <Circle className="cursor-pointer hover:bg-gray-200/70 p-1 rounded-sm flex-none" onClick={() => setReady(!ready)} />
                        )}
                {children}
            </div>
            <Trash2 className="text-red-400 cursor-pointer flex-none" onClick={remove} />
        </li>
    )
}

export default TaskItem
