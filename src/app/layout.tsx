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
                className="antialiased h-dvh"
            >
                <Header />
                <main className="h-[calc(100%-7rem)] w-[90dvw] md:w-2/3 xl:w-1/3 mx-auto my-4 flex flex-col gap-y-4">
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout
