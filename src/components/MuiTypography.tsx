import { Typography } from '@mui/material';

const MuiTypography = () => {

  return (

    <div>

        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1'>h4 Heading</Typography>
        <Typography variant='h5' gutterBottom>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>This is Subtitle1 </Typography>
        <Typography variant='subtitle2'>This is Subtitle2 </Typography>

        <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Laudantium, ut optio sed eius, quaerat placeat 
            rerum dolorum fugit voluptatibus deleniti ullam eveniet! Placeat 
            voluptate nobis maxime ducimus quasi porro repudiandae.
         </Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Nostrum esse animi harum rem, quia ab 
             necessitatibus adipisci! Corporis voluptas veniam ducimus 
             quis omnis, ipsum, sed praesentium aspernatur quibusdam minus
             provident!
        </Typography>

    </div>

  )

};

export default MuiTypography;