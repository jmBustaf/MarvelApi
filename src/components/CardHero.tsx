import { IHero } from '../types/hero'
import { Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'

interface CardProps {
  item: IHero
}

const CardHero = ({item}: CardProps): JSX.Element => {

  return (
    <>
      <Card className="cardHero" 
        style={{
          display: 'flex', 
          flex: 1, 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexDirection: 'column', 
          maxHeight: '20rem', 
          border: '1.5px solid #d3d4d5'
        }}
      >
        <CardActionArea onClick={() => window.open(`${item.urls[0].url}`)}>
          <CardContent style={{ margin: '0', padding: '0' }}>
            <CardMedia
              image={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
              style={{height: '24vh', width:'100%'}}
            />
            <Typography
              component="p"
              variant="body1"
              align="center"
              color="textPrimary"
              gutterBottom
              style={{ fontSize: '1.5rem', fontWeight: 'normal', marginTop:'2vh', marginBottom:'1vh' }}
            >
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default CardHero