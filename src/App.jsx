import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";




export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const navLinks = ["Home", "About", "Services", "Contact"]; // ✅ Add this line

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/687309fd3606072bf849feb9/1j00lu1qu";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);



  return (
    <Box>
      {/* Navigation Bar */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10,
            backgroundColor: "rgba(15, 23, 42, 0.4)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Container maxWidth="lg">
            <Box display="flex" justifyContent="space-between" alignItems="center" py={2}>
              <Box display="flex" alignItems="center">
                <Typography variant="h5" fontWeight={700} sx={{ color: "white" }}>
                  <Box component="span" sx={{ fontWeight: 400, color: "#38bdf8" }}>Root</Box>
                  <Box component="span" sx={{ fontWeight: 700 }}>Tech</Box>
                </Typography>
              </Box>
              {isMobile ? (
                <Box>
                  <IconButton onClick={handleMenu} sx={{ color: "white" }}>
                    <MenuIcon />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    {navLinks.map((item) => (
                      <MenuItem
                        key={item}
                        component={Link}
                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        onClick={handleClose}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Box display="flex" alignItems="center">
                  {navLinks.map((item) => (
                    <Button
                      key={item}
                      component={Link}
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      sx={{
                        color: "white",
                        fontWeight: 500,
                        textTransform: "none",
                        mx: 1,
                        fontSize: "1rem",
                        "&:hover": { color: "#38bdf8" },
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              )}
            </Box>
          </Container>
        </Box>
      </motion.div>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          pt: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
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
            filter: "brightness(0.4)",
          }}
          src="/mixkit-experienced-programmer-working-on-a-large-computer-41639-full-hd.mp4"
          type="video/mp4"
        />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" fontWeight={800} gutterBottom>
              Build Better Tech Teams
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
              We help companies hire exceptional developers faster and smarter.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Logos */}
      <Box py={10} bgcolor="#f9fafb">
        <Container>
          <Typography variant="h5" align="center" fontWeight={600} gutterBottom>
            Trusted By Teams Around The World
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center" mt={4}>
            {[
              { src: "https://logo.clearbit.com/google.com", alt: "Google" },
              { src: "https://logo.clearbit.com/microsoft.com", alt: "Microsoft" },
              { src: "https://logo.clearbit.com/amazon.com", alt: "Amazon" },
              { src: "https://logo.clearbit.com/meta.com", alt: "Meta" },
              { src: "https://logo.clearbit.com/netflix.com", alt: "Netflix" },
            ].map((logo, i) => (
              <Grid item xs={6} md={2} key={i}>
                <motion.img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ width: "100%", maxHeight: 60, objectFit: "contain", opacity: 0.8 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box py={10} bgcolor="#ffffff">
        <Container>
          <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
            Why Companies Choose RootTech
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
            Streamline your hiring process with vetted, high-quality developers who deliver results.
          </Typography>
          <Grid container spacing={4} mt={2}>
            {["Top Talent", "Fast Hiring", "Scalable Teams"].map((title, i) => (
              <Grid item xs={12} md={4} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <Box p={3} boxShadow={3} borderRadius={3}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {title === "Top Talent"
                        ? "Access pre-screened developers with exceptional skills."
                        : title === "Fast Hiring"
                        ? "Fill roles quickly without compromising on quality."
                        : "Easily scale your development team as your business grows."}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box py={10} bgcolor="#f9fafb">
        <Container>
          <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
            How It Works
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
            Simple steps to build your dream tech team with RootTech.
          </Typography>
          <Grid container spacing={4} mt={4}>
            {["Tell Us Your Needs", "Get Matched", "Start Building"].map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Box textAlign="center" px={3}>
                    <Typography variant="h2" fontWeight={600} color="primary" gutterBottom>
                      {index + 1}
                    </Typography>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {step}
                    </Typography>
                    <Typography color="textSecondary">
                      {step === "Tell Us Your Needs"
                        ? "Share your goals and ideal developer profile."
                        : step === "Get Matched"
                        ? "We’ll introduce you to top candidates fast."
                        : "Begin collaborating with your new team immediately."}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box py={10} bgcolor="#ffffff">
        <Container>
          <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
            What Our Clients Say
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
            Real feedback from our satisfied clients.
          </Typography>
          <Grid container spacing={4} mt={2}>
            {[
              {
                name: "John Doe",
                role: "CTO, TechCorp",
                text: "RootTech helped us scale our engineering team rapidly without compromising quality.",
                img: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Sarah Ali",
                role: "Founder, CodeSolutions",
                text: "Their developer network is truly impressive. We got matched with experts within days.",
                img: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Raj Mehra",
                role: "Product Head, InnoSoft",
                text: "Professional, fast, and reliable – RootTech has been an excellent hiring partner.",
                img: "https://randomuser.me/api/portraits/men/76.jpg"
              }
            ].map((review, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box p={4} boxShadow={3} borderRadius={3}>
                    <Typography variant="body1" gutterBottom>
                      "{review.text}"
                    </Typography>
                    <Box mt={2} display="flex" alignItems="center">
                      <Avatar
                        src={review.img}
                        alt={review.name}
                        sx={{ mr: 2, width: 56, height: 56 }}
                      />
                      <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                          {review.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {review.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bgcolor="#0f172a" color="white" py={5} mt={10}>
        <Container>
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                RootTech
              </Typography>
              <Typography variant="body2" color="gray">
                Empowering companies with top-tier tech talent.
              </Typography>
              <Fade direction="up" triggerOnce>
                <Box mt={3} display="flex" alignItems="center">
                  <Avatar
                    alt="Md Nasir"
                    src="/ceo-nasir.jpg"
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      CEO: Md Nasir
                    </Typography>
                    <Typography variant="body2" color="gray">
                      📞 +91 95609 62109
                    </Typography>
                    <Typography variant="body2" color="gray">
                      ✉️ looknextstep@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Quick Links
              </Typography>
              <Fade direction="up" cascade triggerOnce>
                <Box>
                  {[
                    "Home",
                    "About",
                    "Services",
                    "Contact"
                  ].map((link) => (
                    <Button
                      key={link}
                      component={Link}
                      to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      sx={{ color: "white", textTransform: "none" }}
                    >
                      {link}
                    </Button>
                  ))}
                </Box>
              </Fade>
              <Box mt={3} display="flex" gap={2}>
                {[{
                  icon: <Facebook />,
                  href: "https://facebook.com"
                }, {
                  icon: <Twitter />,
                  href: "https://twitter.com"
                }, {
                  icon: <LinkedIn />,
                  href: "https://linkedin.com"
                }, {
                  icon: <Instagram />,
                  href: "https://instagram.com"
                }].map((social, i) => (
                  <IconButton
                    key={i}
                    href={social.href}
                    target="_blank"
                    sx={{
                      color: "white",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.3)",
                        color: "#38bdf8"
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box mt={4} textAlign="center">
            <Typography variant="body2" color="gray">
              © {new Date().getFullYear()} RootTech. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
