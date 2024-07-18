"use client";

import React from "react";
import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { SideLinks } from "./components/SideLinks";

export const MainLayout: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex direction="column" minH="100vh" {...props}>
      <Header>My Header</Header>
      <Flex flex="1">
        <Sidebar>
          <SideLinks />
        </Sidebar>
        <Box flex="1" p={4}>
          {children}
        </Box>
      </Flex>
      <Footer>My Footer</Footer>
    </Flex>
  );
};
