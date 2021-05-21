import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'

const AddQuestion = ({ handlerAddQuestion }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(3),
            textAlign: 'left',
            color: 'black',
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Button variant="outlined" color='secondary' fullWidth={true} onClick={handlerAddQuestion} startIcon={<Add />}>Add Question</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddQuestion
