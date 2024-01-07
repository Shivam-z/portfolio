import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Stack,
  Typography,
} from "@mui/material";

interface Project {
  title: string;
  content: string;
  techStack: string[];
  github: string;
}

interface ProjectsAccordionProps {
  projects: Project[];
}

const ProjectsAccordion = ({ projects }: ProjectsAccordionProps) => {
  return (
    <Stack gap={2}>
      {projects.map((project, index) => (
        <Accordion
          key={index}
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid #e0e0e0",
            "&:last-child": { borderBottom: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "#f5f5f5",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
              {project.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "#f9f9f9", padding: "16px" }}
          >
            <Typography variant="body1" sx={{ color: "#555" }}>
              {project.content}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ marginTop: 2, color: "#777" }}
            >
              Tech Stack: {project.techStack.join(", ")}
            </Typography>
            {project.github && (
              <Typography
                variant="subtitle2"
                sx={{ marginTop: 1, color: "#777" }}
              >
                GitHub:{" "}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.github}
                </Link>
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default ProjectsAccordion;
