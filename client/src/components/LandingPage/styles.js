import { makeStyles } from "@material-ui/core";

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
        margin: '3rem auto'
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
    }


}))

export default useStyles;