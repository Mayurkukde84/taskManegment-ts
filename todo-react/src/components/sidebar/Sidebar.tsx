import React,{FC,ReactElement} from 'react'
import Grid from '@mui/material/Grid2';
import Profile from '../profile/Profile';
const Sidebar:FC = ():ReactElement => {
  return (
    <Grid
        size={{ md: 4 }}
        px={4}
        sx={{
          height: '100vh',
          position: 'fixed',
          right: 0,
          top: 0,
          width: '100%',
          backgroundColor: 'background.paper',
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center'
        }}
      >
        <Profile/>
      </Grid>
  )
}

export default Sidebar