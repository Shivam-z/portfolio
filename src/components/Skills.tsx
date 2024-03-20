import LinearProgress from "@mui/joy/LinearProgress";
import { List, Stack, Typography } from "@mui/material";
import JavaIcon from "../assets/JavaIcon.svg";
import JestIcon from "../assets/JestIcon.svg";
import MuiIcon from "../assets/MuiIcon.svg";
import MySqlIcon from "../assets/MySqlIcon.svg";
import TypescriptIcon from "../assets/TypescriptIcon.svg";
import GraphQLIcon from "../assets/graphqlIcon.svg";
import MicroserviceIcon from "../assets/microservicesIcon.svg";
import ReactIcon from "../assets/react.svg";
import RestApiIcon from "../assets/restApi.png";
import SpringBootIcon from "../assets/springBootIcon.svg";
import SpringIcon from "../assets/springIcon.svg";

const Skills = () => {
  const skillsData = [
    { id: 1, name: "React", icon: ReactIcon, progress: 90 },
    { id: 2, name: "Typescript", icon: TypescriptIcon, progress: 80 },
    { id: 3, name: "Jest Unit Testing", icon: JestIcon, progress: 80 },
    { id: 4, name: "Material UI", icon: MuiIcon, progress: 90 },
    { id: 5, name: "JAVA", icon: JavaIcon, progress: 80 },
    { id: 6, name: "Spring MVC", icon: SpringIcon, progress: 75 },
    { id: 7, name: "SpringBoot 3", icon: SpringBootIcon, progress: 80 },
    {
      id: 8,
      name: "Microservices",
      icon: MicroserviceIcon,
      progress: 90,
    },
    { id: 9, name: "MYSQL", icon: MySqlIcon, progress: 90 },
    { id: 10, name: "GraphQL", icon: GraphQLIcon, progress: 80 },
    { id: 11, name: "Rest APIs", icon: RestApiIcon, progress: 90 },
  ];

  return (
    <Stack p={5}>
      <Typography variant="h4" color="#760000">
        Skills
      </Typography>
      <List>
        {skillsData.map((skill, index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <img src={skill.icon} alt={skill.name} width="30px" />
            <Typography variant="h6" color="#760000">
              {skill.name}
            </Typography>
            <Stack sx={{ width: "50%", justifyContent: "center" }}>
              <LinearProgress determinate value={skill.progress} />
            </Stack>
          </Stack>
        ))}
      </List>
    </Stack>
  );
};

export default Skills;
