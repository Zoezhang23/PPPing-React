import React, { Component } from 'react'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import '../index.scss'
import Paper from '@mui/material/Paper';

export default class SearchBar extends Component {
    render() {
        return (
            <div>

                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 34 }}
                    elevation="4"
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Iphone"
                        inputProps={{ 'aria-label': 'Iphone' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        )
    }
}
