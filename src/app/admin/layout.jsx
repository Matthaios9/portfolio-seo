"use client";
import React from "react";

import AuthProvider from "../auth/Provider";
import { Theme, Container } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import AuthNavBar from "./AuthNavBar";
// import { usePathname, useRouter } from 'next/navigation'

const AdminLayout = ({ children }) => {
  // const pathname = usePathname()
  // const router = useRouter()
  // useEffect(() => {
  //   console.log('path', pathname);
  //   if (pathname === '/admin') {
  //     router.refresh()
  //   }

  // }, [])
  return (
    <AuthProvider>
      <Theme>
        <Container className="h-96">
          <AuthNavBar />
          {children}
        </Container>
      </Theme>
    </AuthProvider>
  );
};


export default AdminLayout;