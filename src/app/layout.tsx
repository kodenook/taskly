import type { Metadata } from 'next'

import './globals.css'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import '@ant-design/v5-patch-for-react-19'

export const metadata: Metadata = {
    description: 'Organize and manage your tasks quickly and easily.',
    title: 'Taskly',
}

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    return (
        <html lang="en">
            <body>
                <AntdRegistry>{children}</AntdRegistry>
            </body>
        </html>
    )
}

export default RootLayout
