import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import '../index.scss'


export default function BasicButtons() {
    return (
        <Stack spacing={1} direction="row">
            <Button variant="contained" size="small" color="inherit" startIcon={<LoginIcon />}>Login</Button>
            <Button variant="contained" size="small" color="inherit" startIcon={<HowToRegIcon />}>Register</Button>
        </Stack>
    );
}