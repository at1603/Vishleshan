import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#dce8ff',
        height: '92vh'
    },
    languageWrapper: {
        height: 'fit-content',
        width: '100%',
        borderRadius: '25px',
        margin: '1rem 1rem 2rem 1rem',
        padding: '5rem',
        backgroundColor: '#40dd67',
    },
}));

export default useStyles;