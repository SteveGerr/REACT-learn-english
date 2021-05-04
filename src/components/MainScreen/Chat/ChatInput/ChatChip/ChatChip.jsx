
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

export default function ChipsArray(props) {
  const { chips } = props.state.dialogs;
  let addWord = props.addWord;
  const classes = useStyles();

  // Add word
  const compAddWord = (value) => {
    let word = String(value.target.innerText)
    addWord(word)
  }

  return (
    <Paper component="ul" className={classes.root}>
      {chips.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              onClick={compAddWord}
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
