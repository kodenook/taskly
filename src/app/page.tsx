'use client'

import { useVirtualizer } from '@tanstack/react-virtual'
import { Button, Card, Form, Input } from 'antd'
import { FormProps, useForm } from 'antd/es/form/Form'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'

import type { Task, TaskFormCreate } from '@/types/task'

import ItemSkeleton from '@/components/task/item_skeleton/item_skeleton'

import style from './page.module.css'

/**
 * Dynamically imported TaskItem component with loading state
 * Uses ItemSkeleton as a placeholder while loading
 */
const TaskItem = dynamic(() => import('@/components/task/item/item'), {
    loading: () => <ItemSkeleton />,
})

/**
 * Home page component that displays a task management interface
 * Features:
 * - Task creation form
 * - Virtualized list of tasks
 * - Task status toggle
 * - Task removal
 * @returns React component with task management UI
 */
const Home = () => {
    const [form] = useForm()
    const [data, setData] = useState<Task[]>([])
    const parentRef = useRef<HTMLDivElement | null>(null)

    /**
     * Handles form submission for creating new tasks
     * @param task - The task data from the form
     */
    const onFinish: FormProps<TaskFormCreate>['onFinish'] = (task) => {
        const newTask: Task = {
            ...task,
            status: false,
        }
        setData(prev => [...prev, newTask])
        form.resetFields()
    }

    /**
     * Virtual list configuration for efficient task rendering
     * Uses TanStack Virtual for handling large lists
     */
    const rowVirtualizer = useVirtualizer({
        count: data.length,
        estimateSize: () => 60,
        getScrollElement: () => parentRef.current,
        overscan: 5,
    })

    /**
     * Handles task actions (status toggle and removal) through event delegation
     * @param event - Click event from the task list container
     */
    const handleClick: React.MouseEventHandler = (event) => {
        const itemElement = (event.target as HTMLElement).closest('[data-action]')
        if (!itemElement) return

        const action = itemElement.getAttribute('data-action')
        const itemValue = itemElement.getAttribute('data-item')

        if (!action || !itemValue) return

        setData((prevData) => {
            switch (action) {
                case 'change-status':
                    return prevData.map(task =>
                        task.title === itemValue ? { ...task, status: !task.status } : task,
                    )
                case 'remove':
                    return prevData.filter(task => task.title !== itemValue)
                default:
                    return prevData
            }
        })
    }

    return (
        <div className={style.task}>
            <Card>
                <Form
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item<TaskFormCreate>
                        label="Title"
                        name="title"
                        rules={[{ required: true }]}
                    >
                        <Input autoFocus />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button htmlType="submit" type="primary">Save</Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card onClick={handleClick} ref={parentRef}>
                <ul
                    style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        position: 'relative',
                    }}
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const task = data[virtualRow.index]
                        return (
                            <TaskItem
                                data-index={virtualRow.index}
                                key={virtualRow.key}
                                style={{
                                    left: 0,
                                    position: 'absolute',
                                    top: 0,
                                    transform: `translateY(${virtualRow.start}px)`,
                                    width: '100%',
                                }}
                                task={task}
                            />
                        )
                    })}
                </ul>
            </Card>
        </div>
    )
}

export default Home
