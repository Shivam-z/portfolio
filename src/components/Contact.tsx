import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "../App.css";

interface IContact {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const handleClick = () => {
    console.log("Contact Form Submitted");
  };

  const [contact, setContact] = useState<IContact>({
    name: "",
    email: "",
    message: "",
  });
  return (
    <Stack p={5}>
      <Typography variant="h4" color="#760000" marginBottom={3}>
        Contact Me
      </Typography>

      <Stack spacing={3}>
        <Typography
          variant="body1"
          fontFamily="Madimi One"
          fontSize={30}
          textAlign={"center"}
        >
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me via email or connect with me on social media.
        </Typography>

        <Stack gap={5}>
          <TextField
            id="name"
            label="Name"
            type="text"
            variant="outlined"
            sx={{ borderRadius: "100px" }}
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />

          <TextField
            id="message"
            label="Message"
            multiline
            variant="outlined"
            rows={4}
            value={contact.message}
            onChange={(e) =>
              setContact({ ...contact, message: e.target.value })
            }
          />
          <Button onClick={handleClick} variant="contained">
            Send Message
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Contact;
