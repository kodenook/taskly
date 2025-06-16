import { Button, Tooltip } from 'antd'
import { FaRegCircle, FaTrash } from 'react-icons/fa'
import { MdOutlineTaskAlt } from 'react-icons/md'

import type { Task } from '@/types/task'

import style from './item.module.css'

/**
 * Props for the TaskItem component
 * @extends {React.ComponentProps<'li'>} - Extends li element props
 */
type Props = React.ComponentProps<'li'> & {
    task: Task
}

/**
 * Renders a single task item with status toggle and remove actions
 * @param {Props} props - Component properties
 * @param {Task} props.task - Task data to display
 */
const TaskItem = ({ task, ...props }: Props) => {
    return (
        <li {...props} className={style.item}>
            {task.status
                ? (
                        <Button data-action="change-status" data-item={task.title} icon={<MdOutlineTaskAlt size={25} />} type="text" />
                    )
                : (
                        <Button data-action="change-status" data-item={task.title} icon={<FaRegCircle size={21} />} type="text" />
                    )}
            {task.title}
            <Tooltip title="remove">
                <Button danger data-action="remove" data-item={task.title} icon={<FaTrash size={20} />} type="link" />
            </Tooltip>
        </li>
    )
}

export default TaskItem
