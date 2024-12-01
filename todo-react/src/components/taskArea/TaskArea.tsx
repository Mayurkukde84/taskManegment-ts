import React, { FC, ReactElement } from 'react';
import {  Box } from '@mui/material';
import Grid from '@mui/material/Grid2'
const TaskArea: FC = (): ReactElement => {
  return (
    <Grid size={{ md: 8 }} px={4}>
      <Box mb={8} px={4}>
        <h2>Content Area</h2>
      </Box>
    </Grid>
  );
};

export default TaskArea;
