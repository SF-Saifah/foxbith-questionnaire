import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    subminButton: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    title: {
        flexGrow: 1,
    },
}));

const Headers = ({ inputForm, cancelForm }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color='default'>
                <Toolbar >
                    <Typography edge="start" variant="h6" className={classes.title}>
                        Foxbith Quesitonnaire
                    </Typography>

                    <div className={classes.subminButton}>
                        <Button onClick={cancelForm} color="secondary" size='medium' variant='outlined'>Cancel</Button>
                        <Button onClick={inputForm} color="secondary" size='medium' variant='contained' >Save</Button>
                    </div>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Headers
