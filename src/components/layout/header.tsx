import { ClipboardList } from 'lucide-react'

const Header = ({ className, ...props }: React.ComponentProps<'header'>) => {
    return (
        <header
            className={`${className} flex gap-x-2 items-center`}
            {...props}
        >
            <ClipboardList className="size-12" />
            <h1 className="capitalize font-serif italic">taskly</h1>
        </header>
    )
}

export default Header
