// StudentList.tsx
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function StudentList({ students }) {
  return (
    <List>
      {students.map((student) => (
        <ListItem key={student.id}>
          <ListItemText primary={student.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default StudentList;
