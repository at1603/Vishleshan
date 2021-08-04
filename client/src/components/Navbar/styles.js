import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    // root: {
    //     flexGrow: 1,
    // },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        // width: '400px',
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
        textDecoration: 'none',
    }
}));

export default useStyles