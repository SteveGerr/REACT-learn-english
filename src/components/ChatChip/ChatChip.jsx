import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
    cursor: "pointer"
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData] = React.useState([
    { key: 0, label: 'Hi' },
    { key: 1, label: 'my' },
    { key: 2, label: 'I am' },
    { key: 3, label: 'name' },
    { key: 4, label: 'is' },
    { key: 5, label: 'the' },
    { key: 6, label: 'to' },
    { key: 7, label: 'Ivan' },

  ]);

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}
