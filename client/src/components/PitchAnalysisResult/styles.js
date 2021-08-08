import { FormHelperText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        flexGrow: 1,
        margin: '0 2rem 0 2rem'
    },
    leftGrid: {
        backgroundColor: 'white',
        display: 'flex',
        padding: '1rem 4.5rem 1rem',
        borderRadius: '25px',
        width: '100vw',
        margin: '1rem auto',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rightGrid: {
        backgroundColor: 'white',
        borderRadius: '25px',
        height: '80vh',
        margin: '1rem 4.5rem 1rem 0',
    },
    buttonBundle: {
        display: 'flex',
        margin: '3rem 3.2rem',
        borderRadius: '25px',
        backgroundColor: 'white',
        width: '64rem'
    },
    buttonGroup: {
        margin: '2rem auto 2rem',
        borderRadius: '25px',
        backgroundColor: 'white',
        boxShadow: '0 6px 38px rgba(0,0,0,0.30), -1px 4px 12px rgba(0,0,0,0.22)'

    },
    buttonLeft: {
        borderTopLeftRadius: '25px',
        borderBottomLeftRadius: '25px'
    },
    buttonRight: {
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px'
    },
    buttonActive: {
        backgroundColor: 'dodgerblue',
        color: 'black',
        '&:hover': {
            background: 'dodgerblue',
        },
    },
    toggleGrid: {
        float: 'left',
        borderRadius: '50%',
        margin: '1rem 4rem 1rem 0',
        backgroundImage: 'linear-gradient(45deg, #0B0D21, #3e4477)',
        color: 'white',
        float: 'right', 
        boxShadow: '0 6px 38px rgba(0,0,0,0.30), -1px 4px 12px rgba(0,0,0,0.22)'
    },
}));

export default useStyles;