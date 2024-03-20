import { Card, CardContent, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" color="brown">
          Made with ❤️ by Shivam Kumar
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; 2024 shivDroid. All rights reserved.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Footer;
