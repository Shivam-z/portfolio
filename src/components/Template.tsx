import { Card, CardContent, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Profile from "./Profile";

interface TemplateProps {
  children: React.ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  const [rotate, setRotate] = useState(false);
  const navigate = useNavigate();
  const handleClick = (label: string) => {
    navigate(`/${label.toLowerCase()}`);
    setRotate(!rotate);
  };
  return (
    <Stack gap={5}>
      <NavBar onClick={handleClick} />
      <CardContent>
        <Stack direction="row" gap={10}>
          <Card sx={{ height: "70vh", width: "30vw", borderRadius: "10px" }}>
            <Profile />
          </Card>
          <Card
            sx={{
              height: "70vh",
              width: "60vw",
              borderRadius: "10px",
              overflow: "auto",
              transform: rotate ? "rotateY(360deg)" : "rotateY(0deg)",
              transition: "transform 0.5s ease-in-out",
              perspective: "1000px",
            }}
          >
            {children}
          </Card>
        </Stack>
      </CardContent>
      <Footer />
    </Stack>
  );
};

export default Template;
