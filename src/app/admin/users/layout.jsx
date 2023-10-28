"use client"
import React, { ReactNode } from 'react'

import Link from 'next/link'
import AuthProvider from '../../auth/Provider'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';

const AdminLayout = ({ children }) => {
    return (
        <AuthProvider>
            <Theme>
                {children}
            </Theme>
        </AuthProvider>
    )
}

export default AdminLayout