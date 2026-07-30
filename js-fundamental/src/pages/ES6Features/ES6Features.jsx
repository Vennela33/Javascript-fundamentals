import {
  Paper,
  Typography,
  Divider
} from "@mui/material";

import {
  templateLiteralExample
} from "./es6Examples";

import "./ES6Features.scss";

function ES6Features(){

    return(

        <Paper className="es6-container">

            <Typography variant="h4">

                ES6+ Features

            </Typography>

            <Divider sx={{margin:"20px 0"}}/>

            <Typography variant="h5">

                Template Literals

            </Typography>

            <button onClick={templateLiteralExample}>

                Run Example

            </button>

            <Typography>

                Open Console (F12)

            </Typography>

        </Paper>

    )

}

export default ES6Features;