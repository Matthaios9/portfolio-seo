"use client";
import React, { ReactNode } from "react";

import Link from "next/link";
import AuthProvider from "../auth/Provider";
import { Theme, Container } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import AuthNavBar from "./AuthNavBar";

const AdminLayout = ({ children }) => {
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
