"use client"
import React, { ReactNode } from 'react'

import Link from 'next/link'
import AuthProvider from '../../auth/Provider'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import AuthNavBar from './AuthNavBar'

const AdminLayout = ({ children }) => {
    return (
        <AuthProvider>
            <Theme>
                <AuthNavBar/>
                {children}
            </Theme>
        </AuthProvider>
    )
}

export default AdminLayout