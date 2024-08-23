// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
// // import { makeStyles } from '@mui/styles';



// // Example hero section component
// const Hero = () => {
//   return (
//     <Box
//       sx={{
//         height: '60vh',
//         backgroundColor: 'lightblue',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Typography variant="h2" component="h1" gutterBottom>
//         Welcome to My Website
//       </Typography>
//       <Typography variant="h5" component="h2" gutterBottom>
//         Learn more about what we do
//       </Typography>
//       <Button variant="contained" size="large" color="primary">
//         Get Started
//       </Button>
//     </Box>
//   );
// };

// // Example content section component
// const ContentSection = () => {
//   return (
//     <Container sx={{ py: 8 }} maxWidth="lg">
//       <Grid container spacing={4}>
//         {Array.from({ length: 3 }).map((_, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//               <CardMedia
//                 component="img"
//                 sx={{
//                   pt: '56.25%', // 16:9 aspect ratio
//                 }}
//                 image="https://source.unsplash.com/random"
//                 alt="random"
//               />
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Feature Title
//                 </Typography>
//                 <Typography>
//                   This is a media card. You can use this section to describe the content.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// // Example footer component
// const Footer = () => {
//   return (
//     <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
//       <Typography variant="h6" align="center" gutterBottom>
//         Footer
//       </Typography>
//       <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
//         Something here to give the footer a purpose!
//       </Typography>
//     </Box>
//   );
// };

// // Main home page component
// const HomePage = () => {
//   return (
//     <>
//       <Hero />
//       <ContentSection />
//       <Footer />
//     </>
//   );
// };

// export default HomePage;




import React, { useState } from 'react';
import InputModal from './Modal';
import ContentSection from './Cards';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import img from "../images/illustration-working.svg";




const HomePage = () => {
  // const[shortenUrl,setShortenUrl]=useState([])
  // const[url,setUrl]=useState('https://google.com/')
  
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: ""
  // }; 
  // fetch(`https://www.shareaholic.com/v2/share/shorten_link?apikey=8943b7fd64cd8b1770ff5affa9a9437b&url=${url}`)
  //   .then(response => response.json())
  //   .then(data => {console.log(data)
  //     setShortenUrl(data.data)
  //   })
  //   .catch(error => console.error(error));

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: 'auto', md: '80vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* About Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                More than just shorter links
              </Typography>
              <Typography variant="h6" component="p" gutterBottom>
               Build your brand's recognition and get detailed insights on how your links are performing.
              </Typography>
              {/* <Button variant="contained" color="primary" size="large"> */}
                <InputModal />
              {/* </Button> */}
              {/* {shortenUrl} */}
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={img}
                alt="Hero Image"
                sx={{
                  width: '100%',
                  height: { xs: '300px', md: '100%' },
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <InputModal /> */}
      <ContentSection />
    </>
  );
};

export default HomePage;
