import '../styles/footer.css'
import '../styles/characters.css'
import { IHero } from '../types/hero'
import AppBar from "../components/AppBar"
import Footer from "../components/Footer"
import Loading from "../components/Loading"
import { useState, useEffect } from "react"
import CardHero from "../components/CardHero"
import { Typography, Container, Grid } from '@mui/material'

const Characters = () => {

  const [heros, setHeros] = useState([]);

  useEffect(() => {
     loadData();
  }, [])
  
  const loadData = () => {
    const url = 'https://gateway.marvel.com:443/v1/public/characters?apikey=8b2a11f6eb7a6207800dacfcda1a5c59';
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      setHeros(data.data.results);
    })
  }

  return (
    <>
      <AppBar/>
      <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
          style={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop:'10vh', marginBottom:'3vh' }}
        >
          Personajes Marvel
      </Typography>
      <hr />
      {heros.length === 0 ? <Loading/> : <></>}
      <Container maxWidth='lg' className="showCharacters">
        <Grid container justifyContent="center" spacing={4} style={{ padding: '0'}}>
          {heros.map((hero: IHero, index) => (
            <Grid key={index} item xs={12} sm={4} style={{ marginTop:'2vh', marginBottom:'2vh', marginRight: '1wh', marginLeft: '1wh' }}>
              <CardHero
                item={hero}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </>
  )
}

export default Characters