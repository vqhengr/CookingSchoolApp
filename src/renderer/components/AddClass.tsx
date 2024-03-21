// AddClass.tsx
import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

function AddClass({ setClasses }) {
  const [name, setName] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to save the class
    setClasses((prevClasses) => [...prevClasses, { id: Date.now(), name }]);
    setName('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{ '& > :not(style)': { m: 1 } }}
    >
      <TextField
        id="outlined-basic"
        label="Class Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Add Class
      </Button>
    </Box>
  );
}

export default AddClass;
