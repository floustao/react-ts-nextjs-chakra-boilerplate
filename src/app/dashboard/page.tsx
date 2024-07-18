"use client";

import * as React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { LanguageProvider } from "@/contexts/LanguageProvider";
import { LanguagePicker } from "@/components/LanguagePicker/LanguagePicker";
import { Countries } from "./components/Countries";

const Dashboard: React.FC = () => {
  return (
    <LanguageProvider>
      <Stack>
        <Heading as="h2">Dashboard</Heading>
        <LanguagePicker />
        <Countries />
      </Stack>
    </LanguageProvider>
  );
};

export default Dashboard;
