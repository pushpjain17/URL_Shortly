import React, { useState } from 'react';
import { Box, Container, Grid, TextField, Button, Typography, Paper } from '@mui/material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call or email service)
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: 'lightblue',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6" color="textSecondary">
            We'd love to hear from you! Feel free to reach out with any questions, comments, or feedback.
          </Typography>
        </Container>
      </Box>

      {/* Contact Form and Info Section */}
      <Box py={6}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Send Us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    margin="normal"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </form>
              </Paper>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              <Box sx={{ p: { xs: 0, md: 4 } }}>
                <Typography variant="h4" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Address:</strong> 123 Main Street, City, Country
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Email:</strong> contact@company.com
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Phone:</strong> +123 456 7890
                </Typography>
                <Typography variant="body1" paragraph>
                  You can also reach us on our social media channels for quick updates and news.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;
