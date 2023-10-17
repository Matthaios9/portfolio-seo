"use client"
import AuthProvider from '../auth/Provider'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
const AdminLayout = ({ children }) => {
    return (
        <AuthProvider>
            <Theme>
                <main className='p-5'>
                    {children}
                </main>
            </Theme>
        </AuthProvider>
    )
}

export default AdminLayout