/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Drawer from 'src/components/Drawer';

import './Tabs.scss';
import Cards from './Cards';

function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

TabPanel.defaultProps = {
  children: () => { },
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.dark,
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 300,
  },
  Button: {
    justifyContent: 'center',
    height: 50,
  },
  Span: {
    borderBottom: '10px solid white',
  },
}));


export default function TabsTest() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="En cours" {...a11yProps(0)} />
          <Tab label="Completé" {...a11yProps(1)} />
          <Tab label="A voir" {...a11yProps(2)} />
          <Tab label="Abandonné" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <Drawer />

      <TabPanel value={value} index={0}>
        <Grid container className={classes.root} spacing={2} justify="center">
          <Cards />
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container className={classes.root} spacing={2} justify="center">
          <Cards />
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid container className={classes.root} spacing={2} justify="center">
          <Cards />
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Grid container className={classes.root} spacing={2} justify="center">
          <Cards />
        </Grid>
      </TabPanel>

    </div>
  );
}
