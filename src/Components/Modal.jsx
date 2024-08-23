import React, { useState } from 'react';
import { Box, Button, Typography, Modal, TextField, Paper } from '@mui/material';

// Modal style
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const InputModal = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

 const handleData=()=> { fetch(`https://www.shareaholic.com/v2/share/shorten_link?apikey=8943b7fd64cd8b1770ff5affa9a9437b&url=${inputValue}`)
  .then(response => response.json())
  .then(data => {console.log(data)
  setResult(data.data)
  })
  .catch(error => console.error(error));
}

  // Open/close modal handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(inputValue);
    handleClose();
  };
  

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Get Started
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="input-modal-title"
        aria-describedby="input-modal-description"
      >
        <Paper sx={modalStyle}>
          <Typography id="input-modal-title" variant="h6" component="h2" gutterBottom>
            Shorten a Link here..
          </Typography>
          
          {/* Input Bar */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
          >
            <TextField
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter link..."
              variant="outlined"
              size="small"
              fullWidth
            />
            <Button onClick={handleData} type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Paper>
      </Modal>

      {/* Display Results */}
      {result && (
        <Box mt={4}>
          <Typography variant="h6" component="p">
            Your Link:<a href={result} target="_blank">{result}</a>
          </Typography>
          <Button onClick={navigator.clipboard.writeText(result)} variant="contained" color="primary">
              Copy Link
            </Button>
        </Box>
      )}
    </>
  );
};

export default InputModal;


  

