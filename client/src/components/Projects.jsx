import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <div className='projectDiv'>
    <Card className='cards'>
      <CardMedia
        component="img"
        alt="img"
        height="170"
        image="photos/1.jpeg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         PortFolio
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This website contains several sections that collectively define who I am, and I will be constantly updating it and adding new documentations. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className='cards'>
      <CardMedia
        component="img"
        alt="img"
        height="170"
        image="photos/1.jpeg"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Video Call App
        </Typography>
        <Typography variant="body2" color="text.secondary">
        https://videocallapp-byjs.netlify.app/
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
   
    </div>
    
  );
  
}

