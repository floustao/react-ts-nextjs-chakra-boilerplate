"use client";

import {
  SkeletonText,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from "@chakra-ui/react";

export const SkeletonCard: React.FC = () => {
  return (
    <Card cursor="pointer">
      <CardHeader>
        <Heading size="md">
          <SkeletonText noOfLines={1} />
        </Heading>
      </CardHeader>

      <CardBody>
        <SkeletonText noOfLines={3} />
      </CardBody>
    </Card>
  );
};
