import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(22,26,70,1) 100%)'
        // background: 'linear-gradient(90deg, rgba(6,6,27,1) 57%, rgba(6,75,91,1) 100%)'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    button: {
        width: '140px',
        height: '45px',
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '2.5px',
        fontWeight: '500',
        color: '#000',
        backgroundColor: '#efe939',
        border: 'none',
        borderRadius: '45px',
        boxShadow: ' 0px 8px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease 0s',
        cursor: 'pointer',
        outline: 'none',
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    profile: {
        marginLeft: '120px',
        marginRight: '20px',
        display: 'flex',
        justifyContent: 'space-left',
        width: '400px',
    },
    userName: {
        marginRight: '20px',
        display: 'flex',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        fontSize: '3rem',
        textDecoration: 'none',
        marginLeft: '2rem',
        padding: '1rem',
    },
    titleImage: {
        height: 50, 
        marginLeft: 70, 
        padding: '0.7rem'
    }
}));

export default useStyles