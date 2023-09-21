import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <div >
      <h1 className="aboutmeheading">Projects</h1>
      <div className='projectDiv'>
    <Card className='cards'>
      <CardMedia
        component="img"
        alt="img"
        height="170"
        image="photos/8.png"
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
        <Button size="small"><a href='https://github.com/Bhanujs18/PortFolio' >Github</a></Button>
        <Button size="small"><a href='https://PortfolioBhanuu.netlify.app/' >Visit</a></Button>
      </CardActions>
    </Card>


    <Card className='cards'>
      <CardMedia
        component="img"
        alt="img"
        height="170"
        image="photos/7.png"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        CFace
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This website contains several sections that collectively define who I am, and I will be constantly updating it and adding new documentations. 
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href='https://github.com/Bhanujs18/Video-Call' >Github</a></Button>
        <Button size="small"><a href='https://cface.netlify.app/' >Visit</a></Button>
      </CardActions>
    </Card>


    <Card className='cards'>
      <CardMedia
        component="img"
        alt="img"
        height="170"
        image="photos/6.png"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Toido
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This website contains several sections that collectively define who I am, and I will be constantly updating it and adding new documentations. 
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href='https://github.com/Bhanujs18/toido' >Github</a></Button>
        <Button size="small"><a href='https://toido.netlify.app/' >Visit</a></Button>
      </CardActions>
    </Card>


    <Card className='cards'>
      <CardMedia
        component="img"
        alt="img"
        height="170"
        image="photos/5.png"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Tik-Tik
        </Typography>
        <Typography variant="body2" color="text.secondary">
        This website contains several sections that collectively define who I am, and I will be constantly updating it and adding new documentations. 
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><a href='https://github.com/Bhanujs18/tik-tik' >Github</a></Button>
        <Button size="small"><a href='http://tiktik-ecommerce.netlify.app' >Visit</a></Button>
      </CardActions>
    </Card>
    </div>
   
    </div>
    
  );
  
}

