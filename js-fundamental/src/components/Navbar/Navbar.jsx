import {AppBar,Toolbar,Typography,Button} from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.scss";


function Navbar(){
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow:1}}>JavaScript Learning</Typography>
                <Button color="inherit" component={Link} to="/">Basics</Button>
                <Button color="inherit" component={Link} to="/functions">Functions</Button>
                <Button color="inherit" component={Link} to="/arrays">Arrays</Button>
                <Button color="inherit" component={Link} to="/async">Async</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;