import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { ITaskDescription } from './interfaces/ITaskDescription';
import PropTypes from 'prop-types';

const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
    const {description="lorem ipsum dolor sit amet"} = props
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default TaskDescription;


TaskDescription.propTypes = {
    description:PropTypes.string
}