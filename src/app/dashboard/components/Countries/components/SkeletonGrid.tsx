import { Grid } from "@chakra-ui/react";
import { SkeletonCard } from "./SkeletonCard";

export const SkeletonGrid: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))"
      gridGap={10}
    >
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </Grid>
  );
};
