import type { Metadata } from 'next'

import './globals.css'
import '@ant-design/v5-patch-for-react-19'
import { AntdRegistry } from '@ant-design/nextjs-registry'

export const metadata: Metadata = {
    description: 'Organize and manage your tasks quickly and easily.',
    title: 'Taskly',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <AntdRegistry>
                <body>
                    {children}
                </body>
            </AntdRegistry>
        </html>
    )
}
