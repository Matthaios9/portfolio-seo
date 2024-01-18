import UsersSummary from "./UsersSummary";
import LatestUsers from "./LatestUsers";
import UsersChart from "./UsersChart";
import { Flex, Grid } from "@radix-ui/themes";


const HomeLoading = () => {
    const NO = 0;
    const YES = 0
    const APPROVED = 0;
    const DENIED = 0;

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

export default HomeLoading