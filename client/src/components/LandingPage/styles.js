import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    topCover: {
        background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(22,26,70,1) 100%)',
        height: '100vh',
        color: 'white'
    },
    leftGrid: {
        textAlign: 'left',
        margin: '8rem 0 2rem 6rem',
    },
    rightGrid: {
        margin: '5rem 0rem 2rem'
    },
    button: {
        width: '140px',
        height: '45px',
        fontSize: '15px',
        textTransform: 'uppercase',
        letterSpacing: '2.5px',
        fontWeight: 'bold',
        color: '#232323',
        backgroundColor: '#FFC947',
        border: 'none',
        borderRadius: '15px',
        boxShadow: ' 0px 8px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease 0s',
        cursor: 'pointer',
        outline: 'none',
        // float: 'left',
        marginTop: '3rem',
        // marginLeft: '4rem'
    },
    textStyle: {
        textShadow: '0 1px 0 rgba(255, 255, 255, 0.4)'
    },
    serviceCardsWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '4rem 8rem'
    },
    serviceCard: {
        borderRadius: '25px',
        height: '14rem',
        width: '100%',
        margin: '0 2rem',
        padding: '2rem',
        justifyContent: 'center',
        textAlign: 'center',
    },
    aboutGrid: {
        display: 'flex',
        width: '80%',
        justifyContent: 'center',
        margin: '3rem auto',
        padding: '5rem 0'
    },
    aboutLeftGrid: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutRightGrid: {
        margin: 0
    },
    teamCard: {
        maxWidth: '20rem',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '25px'
    },
    teamMedia: {
        height: '17rem',
    },
    paper: {
        margin: theme.spacing(0, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backPaper: {
        backgroundColor: '#fff',
        borderRadius: 25,
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        width: '90%',
        paddingBottom: '3rem',
        paddingTop: '3rem'
    },


}))

export default useStyles;