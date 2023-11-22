"use client";
import React, { ReactNode } from "react";

import Link from "next/link";
import AuthProvider from "../auth/Provider";
import { Theme, Container } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import BlogNavbar from "./BlogNavbar";

const AdminLayout = ({ children }) => {
  return (
    <AuthProvider>
      <Theme appearance="dark" color="white">
        <BlogNavbar />
        <Container className="mt-5 pt-5 w-full" size="4">
          {children}
        </Container>
      </Theme>
    </AuthProvider>
  );
};

export default AdminLayout;
