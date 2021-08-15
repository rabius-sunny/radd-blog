import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'

const Navbar = () => {

    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link href="/" passHref>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <HomeRoundedIcon />
                        </IconButton>
                    </Link>
                    <div style={{ flexGrow: 1 }}></div>
                    <Link href="/tags" passHref><Button color="inherit">Tags</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar
