import { Card, Grid } from "@mui/material";

interface PortfolioTemplateProps {
  navbar: React.ReactNode;
  leftBody: React.ReactNode;
  rightBody: React.ReactNode;
  footer: React.ReactNode;
}

const PortfolioTemplate = ({
  navbar,
  leftBody,
  rightBody,
  footer,
}: PortfolioTemplateProps) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {navbar}
      </Grid>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Card sx={{ borderRadius: "10px" }}>{leftBody}</Card>
        </Grid>
        <Grid item xs={12}>
          <Card
            sx={{
              borderRadius: "10px",
              overflow: "auto",
              //   transform: rotate ? "rotateY(360deg)" : "rotateY(0deg)",
              transition: "transform 0.5s ease-in-out",
              perspective: "1000px",
            }}
          >
            {rightBody}
          </Card>
        </Grid>
        <Grid item xs={12}>
          {footer}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioTemplate;
