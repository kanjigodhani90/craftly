import React from 'react';
import {Outlet} from "react-router-dom"
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

//import file
import Logo from "../assets/Logo.svg";

const useStyle = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
    },
    wrapperNav: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    companyName: {
        color: '#007FFF'
    },
    title: {
        color: '#656565',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        }
    },
    color: {
        fontSize: '18px',
        textTransform:'capitalize',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        }
    },
    navButtons: {
        display: 'flex',
        justifyContent: "end",
        width: "-webkit-fill-available",
    },
    navBtn: {
        marginRight: "5px",
        color: "#9979FD",
        background:"#fff",
        border: "1px solid #9979FD",
        borderRadius:"20px",
        '&:hover':{
            background:"#9979FD",
            color: "#fff",
        }
    },
    margin: {
        marginTop: "10px"
    },

    MobileLogo: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        }
    },
    Logo: {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }
}));

const Header = () => {
    const classes = useStyle();

    return (
        <>
            <Container maxWidth="xl" className={classes.margin}>
                <Box style={{ flexGrow: 1}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} className={classes.wrapper}>
                            <div>
                                <img src={Logo} alt="React Logo" className={classes.Logo}/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.wrapperNav}>
                            <div className={classes.navButtons}>
                                <Button
                                    variant="contained"
                                    className={classes.navBtn}
                                    classes={{label: classes.color}}
                                    disableElevation
                                >
                                    Log in
                                </Button>
                                <Button
                                    variant="contained"
                                    className={classes.navBtn}
                                    classes={{label: classes.color}}
                                    disableElevation
                                >
                                    Sign up
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <Outlet/>
            </Container>
        </>
    );
};

export default Header;
