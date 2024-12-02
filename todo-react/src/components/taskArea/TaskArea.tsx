import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { format } from 'date-fns';
import TaskCounter from '../taskCounter/taskCounter';
import Task from '../task/task';
const TaskArea: FC = (): ReactElement => {
  return (
    <Grid size={{ md: 8 }} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status Of Your Tasks As On
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display={'flex'}
        justifyContent={'center'}
      >
        <Grid
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-around'}
          alignItems={'center'}
          size={{ md: 10, xs: 12 }}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid
          display={'flex'}
          flexDirection={'column'}
          size={{ xs: 10, md: 8 }}
        >
          <Task />
          <Task />
          <Task />
     
        </Grid>
       
      </Grid>
    </Grid>
  );
};

export default TaskArea;
