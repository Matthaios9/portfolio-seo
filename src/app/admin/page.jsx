import prisma from "../../../prisma/client";
import UsersSummary from "./UsersSummary";
import LatestUsers from "./LatestUsers";
import UsersChart from "./UsersChart";
import { Flex, Grid } from "@radix-ui/themes";


export default async function Home() {
  const NO = await prisma.user.count({
    where: { resume_requested: "NO" },
  });
  const YES = await prisma.user.count({
    where: { resume_requested: "YES" },
  });
  const APPROVED = await prisma.user.count({
    where: { resume_requested: "APPROVED" },
  });
  const DENIED = await prisma.user.count({
    where: { resume_requested: "DENIED" },
  });

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <UsersSummary NO={NO} YES={YES} APPROVED={APPROVED} DENIED={DENIED} />
        <UsersChart YES={YES} NO={NO} APPROVED={APPROVED} DENIED={DENIED} />
      </Flex>
      <LatestUsers />
    </Grid>
  );
}
