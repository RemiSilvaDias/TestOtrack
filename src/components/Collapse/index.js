import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ExpansionPanel = withStyles({
  root: {
    width: 200,
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    width: 200,
    backgroundColor: 'black',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    color: 'white',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const RedCheckbox = withStyles({
  root: {
    color: '#D1121C',
    '&$checked': {
      color: '#D1121C',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Collapse() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  });
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChangeCheckBox = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Saison X</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup row>
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedA} onChange={handleChangeCheckBox('checkedA')} value="checkedA" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedB} onChange={handleChangeCheckBox('checkedB')} value="checkedB" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedC} onChange={handleChangeCheckBox('checkedC')} value="checkedC" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedD} onChange={handleChangeCheckBox('checkedD')} value="checkedD" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedE} onChange={handleChangeCheckBox('checkedE')} value="checkedE" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedF} onChange={handleChangeCheckBox('checkedF')} value="checkedF" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedG} onChange={handleChangeCheckBox('checkedG')} value="checkedG" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Saison X</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup row>
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedA} onChange={handleChangeCheckBox('checkedA')} value="checkedA" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedB} onChange={handleChangeCheckBox('checkedB')} value="checkedB" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedC} onChange={handleChangeCheckBox('checkedC')} value="checkedC" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedD} onChange={handleChangeCheckBox('checkedD')} value="checkedD" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedE} onChange={handleChangeCheckBox('checkedE')} value="checkedE" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedF} onChange={handleChangeCheckBox('checkedF')} value="checkedF" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedG} onChange={handleChangeCheckBox('checkedG')} value="checkedG" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Saison X</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormGroup row>
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedA} onChange={handleChangeCheckBox('checkedA')} value="checkedA" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedB} onChange={handleChangeCheckBox('checkedB')} value="checkedB" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedC} onChange={handleChangeCheckBox('checkedC')} value="checkedC" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedD} onChange={handleChangeCheckBox('checkedD')} value="checkedD" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedE} onChange={handleChangeCheckBox('checkedE')} value="checkedE" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedF} onChange={handleChangeCheckBox('checkedF')} value="checkedF" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
            <FormControlLabel
              control={
                <RedCheckbox checked={state.checkedG} onChange={handleChangeCheckBox('checkedG')} value="checkedG" />
              }
              label="Episode XX"
            />
            {/* --------------------- */}
          </FormGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}
