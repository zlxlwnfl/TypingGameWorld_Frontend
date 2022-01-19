import * as React from 'react';
import { ButtonProps } from '@mui/material';
import CustomButton from '../Button/CustomButton';
import defer from './defer';

interface FormButtonProps {
  disabled?: boolean;
  mounted?: boolean;
}

function FormButton<C extends React.ElementType>(
  props: FormButtonProps & ButtonProps<C, { component?: C }>,
) {
  const { disabled, mounted, ...others } = props;
  return (
    <CustomButton
      disabled={!mounted || !!disabled}
      type="submit"
      variant="contained"
      {...others}
    />
  );
}
export default defer(FormButton);
