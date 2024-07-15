import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { FaHome, FaRegFolderOpen, FaChartLine, FaSearch, FaCog, FaSignOutAlt, FaMusic } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        color: 'white',
        '& .MuiDrawer-paper': {
          width: '20%',
          boxSizing: 'border-box',
          backgroundColor: 'black',
          color: 'white',
        },
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1.25rem', marginLeft: '1.875rem' }}>
        <img src='/assets/icons/logo.svg' style={{ width: '2.5rem', height: '2rem', marginLeft: '.9375rem', marginBottom: '-0.5rem' }} />
        <div style={{ color: '#f94747', marginLeft: '0.5remx  ', marginTop: '.375rem', fontSize: '1.25rem', fontWeight:'bold' }}>Dream</div>
        <div style={{ color: 'white', fontSize: '1.25rem', marginTop: '.375rem' }}>Music</div>
      </div>
      <List sx={{ mt: '15%' }}>
        <Typography variant="h7" sx={{ ml: '1.875rem', fontSize: '.6rem' }}>MENU</Typography>
        {['Home', 'Trends', 'Library', 'Discover'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <img src='/assets/icons/home.svg'  style={{ width: '1.25rem', height: '1.25rem', marginLeft: '.9375rem', marginBottom: '-0.5rem' }} />}
              {index === 1 && <img src='/assets/icons/trends.svg'  style={{ width: '1.25rem', height: '1.25rem', marginLeft: '.9375rem', marginBottom: '-0.5rem' }} />}
              {index === 2 && <img src='/assets/icons/library.svg'  style={{ width: '1.25rem', height: '1.25rem', marginLeft: '.9375rem', marginBottom: '-0.5rem' }} />}
              {index === 3 && <img src='/assets/icons/discover.svg'  style={{ width: '1.25rem', height: '1.25rem', marginLeft: '.9375rem', marginBottom: '-0.5rem' }} />}
            </ListItemIcon>
            <ListItemText
              primary={<Typography sx={{ fontSize: '.8rem' }}>{text}</Typography>}
              sx={{ ml: '-0.5rem', mb: '-0.5rem' }}
            />
          </ListItem>
        ))}
      </List>
      <List style={{ marginTop: 'auto' }}>
        <Typography variant="h7" style={{ marginTop: '25%', marginLeft: '1.5625rem', fontSize: '.6rem' }}>GENERAL</Typography>
        <ListItem button>
          <ListItemIcon>
            <img src='/assets/icons/settings.svg'  style={{ width: '1.25rem', height: '1.25rem', color: 'red', marginLeft: '.9375rem'}} />
          </ListItemIcon>
          <ListItemText
            primary={<Typography sx={{ fontSize: '.8rem' }}>Settings</Typography>}
            sx={{ ml: '-0.5rem' }}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src='/assets/icons/logout.svg'  style={{ width: '1.25rem', height: '1.25rem', color: 'red', marginLeft: '.9375rem' }} />
          </ListItemIcon>
          <ListItemText
            primary={<Typography sx={{ fontSize: '.8rem' }}>Log Out</Typography>}
            sx={{ ml: '-0.5rem' }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
