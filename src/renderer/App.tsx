import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import ClassList from './components/ClassList';
import AddClass from './components/AddClass';
import RegisterStudent from './components/RegisterStudent';
import RegistrationList from './components/RegistrationList';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6347', // Tomato red
    },
    secondary: {
      main: '#FFA500', // Orange
    },
    background: {
      default: '#FFF0E0', // Light orange background
    },
    text: {
      primary: '#800000', // Maroon for primary text
      secondary: '#FF4500', // Orange red for secondary text
    },
  },
  typography: {
    fontFamily: 'Arial',
  },
});
function Dashboard() {
  const [students, setStudents] = useState([{ id: 1, name: 'John Doe' }]);
  const [classes, setClasses] = useState([{ id: 1, name: 'Baking 101' }]);
  const [registrations, setRegistrations] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            🥧 Cooking School Dashboard 🥧
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box marginBottom={2}>
                <Paper elevation={3}>
                  <Box p={2}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      📝 Add Student
                    </Typography>
                    <AddStudent setStudents={setStudents} />
                  </Box>
                </Paper>
              </Box>
              <Paper elevation={3}>
                <Box p={2}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    📚 Student List
                  </Typography>
                  <StudentList students={students} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box marginBottom={2}>
                <Paper elevation={3}>
                  <Box p={2}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      🏫 Add Class
                    </Typography>
                    <AddClass setClasses={setClasses} />
                  </Box>
                </Paper>
              </Box>
              <Paper elevation={3}>
                <Box p={2}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    📖 Class List
                  </Typography>
                  <ClassList classes={classes} />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box marginBottom={2}>
                <Paper elevation={3}>
                  <Box p={2}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      📝 Register Student
                    </Typography>
                    <RegisterStudent
                      setRegistrations={setRegistrations}
                      students={students}
                      classes={classes}
                    />
                  </Box>
                </Paper>
              </Box>
              <Paper elevation={3}>
                <Box p={2}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    📋 Registration List
                  </Typography>
                  <RegistrationList registrations={registrations} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Dashboard;
