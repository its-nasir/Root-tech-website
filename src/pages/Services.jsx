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
            filter: "brightness(0.4)" // for better text readability
          }}
          src="/service.mp4"
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

      {/* About Content Section */}
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

      {/* Services Section */}
      <Box py={10} bgcolor="#ffffff">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
              Our Services
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              paragraph
            >
              Explore the range of services we offer to help your business grow with the right talent.
            </Typography>
          </motion.div>
          <Grid container spacing={4} mt={2}>
            {[
              {
                title: "Developer Hiring",
                desc: "Get matched with top software engineers tailored to your needs."
              },
              {
                title: "Team Augmentation",
                desc: "Quickly scale your development team with pre-vetted professionals."
              },
              {
                title: "Tech Consulting",
                desc: "Receive expert guidance on architecture, scaling, and innovation."
              }
            ].map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box p={3} boxShadow={2} borderRadius={3} textAlign="center">
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
