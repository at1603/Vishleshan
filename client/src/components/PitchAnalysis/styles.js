import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    leftGrid: {
        marginTop: '8rem',
        width: '40%',
    },
    rightGrid: {
        textAlign: 'center',
        justifyContent: 'center',
        width: '60%',
        padding: '5rem',
        paddingTop : '10rem',
        // marginLeft: '2rem,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderImage: 'linear-gradient(to top, #e2e2e2, #c2c2c2, #e2e2e2)',
        borderImageSlice: 1,
        borderBottom: 'none',
        borderTop: 'none',
        borderRight: 'none'
    },
    form: {
        width: '80%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    input:{
        margin: '0.5rem'
    },
    text: {
        marginTop: '2rem',

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));