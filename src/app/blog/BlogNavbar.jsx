"use client";

import Skeleton from "../components/Skeleton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import "./navcss.css";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import navData from "../sections/navbar/data";

import Image from "next/image";
const AuthNavBar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <Image
            src={"/assets/img_nav.png"}
            width="40"
            height="40"
            alt="Logo"
          />
        </a>

        <NavLinks />

        {status === "unauthenticated" ? (
          <Link style={{ color: "#fff" }} href="/api/auth/signin">
            Login
          </Link>
        ) : status === "authenticated" ? (
          <div style={{ color: "#fff" }}>
            <div class="dropdown">
              {session.user.name}
              <div class="dropdown-content">
                <p>{session.user.email}</p>
                {session.user.role !== null && session.user.role === "admin" ? (
                  <Link href="/admin">Dashboard</Link>
                ) : null}
                <Link href="/api/auth/signout">Logout</Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home Page", href: "/" },
    { label: "Blogs", href: "/admin/blog/list" },
  ];

  return (
    <ul className="nav__menu">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classnames({
              "nav-link": true,
              "!text-white font-bold": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

// const AuthStatus = () => {
//   const { status, data: session } = useSession();

//   if (status === "loading") return <Skeleton width="3rem" />;

//   if (status === "unauthenticated")
//     return (
//       <Link className="nav-link" href="/api/auth/signin">
//         Login
//       </Link>
//     );

//   return (
//     <Box>
//       <DropdownMenu.Root>
//         <DropdownMenu.Trigger>
//           <Avatar
//             src={session?.user?.image}
//             fallback="?"
//             size="2"
//             radius="full"
//             className="cursor-pointer"
//             referrerPolicy="no-referrer"
//           />
//         </DropdownMenu.Trigger>
//         <DropdownMenu.Content>
//           <DropdownMenu.Label>
//             <Text size="2">{session.user.email}</Text>
//           </DropdownMenu.Label>
//           <DropdownMenu.Item>
//             <Link href="/api/auth/signout">Log out</Link>
//           </DropdownMenu.Item>
//         </DropdownMenu.Content>
//       </DropdownMenu.Root>
//     </Box>
//   );
// };

export default AuthNavBar;
