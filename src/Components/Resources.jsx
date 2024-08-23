import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const resources = [
  {
    id: 1,
    title: 'Getting Started with Our Platform',
    description: 'A beginner’s guide to help you get started with our services and tools.',
    link: '#',
  },
  {
    id: 2,
    title: 'Best Practices for Using Our API',
    description: 'Learn the best practices for utilizing our API efficiently and effectively.',
    link: '#',
  },
  {
    id: 3,
    title: 'Tutorial: Building Your First App',
    description: 'Follow this step-by-step guide to build your first application using our platform.',
    link: '#',
  },
  {
    id: 4,
    title: 'Download Our Whitepaper',
    description: 'Download our whitepaper to learn more about our technology and future developments.',
    link: '#',
  },
];

const ResourcesPage = () => {
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
            Resources
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Explore our library of resources to help you get the most out of our products and services.
          </Typography>
        </Container>
      </Box>

      {/* Resources Section */}
      <Box py={6}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {resources.map((resource) => (
              <Grid item xs={12} sm={6} md={4} key={resource.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {resource.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {resource.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="primary" href={resource.link}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Additional Resources Section */}
      <Box
        sx={{
          backgroundColor: 'lightgray',
          py: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom textAlign="center">
            Additional Resources
          </Typography>
          <Typography variant="body1" paragraph textAlign="center">
            Discover more resources, including video tutorials, webinars, and product documentation on our platform.
          </Typography>
          <Box textAlign="center">
            <Button variant="contained" color="secondary" size="large" href="#">
              Browse More Resources
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ResourcesPage;
