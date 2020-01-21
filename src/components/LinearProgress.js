import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex: 2,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    color: 'gray'
  },
}));

//test

export default function LinearDeterminate(props) {
  const classes = useStyles();

  console.log(props);

  return (
    <div className={classes.root}>
      <Zoom left>
        <LinearProgress style={{height: 10}} variant="determinate" value={props.completed} color="secondary" />
      </Zoom>
    </div>
  );
}