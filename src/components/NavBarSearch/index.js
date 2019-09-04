import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/styles';

import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';

const muiTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiToolbar: {
      // Name of the rule
      root: {
        // Some CSS
        backgroundColor: 'black',
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgourdColor: '#EEE',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  button: {
    marginLeft: '50px',
    float: 'right',
  },
  avatar: {
    position: 'absolute',
    marginTop: -10,
    width: 80,
    height: 80,
    zIndex: 3,
  },
}));

export default function NavBarSearch() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={muiTheme}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Grid container className={classes.root} spacing={2} justify="center">
              <Grid item xs={3}>
                <Avatar className={classes.avatar}>
                  <FolderIcon />
                </Avatar>
              </Grid>

              <Grid item xs={6}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Recherche..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              </Grid>

              <Grid item xs={3}>
                <Button variant="outlined" color="inherit" className={classes.button}>
                  Sign up
                </Button>
                <Button variant="text" color="inherit" className={classes.button}>
                  Sign in
                </Button>
              </Grid>

            </Grid>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
