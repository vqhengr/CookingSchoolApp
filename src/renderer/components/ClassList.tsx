// ClassList.tsx
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function ClassList({ classes }) {
  return (
    <List>
      {classes.map((classItem) => (
        <ListItem key={classItem.id}>
          <ListItemText primary={classItem.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default ClassList;
