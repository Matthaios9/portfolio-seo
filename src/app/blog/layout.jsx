"use client";
import AuthProvider from "../auth/Provider";
import { Theme, Container } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import BlogNavbar from "./BlogNavbar";

const AdminLayout = ({ children }) => {
  return (
    <AuthProvider>
      <Theme>
        <BlogNavbar />
        <Container className="mt-xl-8 pt-5 w-full relative" size="4">
          {children}
        </Container>
      </Theme>
    </AuthProvider>
  );
};

export default AdminLayout;
