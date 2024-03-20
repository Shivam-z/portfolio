import GradeIcon from "@mui/icons-material/Grade";
import {
  Divider,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

const Info = () => {
  const steps = [
    {
      label: "Graduation",
      school: "College of Engineering and Management, Kolaghat",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      year: "2023",
      aggregate: "9.3 CGPA",
    },
    {
      label: "Intermediate",
      school: "Anugrah Narayan College",
      year: "2018",
    },
    {
      label: "Schooling",
      school: "Holy Mission Secondary School",
      year: "2016",
      aggregate: "10 CGPA",
    },
  ];

  const activeStep = 3;

  return (
    <Stack p={5}>
      <Typography variant="h4" color="#760000">
        Education
      </Typography>

      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Typography variant="h6" color="#000000">
                  {step.label}: {step.school} ({step.year})
                </Typography>
                {step.degree && (
                  <>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body1" color="#000000">
                      Degree: {step.degree}
                    </Typography>
                  </>
                )}
                {step.aggregate && (
                  <>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body1" color="#000000">
                      Aggregate: {step.aggregate}
                      <GradeIcon
                        sx={{
                          fontSize: 18,
                          verticalAlign: "middle",
                          marginLeft: 1,
                        }}
                      />
                    </Typography>
                  </>
                )}
              </Paper>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default Info;
