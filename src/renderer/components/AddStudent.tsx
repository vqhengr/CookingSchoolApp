// AddStudent.tsx
import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

function AddStudent({ setStudents }) {
  const [name, setName] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to save the student
    setStudents((prevStudents) => [...prevStudents, { id: Date.now(), name }]);
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
        label="Student Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Add Student
      </Button>
    </Box>
  );
}

export default AddStudent;
