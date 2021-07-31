import { AppBar, Typography, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

const Navbar = () => {

    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar