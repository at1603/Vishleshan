import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: 200,
    height: '90vh',
    overflow: 'hidden',
    alignContent: 'center'
  },
  paper: {
    display: 'flex',
    height: 200,
    width: 300,
    justifyContent: 'center',
    borderRadius: 25,
    boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
  },
  control: {
    padding: theme.spacing(2),
  },
  button: {
    borderRadius: 25,
    border: '1px gray',
    backgroundColor: "white",
    // background: 'linear-gradient(45deg, #237a3a, #2bdb5a)'
    // background: 'linear-gradient(45deg, #192249, #43f2ec)'
    background: 'linear-gradient(45deg, #235484, #28e0e0)'
  },
}));

export default useStyles;