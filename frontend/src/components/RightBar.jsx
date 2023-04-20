import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Suggestions from './Suggestions'

const RightBar = () => {
  return (
    <Stack width="50%">
      <Box className="mb-4">
        <Header />
      </Box>
      <Box>
        <Suggestions />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Stack>
  );
}

export default RightBar
