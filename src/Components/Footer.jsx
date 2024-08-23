import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              We are a company dedicated to providing the best solutions and services. Learn more about our story and values.
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="hover" variant="body2" display="block">
              Home
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2" display="block">
              About
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2" display="block">
              Services
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2" display="block">
              Contact
            </Link>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              123 Main Street, City, Country
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Email: info@company.com
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Phone: +123 456 7890
            </Typography>
          </Grid>
        </Grid>

        {/* Social Media Section */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <IconButton href="#" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton href="#" color="inherit">
            <Twitter />
          </IconButton>
          <IconButton href="#" color="inherit">
            <Instagram />
          </IconButton>
          <IconButton href="#" color="inherit">
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Copyright */}
        <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ textAlign: 'center', mt: 2 }}>
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
