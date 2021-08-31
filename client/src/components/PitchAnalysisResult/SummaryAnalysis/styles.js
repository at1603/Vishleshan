import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
        borderRadius: '25px',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        backgroundColor: '#e8e8e8'
    },
    fixedHeight: {
        height: 240,
        backgroundColor: '#e8e8e8'
    },

}));

export default useStyles;