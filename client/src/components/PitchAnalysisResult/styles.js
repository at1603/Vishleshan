// import { FormHelperText, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     gridContainer: {
//         display: 'flex',
//         flexGrow: 1,
//         margin: '0 2rem 0 2rem'
//     },
//     leftGrid: {
//         backgroundColor: 'dodgerblue',
//         display: 'flex',
//         height: '100vh',
//         padding: '1rem 4.5rem 1rem',
//         borderRadius: '25px',
//         width: '100vw',
//         margin: '1rem auto',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     rightGrid: {
//         backgroundColor: 'white',
//         borderRadius: '25px',
//         height: '80vh',
//         margin: '1rem 4.5rem 1rem 0',
//     },
//     buttonBundle: {
//         display: 'flex',
//         margin: '3rem 3.2rem',
//         borderRadius: '25px',
//         backgroundImage: 'linear-gradient(90deg, #04182b, #00488e)',
//         width: '100%'
//     },
//     buttonGroup: {
//         margin: '2rem auto 2rem',
//         borderRadius: '25px',
//         backgroundColor: 'white',
//         boxShadow: '0 6px 38px rgba(0,0,0,0.30), -1px 4px 12px rgba(0,0,0,0.22)'

//     },
//     buttonLeft: {
//         borderTopLeftRadius: '25px',
//         borderBottomLeftRadius: '25px'
//     },
//     buttonRight: {
//         borderTopRightRadius: '25px',
//         borderBottomRightRadius: '25px'
//     },
//     buttonActive: {
//         backgroundColor: '#ffc947',
//         color: 'black',
//         '&:hover': {
//             background: '#ffc947',
//         },
//     },
//     toggleGrid: {
//         float: 'left',
//         borderRadius: '50%',
//         margin: '1rem 4rem 1.5rem 0',
//         backgroundColor: '#ffc947',
//         color: 'black',
//         boxShadow: '0 6px 38px rgba(0,0,0,0.30), -1px 4px 12px rgba(0,0,0,0.22)',
//         '&:hover': {
//             background: '#ffc947',
//         },
//     },
// }));

// export default useStyles;


import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#dce8ff'

    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'fixed',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    content: {
        flexGrow: 1,
        // height: '100vh',
        height: '100%'

    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        borderRadius: '25px',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
    },
    fixedHeight: {
        height: 240,
    },

}));

export default useStyles;