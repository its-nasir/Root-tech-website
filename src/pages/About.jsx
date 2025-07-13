import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
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
          px: 2,
          pt: { xs: 4, md: 6 },
          pb: { xs: 4, md: 6 },
          color: "white",
          textAlign: "center",
          marginTop: 0
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
            filter: "brightness(0.4)" // darker overlay for better text visibility
          }}
          src="/about.mp4"
          type="video/mp4"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h3" fontWeight={800} gutterBottom>
            About RootTech
          </Typography>
          <Typography variant="h6">
            Building world-class tech teams that deliver results.
          </Typography>
        </motion.div>
      </Box>

      {/* Content Section */}
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
                  Our Mission
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  RootTech is dedicated to connecting innovative companies with top tech talent. Our mission is to bridge the gap between talent and opportunity by leveraging deep tech expertise and human insight.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Our Values
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  We believe in transparency, collaboration, and excellence. Our team works relentlessly to ensure that every client receives the best match, every time.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
