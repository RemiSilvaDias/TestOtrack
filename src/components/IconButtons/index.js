import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EditIcon from '@material-ui/icons/Edit';

import { orange } from '@material-ui/core/colors';

import { ThemeProvider } from '@material-ui/styles';


function CustomStar() {
  const classes = useStyles();
  return (
    <IconButton classes={{
      root: classes.root,
      checked: classes.checked,
    }} aria-label="add an alarm">
      <StarBorderRoundedIcon />
    </IconButton>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    fill: '#888',
  },
  button: {
    left: '42vw',
    margin: theme.spacing(1),
  },
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger,
    },
  },
  checked: {},
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D1121C',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: '#ff9800',
    },
  },
  status: {
    danger: orange[500],
  },
});

export default function IconButtons() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <IconButton className={classes.button} aria-label="delete" color="primary">
          <CloseIcon />
        </IconButton>

        <CustomStar />

        <IconButton color="inherit" className={classes.button} aria-label="add to shopping cart">
          <PlayArrowIcon />
        </IconButton>
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="upload picture"
          component="span"
        >
          <EditIcon />
        </IconButton>
      </ThemeProvider>
    </div>
  );
}
