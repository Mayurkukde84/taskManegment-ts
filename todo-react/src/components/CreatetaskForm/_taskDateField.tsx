import React, { FC, ReactElement,useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';
const TaskDateField: FC<IDateField> = (props): ReactElement => {
    const{value = new Date(),disabled = false,onChange = (date)=>console.log(date)} = props
    //state
    const [date,setDate] = useState<Date | null >(null)
  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
      >
        <DesktopDatePicker
        label="Task Date"
        format="dd/MM/yyyy"
        value={value}
        onChange={onChange}
        disabled={disabled}
        slots={{ textField: TextField }}
        />
      </LocalizationProvider>
    </>
  );
};

export default TaskDateField;
