import React from 'react'
import './App.scss'
import Content from './Content'
import BackgroundVideo from './BackgroundVideo'
import { Container, CssBaseline } from '@mui/material'
import Box from '@mui/material/Box'

const App = () => (
  <Container
    component="main"
    className={'app'}
  >
    <CssBaseline />
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={'app--main-content'}
    >
      <Content/>
      <BackgroundVideo />
    </Box>
  </Container>
)

export default App
