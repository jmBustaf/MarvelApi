import '../styles/loading.css'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <Box  className=" loading">
      <h3>{'Cargando...'}</h3>
      <CircularProgress style={{color: '#000000'}}/>
    </Box>
  )
}

export default Loading