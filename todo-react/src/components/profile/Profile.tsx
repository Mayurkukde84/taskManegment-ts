import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
// import PropTypes from 'prop-types'

interface IProfile{
    name?:string
}
const Profile: FC<IProfile> = (props): ReactElement => {
 const {name='John'} = props
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottim: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0,1)}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome,${name}`}
      </Typography>
      <Typography>
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};

export default Profile;

// Profile.propTypes = {
//     name:PropTypes.string.isRequired,
// }
