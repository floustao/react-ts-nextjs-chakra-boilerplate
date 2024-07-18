"use client";
import * as React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export const Sidebar: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box as="aside" bg="gray.200" p={4} w="250px" {...props}>
      {children}
    </Box>
  );
};
