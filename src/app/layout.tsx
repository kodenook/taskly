import type { Metadata } from 'next'

import './globals.css'
import Header from '@/components/layout/header'

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
                className="antialiased h-dvh flex flex-col"
            >
                <Header />
                <main className="flex-1">
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout
