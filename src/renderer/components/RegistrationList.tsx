// RegistrationList.tsx
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function RegistrationList({ registrations }) {
  // Replace this with actual data

  return (
    <List>
      {registrations.map((registration) => (
        <ListItem key={registration.id}>
          <ListItemText
            primary={`${registration.student} - ${registration.class}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default RegistrationList;
