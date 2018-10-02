import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './HomePage.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
   textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});


class HomePage extends Component {

state = {
    name: ''
  };

handleChange = (name) => event => {
    this.setState({
      name: event.target.value,
    });
  };

	render() {
		const { classes } = this.props;
		return (
    <div className={classes.root}>
      <Grid container spacing={24}>
      <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
          <Grid item xs={12}>
            <Typography variant="display4" color="inherit" noWrap>
            T-Graph
            </Typography>
          </Grid>

          <Grid item xs={12}>
          <TextField
          id="outlined-name"
          style={{ margin: 3 }}
          label="Search for your image"
          className={classes.textField}
          fullWidth
          value={this.state.name}
          onChange={this.handleChange('Search for your image')}
          margin="normal"
          variant="outlined"
          />
          </Grid>
          <Grid item xs={12}>
            <Typography id="subheading" variant="title" align="center" color="textSecondary" paragraph>
              Making more content and information available to blind people through magic*
            </Typography>
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
	}
}
HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);