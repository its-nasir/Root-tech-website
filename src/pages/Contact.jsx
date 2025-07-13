import React, { useState } from "react";
import { Box, Typography, Container, Grid, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mkgzwgnk", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      setSubmitted(true);
      e.target.reset(); // Clear form
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Box>
      {/* Hero Section with Video Background */}
      <Box
        sx={{
          position: "relative",
          minHeight: "50vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          px: 2,
          pt: { xs: 4, md: 6 },
          pb: { xs: 4, md: 6 },
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "brightness(0.4)"
          }}
          src="/contect.mp4"
          type="video/mp4"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" fontWeight={800} gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6">
            Let’s build something great together.
          </Typography>
        </motion.div>
      </Box>

      {/* Contact Form */}
      <Box py={10} bgcolor="#f9fafb">
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Get In Touch
                </Typography>
                <Typography variant="body1" color="textSecondary" mb={4}>
                  We’d love to hear about your hiring needs. Fill out the form and we’ll get back to you shortly.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {submitted ? (
                  <Typography variant="h6" color="primary">
                    ✅ Thank you! We will contact you soon.
                  </Typography>
                ) : (
                  <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField name="name" label="Your Name" fullWidth margin="normal" required />
                    <TextField name="email" label="Your Email" type="email" fullWidth margin="normal" required />
                    <TextField name="message" label="Message" fullWidth margin="normal" required multiline rows={4} />
                    <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                      Submit
                    </Button>
                  </Box>
                )}
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
