import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container } from '@mui/system';
import { tabPanelUnstyledClasses } from '@mui/base';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




const root = ReactDOM.createRoot(document.getElementById('root'));






const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





root.render(
  <div className='Container-Fluid'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item className='BOX-grids-1'>
          </Item>
        </Grid>


        <Grid item xs={8}>
          <Item className='BOX-grids-2'>
            <Grid item>
              <Item className='Box-1'>1</Item>
            </Grid>
            <Grid item>
              <Item className='Box-2'>
                 2
              </Item>
            </Grid>
            <Grid item>
              <Item className='Box-3'>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <Item className= 'Details'>xs=2</Item>
    </Grid>
  ))}
</Grid>
              </Item>
            </Grid>
          </Item>
        </Grid>

      </Grid>

    </Box>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
