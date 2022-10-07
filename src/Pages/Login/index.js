import React,{useState} from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
} from "@mui/material";
import './login.css';
import { useNavigate } from "react-router-dom";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    paper_root: {
        "width":"450px",
        justifyContent: "center",
        minHeight: "30vh",
        padding: "50px",
    }
})




const Login = () =>{
    const navigate = useNavigate();
const [loginDetails,setLoginDetails] = useState({
    userName:"",
    password:""
})

const [error,setError] = useState({
    userName:"",
    password:""
})

const onchangeHandler = (e) =>{

    setLoginDetails({
        ...loginDetails,
        [e.target.name]:e.target.value
    })
}

const login = () =>{
    setError({
        userName:"",
        password:""
    })
    if(!loginDetails.userName)
    {
        setError({
            ...error,
            userName:"Email is required"
        })
        return null;
    }
    if(!loginDetails.password)
    {
        setError({
            ...error,
            password:"Password is required"
        })
        return null
    }

    if(loginDetails.userName && loginDetails.password){

        localStorage.setItem("isLogin",true)
        localStorage.setItem("userData",JSON.stringify(loginDetails))
        navigate('/home')

    }
    // console.log(loginDetails)
}


    const classes = useStyles();
        return (
            <div>
                <AppBar position="static" alignitems="center" color="primary">
                    <Toolbar>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <Typography variant="h6">Login</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={0}  sx={{
                    justifyContent:"center"
                }} direction="row">
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            className="login-form"
                        >
                            <Paper
                                variant="elevation"
                                elevation={2}
                                className={classes.paper_root}
                            >
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                </Grid>
                                <Grid item>
                                   
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="email"
                                                    placeholder="Email"
                                                    fullWidth
                                                    name="userName"
                                                    error={error.userName}
                                                    helperText={error.userName}
                                                    help
                                                    variant="outlined"
                                                    value={loginDetails.userName}
                                                    onChange={onchangeHandler}
                                                 
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="password"
                                                    placeholder="Password"
                                                    fullWidth
                                                    value={loginDetails.password}
                                                    onChange={onchangeHandler}
                                                    name="password"
                                                    variant="outlined"
                                                    error={error.password}
                                                    helperText={error.password}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    onClick={login}
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className="button-block"
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                   
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Forgot Password?
                                    </Link>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
export default Login;