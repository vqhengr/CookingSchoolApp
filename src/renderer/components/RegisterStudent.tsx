// RegisterStudent.tsx
import React, { useState } from 'react';
import {
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

function RegisterStudent({ setRegistrations, students, classes }) {
  const [student, setStudent] = useState('');
  const [classItem, setClassItem] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add logic to register the student to the class
    setRegistrations((prevRegistrations) => [
      ...prevRegistrations,
      { id: Date.now(), student, class: classItem },
    ]);
    setStudent('');
    setClassItem('');
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{ '& > :not(style)': { m: 1 } }}
    >
      <FormControl fullWidth>
        <InputLabel id="student-label">Student</InputLabel>
        <Select
          labelId="student-label"
          id="student-select"
          value={student}
          label="Student"
          onChange={(e) => setStudent(e.target.value)}
        >
          {students.map((student) => (
            <MenuItem key={student.id} value={student.name}>
              {student.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="class-label">Class</InputLabel>
        <Select
          labelId="class-label"
          id="class-select"
          value={classItem}
          label="Class"
          onChange={(e) => setClassItem(e.target.value)}
        >
          {classes.map((classItem) => (
            <MenuItem key={classItem.id} value={classItem.name}>
              {classItem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Box>
  );
}

export default RegisterStudent;
