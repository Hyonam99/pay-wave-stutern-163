import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import TextField, { type TextFieldProps } from '@mui/material/TextField';
import { type OutlinedInputProps } from '@mui/material/OutlinedInput';

const InputField = styled((props: TextFieldProps) => (
    <TextField
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        overflow: 'hidden',
        borderRadius: 7,
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
            'color'
        ]),
        '&:hover': {
            backgroundColor: 'white'
        },
        '&.Mui-focused': {
            backgroundColor: 'white',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
            color: 'black'
        }
    }
}));

export default InputField
