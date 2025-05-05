import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
    description: 'Organize and manage your tasks quickly and easily',
    title: 'Taskly',
}

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html lang="en">
            <body
                className="antialiased"
            >
                {children}
            </body>
        </html>
    )
}

export default RootLayout
