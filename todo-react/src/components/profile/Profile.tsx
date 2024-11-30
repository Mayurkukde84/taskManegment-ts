import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const Profile: FC = (): ReactElement => {
  {
    // Avatar
  }
  {
    // Name
  }
  {
    // Welcome message
  }
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
          K
        </Typography>
      </Avatar>
    </Box>
  );
};

export default Profile;
