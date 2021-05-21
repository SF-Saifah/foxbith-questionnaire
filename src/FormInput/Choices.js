import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import FileCopy from '@material-ui/icons/FileCopy'
import Delete from '@material-ui/icons/Delete'
import Add from '@material-ui/icons/Add'

import './Choices.css'

const useStyle = makeStyles(theme => ({
    input: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    delete: {
        '& .MuiTextField-root': {
            padding: theme.spacing(1),
        },
    }
}))

const Choices = (props) => {
    const [checked, setChecked] = useState('1')

    const handleChange = (event) => {
        setChecked(
            event.target.value
        )
    };

    const classes = useStyle()

    return (
        <div>
            <div>
                <div className='test'>
                    <div >
                        <div className='headerLabel' style={{ paddingBottom: 10 }}>
                            <label>
                                Question {props.countQuestion}
                            </label>
                        </div>
                        <TextField
                            error={props.resApp.questionDetail === ""}
                            helperText={props.resApp.questionDetail === "" ? 'Please fill in this field' : ' '}
                            name="questions"
                            variant='outlined'
                            size='small'
                            color='secondary'
                            label='Question *'
                            fullWidth={true}
                            value={props.resApp.questionDetail}
                            onChange={(event) => props.change(event, props.indexApp)}
                        />
                    </div>
                </div>

                <Grid container spacing={1}>
                    <Grid item xs={1} >
                        <RadioGroup value={checked} onChange={handleChange} >
                            {props.resApp.details.map((res, index) => {
                                return (
                                    <div key={res.id} style={{ padding: 14 }}>
                                        <FormControlLabel value={res.count} control={<Radio />} />
                                    </div>
                                )
                            })}
                        </RadioGroup>
                    </Grid>

                    <Grid item xs={10} >
                        {props.resApp.details.map((res, index) => {
                            return (
                                <div key={res.id} className={classes.input}>
                                    <div>
                                        <TextField
                                            error={res.detailChoice === ""}
                                            helperText={res.detailChoice === "" ? 'Please fill in this field' : ' '}
                                            name="value"
                                            control={<Radio />}
                                            variant='outlined'
                                            size='small'
                                            color='secondary'
                                            label='Description *'
                                            fullWidth={true}
                                            value={res.detailChoice}
                                            onChange={(event) => props.changeDetail(event, props.indexApp, index)}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </Grid>

                    <Grid item xs={1}>
                        {props.resApp.details.map((res, index) => {
                            return (
                                <div key={res.id} className={classes.delete} style={{ padding: 6 }}>
                                    <div className="deleteChoice">
                                        <IconButton component="span" size='medium' onClick={(event) => props.deleteChoice(event, props.indexApp, index,)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </Grid>
                </Grid>

            </div>
            <Button onClick={(event) => props.addChk(event, props.indexApp)} startIcon={<Add />} color='secondary'>ADD CHOICE</Button>

            <hr />
            <div>
                <Button onClick={(event) => props.duplicateQuestion(event, props.indexApp)} startIcon={<FileCopy />}>DUPLICATE</Button>
                <Button onClick={(event) => props.deleteQuestion(event, props.indexApp)} startIcon={<Delete />}>DELETE</Button>
            </div>
        </div>
    )
}

export default Choices
