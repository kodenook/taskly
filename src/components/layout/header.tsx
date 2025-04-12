import { ClipboardList } from 'lucide-react'

const Header = () => {
    return (
        <header className="flex gap-x-2 items-center h-20 px-8 text-5xl bg-gray-500 text-white">
            <ClipboardList className="size-12" />
            <h1 className="capitalize font-serif italic">taskly</h1>
        </header>
    )
}

export default Header
