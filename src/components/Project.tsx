import { Stack, Typography } from "@mui/material";
import { PROJECTS } from "../utils/constant";
import GenericAccordion from "./ProjectAccordion";

const Project = () => {
  return (
    <Stack p={5}>
      <Typography variant="h4" color="#760000" mb={2}>
        Projects
      </Typography>
      <GenericAccordion projects={PROJECTS} />
    </Stack>
  );
};

export default Project;
