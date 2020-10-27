import React from 'react';
import { Container, Box } from '@material-ui/core/';

import Header from './Header';

export default function Dashboard() {
  return (
    <Container component="main" maxWidth="100%" disableGutters>
      <Box>
        <Header></Header>
      </Box> 
      Welcome to your dashboard =]
    </Container>
  );
}
