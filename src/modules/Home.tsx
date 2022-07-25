import React from "react"
import { Box } from '@mui/material'
import AppBar from "../components/AppBar"
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';

const Home = (): JSX.Element => {
  const history = useNavigate()

  const goCharacters = () => {
    history('/characters') 
  }
  
  return (
    <>
      <AppBar/>
      <Box style={{
        backgroundImage: `url("${process.env.PUBLIC_URL}/images/marvel.png")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'}}
      >
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
          <Typography style={{ marginBottom:'15vh', color: '#ffffff' }} variant="h3">
            ¡Hola, y bienvenido Marvel Comics!
          </Typography>
          <Button onClick={goCharacters} color="inherit" variant="contained" component="span" style={{ marginTop:'10vh' }} size="large">
            Personajes
          </Button>
        </div>
      </Box>
    </>
  )
}

export default Home