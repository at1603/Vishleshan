import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '1400px',
        flexGrow: 1,
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
        // marginTop: '3rem',
        // marginLeft: '4rem'
    },
    title: {
        flexGrow: 1,
    },
    leftToolbar: {
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'flex-start',
    },
    leftLinks: {
        textDecoration: 'none',
        color: 'white',
        display: 'inline-block'
    },
    leftLinksButton: {
        marginRight: '20px',
        alignItems: 'center',
        lineHeight: 1.4
    },
    rightToolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingLeft: '0',
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
        lineHeight: 1.4,
        color: "#fff",
        textDecoration: 'none'

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
    },
    selected: {
        // borderBottom: '3px solid #fff',
        // color: ' #fff',
        textDecoration: 'underline',
    }
}));

export default useStyles