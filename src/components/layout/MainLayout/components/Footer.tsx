"use client";
import * as React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export const Footer: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box as="footer" bg="teal.500" color="white" p={4} mt="auto" {...props}>
      {children}
    </Box>
  );
};
