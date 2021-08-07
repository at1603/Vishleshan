import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    topCover: {
        background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(22,26,70,1) 100%)',
        height: '100vh',
        color: 'white'
    },
    leftGrid: {
        textAlign: 'center',
        margin: '5rem 1rem 2rem',
    },
    rightGrid: {
        margin: '5rem 1rem 2rem'
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

}))

export default useStyles;