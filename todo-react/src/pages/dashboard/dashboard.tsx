import React, { FC, ReactElement } from 'react';
import Grid from '@mui/material/Grid2';
import Sidebar from '../../components/sidebar/Sidebar';
import TaskArea from '../../components/taskArea/TaskArea';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container spacing={0}>
     <TaskArea/>
    <Sidebar/>
    </Grid>
  );
};

export default Dashboard;
