import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import img2 from "../images/icon-detailed-records.svg";
import img1 from "../images/icon-brand-recognition.svg";
import img3 from "../images/icon-fully-customizable.svg";



const ContentSection = () => {
      return (
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
              <Grid item key={1} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '56.25%', // 16:9 aspect ratio
                    }}
                    image={img1}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Feature Title
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={2} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '56.25%', // 16:9 aspect ratio
                    }}
                    image={img2}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Feature Title
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={3} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      pt: '56.25%', // 16:9 aspect ratio
                    }}
                    image={img3}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Feature Title
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            
          </Grid>
        </Container>
      );
    };

    export default ContentSection;
    