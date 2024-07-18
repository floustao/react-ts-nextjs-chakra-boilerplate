"use client";
import React from "react";
import { Box, Heading, BoxProps } from "@chakra-ui/react";

export const Header: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box as="header" bg="teal.500" color="white" p={4} {...props}>
      <Heading size="lg" as="h1">
        {children}
      </Heading>
    </Box>
  );
};
