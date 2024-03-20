import { Button, Stack } from "@mui/material";

export const NAVBAR_ITEMS = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Contact Me",
    path: "contacts",
  },
  {
    name: "View Resume",
    path: "resume",
  },
];

interface NavBarProps {
  onClick: (label: string) => void;
}

const NavBar = ({ onClick }: NavBarProps) => {
  return (
    <Stack
      direction="row"
      width="95vw"
      gap={10}
      height="10vh"
      sx={{
        padding: "0 20px",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      {NAVBAR_ITEMS.map((item) => (
        <Button
          variant={item.path === "resume" ? "contained" : "text"}
          key={item.name}
          sx={{ textTransform: "none" }}
          onClick={() => onClick(item.path)}
        >
          {item.name}
        </Button>
      ))}
    </Stack>
  );
};

export default NavBar;
