import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#dce8ff',
        height: '92vh'
    },
    reportWrapper: {
        height: 'fit-content',
        width: '80%',
        borderRadius: '25px',
        margin: '1rem auto 1rem',
        padding: '5rem',
        backgroundColor: '#e8e8e8',
    },
}));

export default useStyles;