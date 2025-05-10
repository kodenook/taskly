const TaskItemLoader = () => {
    return (
        <div aria-busy="true" className="flex flex-row gap-x-2 items-center border border-gray-200 rounded-md p-2 justify-between animate-pulse" role="status">
            <div className="hover:bg-gray-200 p-1 rounded-full cursor-pointer size-6 bg-gray-300"></div>
            <div className="flex-1">
                <div className="w-full h-4 bg-gray-300 rounded-md"></div>
            </div>
            <div className="w-5 h-6 bg-gray-300 rounded-md"></div>
        </div>
    )
}

export default TaskItemLoader
