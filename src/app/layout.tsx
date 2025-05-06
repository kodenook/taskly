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
                className="antialiased h-dvh grid grid-rows-[5rem_1fr]"
            >
                <Header className="px-8 text-5xl bg-gray-500 text-white" />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout
