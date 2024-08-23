import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button } from '@mui/material';

const AboutPage = () => {
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
            About Us
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Learn more about who we are, what we do, and how we make a difference.
          </Typography>
        </Container>
      </Box>

      {/* Company Information Section */}
      <Box py={6}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            Founded in [Year], [Your Company Name] started with a simple mission to [Company’s Goal].
            Since then, we have grown into a dedicated team of professionals committed to delivering
            top-quality services and solutions for our clients. Our goal is to provide unparalleled
            support and innovation to help our clients succeed.
          </Typography>
          <Typography variant="body1" paragraph>
            Over the years, we have built a reputation for excellence by [Briefly Mention Achievements].
            Our company is constantly evolving, and we pride ourselves on adapting to the ever-changing
            landscape of [Your Industry].
          </Typography>
        </Container>
      </Box>

      {/* Mission Statement Section */}
      <Box
        sx={{
          backgroundColor: 'lightgray',
          py: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            Our mission is to [Your Mission Statement]. We believe in making a positive impact through
            our work and are committed to achieving the highest standards of quality and service.
          </Typography>
        </Container>
      </Box>

      {/* Meet the Team Section */}
      <Box py={6}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom textAlign="center">
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[1, 2, 3, 4].map((id) => (
              <Grid item xs={12} sm={6} md={3} key={id}>
                <Card sx={{ textAlign: 'center' }}>
                  <CardContent>
                    <Avatar
                      sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                      src={`https://randomuser.me/api/portraits/men/${id * 10}.jpg`}
                      alt={`Team member ${id}`}
                    />
                    <Typography variant="h6">Team Member {id}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Position {id}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          py: 6,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Work With Us?
          </Typography>
          <Typography variant="body1" paragraph>
            Join our growing list of satisfied clients and experience the difference with [Your Company Name].
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
