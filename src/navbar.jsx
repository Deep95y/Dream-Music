import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { FaSearch } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';
import './navbar.css';

const Navbar = () => {
  const theme = useTheme();

  return (
    <div className="navbar_root">
      <AppBar position="static" className="appBar" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <div className="navBartitle" style={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            <Typography variant="h6" className="section" sx={{ fontSize: '0.8rem', color: 'white' }}>Music</Typography>
            <Typography variant="h6" className="section" sx={{ fontSize: '0.8rem', color: 'white' }}>Podcast</Typography>
            <Typography variant="h6" className="section" sx={{ fontSize: '0.8rem', color: 'white' }}>Live</Typography>
            <Typography variant="h6" className="section" sx={{ fontSize: '0.8rem', color: 'white' }}>Radio</Typography>
          </div>
          <div className="search" style={{ borderRadius: '50px', flexGrow: 1 }}>
            <InputBase
              value="Micheal Jackson"
              className="inputRoot"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'white', fontSize: '0.8rem' }}
            />
            <div className="searchIcon">
              <FaSearch />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
