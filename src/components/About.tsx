import { Avatar, Stack, Typography } from "@mui/material";
import ProfilePicture from "../assets/dp.jpg";
const About = () => {
  return (
    <Stack p={5}>
      <Typography variant="h4" color="#760000" marginBottom={3}>
        About Me
      </Typography>

      <Stack spacing={3} alignItems="center">
        <Avatar
          alt="Profile Picture"
          src={ProfilePicture}
          sx={{ width: 200, height: 200 }}
        />

        <Typography variant="body1" color="#333" textAlign="center">
          Welcome to my personal space! I'm passionate about technology and love
          to create innovative solutions. Currently, I'm exploring the world of
          web development and enjoying every bit of it.
        </Typography>
        <Typography variant="body1" color="#333" textAlign="center">
          In my free time, you can find me experimenting with new coding
          projects, reading tech blogs, or exploring the outdoors.
        </Typography>
        <Typography variant="body1" color="#333" textAlign="center">
          Feel free to connect with me on social media or drop me an email. I'm
          always excited to collaborate on interesting projects!
        </Typography>
      </Stack>
    </Stack>
  );
};

export default About;
