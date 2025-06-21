import type { Metadata } from 'next'

import { AntdRegistry } from '@ant-design/nextjs-registry'

import './globals.css'
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
            <AntdRegistry>
                <body>
                    {children}
                </body>
            </AntdRegistry>
        </html>
    )
}

export default RootLayout
