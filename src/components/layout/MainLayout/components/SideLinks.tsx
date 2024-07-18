"use client";

import React from "react";
import { Stack, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
];

export const SideLinks: React.FC = () => {
  const pathname = usePathname();
  return (
    <Stack>
      {links.map((link) => {
        return (
          <ChakraLink
            as={NextLink}
            key={link.name}
            href={link.href}
            color={pathname === link.href ? "blue.400" : "inherit"}
            textDecoration={pathname === link.href ? "underline" : "none"}
          >
            {link.name}
          </ChakraLink>
        );
      })}
    </Stack>
  );
};
