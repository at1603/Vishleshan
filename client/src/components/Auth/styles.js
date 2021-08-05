import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    backPaper: {
        backgroundColor: '#fff',
        borderRadius: 25,
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        width: '100%'
     },
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem'
    },
    root: {
        backgroundColor: 'rgb(238, 238, 238)'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    googleButton: {
        marginBottom: theme.spacing(2),
    },
}));
