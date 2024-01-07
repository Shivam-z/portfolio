import { Button, Stack } from "@mui/material";

const NAVBAR_ITEMS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
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
          key={item.name}
          sx={{ color: "grey", textTransform: "none" }}
          onClick={() => onClick(item.name)}
        >
          {item.name}
        </Button>
      ))}

      <Button variant="contained" color="primary">
        view resume
      </Button>
    </Stack>
  );
};

export default NavBar;
