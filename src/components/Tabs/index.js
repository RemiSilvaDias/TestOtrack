import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import purple from '@material-ui/core/colors/purple';

import Drawer from 'src/components/Drawer';


import IconButtons from 'src/components/IconButtons';
import './Tabs.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="src/styles/assets/images/pict-card.jpg"
                title="Kimetsu no yabai"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Titre à la con
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  texte a la con
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>

              <IconButtons />
            </CardActions>
          </Card>
          {/* -------------------- */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="src/styles/assets/images/pict-card.jpg"
                title="Kimetsu no yabai"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Titre à la con
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  texte a la con
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>

              <IconButtons />

            </CardActions>
          </Card>
          {/* -------------------- */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="src/styles/assets/images/pict-card.jpg"
                title="Kimetsu no yabai"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Titre à la con
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  texte a la con
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>

              <IconButtons />

            </CardActions>
          </Card>
          {/* -------------------- */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="src/styles/assets/images/pict-card.jpg"
                title="Kimetsu no yabai"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Titre à la con
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  texte a la con
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>

              <IconButtons />

            </CardActions>
          </Card>
          {/* -------------------- */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="src/styles/assets/images/pict-card.jpg"
                title="Kimetsu no yabai"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Titre à la con
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  texte a la con
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>

              <IconButtons />

            </CardActions>
          </Card>
          {/* -------------------- */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="src/styles/assets/images/pict-card.jpg"
                title="Kimetsu no yabai"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Titre à la con
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  texte a la con
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>

              <IconButtons />

            </CardActions>
          </Card>
          {/* -------------------- */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="src/styles/assets/images/pict-card.jpg"
                title="Kimetsu no yabai"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Titre à la con
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  texte a la con
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>

              <IconButtons />

            </CardActions>
          </Card>
          {/* -------------------- */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="src/styles/assets/images/pict-card.jpg"
                title="Kimetsu no yabai"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Titre à la con
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  texte a la con
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>

              <IconButtons />

            </CardActions>
          </Card>
          {/* -------------------- */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="src/styles/assets/images/pict-card.jpg"
                title="Kimetsu no yabai"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Titre à la con
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  texte a la con
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>

              <IconButtons />

            </CardActions>
          </Card>
          {/* -------------------- */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="src/styles/assets/images/pict-card.jpg"
                title="Kimetsu no yabai"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Titre à la con
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  texte a la con
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.Button}>

              <IconButtons />

            </CardActions>
          </Card>
          {/* -------------------- */}
          
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}