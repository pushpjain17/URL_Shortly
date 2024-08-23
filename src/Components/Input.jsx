// import React, { useState } from 'react';
// import { TextField, Button, Box } from '@mui/material';

// const InputBar = ({ onSubmit, placeholder }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (onSubmit) {
//       onSubmit(inputValue);
//     }
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
//     >
//       <TextField
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder={placeholder || "Enter something..."}
//         variant="outlined"
//         fullWidth
//       />
//       <Button type="submit" variant="contained" color="primary">
//         Submit
//       </Button>
//     </Box>
//   );
// };

// export default InputBar;



import React, { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const InputBar = ({ onSubmit, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(inputValue);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 4, // margin-top
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          borderRadius: '50px',
        }}
      >
        <TextField
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder || "Enter something..."}
          variant="outlined"
          size="small"
          sx={{
            width: { xs: '200px', md: '300px' },
            borderRadius: '50px',
            "& .MuiOutlinedInput-root": {
              borderRadius: '50px',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            marginLeft: '8px',
            borderRadius: '50px',
            paddingX: '20px',
          }}
        >
          Submit
        </Button>
      </Paper>
    </Box>
  );
};

export default InputBar;
