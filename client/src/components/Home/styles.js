import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 250
    },
    paper: {
        display: 'flex',
        height: 300,
        width: 400,
        justifyContent: 'center'
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  export default useStyles;