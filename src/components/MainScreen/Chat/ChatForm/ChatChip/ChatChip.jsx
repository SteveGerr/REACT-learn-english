
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

export default function ChatChips(props) {
  const { dialogs, storeAddWord } = props;
  const classes = useStyles();

  // Add word
  const compAddWord = (value) => {
    let word = String(value.target.innerText)
    console.log("word:", word );
    storeAddWord(word)
  }

  return (
    <Paper component="ul" className={classes.root}>
      {dialogs.chips.map((chip) => {
        let icon;

        if (chip.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={chip.key}>
            <Chip
              onClick={compAddWord}
              icon={icon}
              label={chip.label}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}
