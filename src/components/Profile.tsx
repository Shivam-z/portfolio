import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Animation from "../utils/Animation.json";
const styledProfile = {
  position: "relative",
  left: "10%",
};

const Profile = () => {
  return (
    <Stack>
      <Stack sx={styledProfile}>
        <Lottie animationData={Animation} loop={true} />
      </Stack>
      <Typography textAlign="center" variant="h4" color="#760000">
        Hi, I'm Shivam
      </Typography>
      <Typography textAlign="center" variant="h6" color="#760000">
        I'm a Full Stack Developer at Zemoso Technologies
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        gap={3}
        mt={2}
        color="#760000"
      >
        <GitHubIcon
          sx={{ cursor: "pointer" }}
          onClick={() => window.open("https://github.com/Shivam-z", "_blank")}
        />
        <LinkedInIcon
          sx={{ cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/shivam-kumar-b93126224/",
              "_blank"
            )
          }
        />
        <InstagramIcon
          sx={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.instagram.com/shivamk_2012/", "_blank")
          }
        />
      </Stack>
    </Stack>
  );
};

export default Profile;
