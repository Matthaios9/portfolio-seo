import { Grid, Box, Container } from "@radix-ui/themes";
import ProjectCard from "../_component/ProjectCard";
import { PrismaClient } from "@prisma/client";
import ProjectAction from "./ProjectAction";

const ListProjectPage = async () => {
  const prisma = new PrismaClient();
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <Container>
        <ProjectAction />
        <Grid columns="3" align="center" gap="3" width="auto">
          {projects.map((item) => (
            <Box style={{}} key={item.id}>
              <ProjectCard
                title={item.title}
                description={item.description}
                id={item.id}
                image={item.imageId}
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default ListProjectPage;
