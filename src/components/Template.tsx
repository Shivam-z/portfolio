import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Card,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SkLogo from "../assets/sk_logo.jpg";
import Footer from "./Footer";
import NavBar, { NAVBAR_ITEMS } from "./NavBar";
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

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const isSmallScreen = useMediaQuery("(max-width:1070px)");

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {NAVBAR_ITEMS.map((text) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton onClick={() => handleClick(text.name)}>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Stack gap={5}>
      <Stack
        direction="row"
        width="95vw"
        gap={10}
        height="10vh"
        justifyContent="space-between"
        sx={{
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          position: "fixed",
          top: "0px",
        }}
      >
        <img src={SkLogo} alt="logo" height={80} width={80} />
        {isSmallScreen ? (
          <div>
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
        ) : (
          <NavBar onClick={handleClick} />
        )}
      </Stack>
      {isSmallScreen ? (
        <Stack direction="column" gap={5} marginTop={10} marginRight={5}>
          <Card sx={{ p: 5, width: "70vw", mt: "10px" }}>
            <Profile />
          </Card>
          <Card sx={{ p: 5, width: "70vw" }}>{children}</Card>
        </Stack>
      ) : (
        <Stack direction="row" gap={5} marginTop={15}>
          <Card sx={{ width: "30vw", padding: 5 }}>
            <Profile />
          </Card>
          <Card
            sx={{
              width: "60vw",
              padding: "5 20",
              overflow: "auto",
              transform: rotate ? "rotateY(360deg)" : "rotateY(0deg)",
              transition: "transform 0.5s ease-in-out",
              perspective: "1000px",
            }}
          >
            {children}
          </Card>
        </Stack>
      )}
      <Footer />
    </Stack>
  );
};

export default Template;
