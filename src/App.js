import React, { useState } from 'react'
import Headers from './Headers/Headers'
import Choices from './FormInput/Choices'
import AddQuestion from './AddQuestion/AddQuestion'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

import './App.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#FA8128',
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 5
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: 'black',
  },
}));

function App() {
  const classes = useStyles();

  const [detail, setDetail] = useState({
    questionName: '',
    questions: [
      {
        countsQuiz: '1',
        questionDetail: '',
        details:
          [
            { id: '1', count: '1', detailChoice: '', correctValue: false },
            { id: '2', count: '2', detailChoice: '', correctValue: false },
          ]
      },
      {
        countsQuiz: '2',
        questionDetail: '',
        details:
          [
            { id: '1', count: '1', detailChoice: '', correctValue: false },
            { id: '2', count: '2', detailChoice: '', correctValue: false },
          ]
      }
    ],
  });

  const addQuestions = () => {
    const resAdd = detail
    const countsQuiz = resAdd.questions.length + 1
    let strCountsQuiz = countsQuiz.toString()
    resAdd.questions.push({
      countsQuiz: strCountsQuiz,
      questionDetail: '',
      details:
        [
          { id: '1', count: '1', detailChoice: '', correctValue: false },
          { id: '2', count: '2', detailChoice: '', correctValue: false },
        ]
    })
    setDetail({
      ...resAdd
    })
  }

  const addChkHandler = (event, indexApp) => {
    const resAdd = detail
    let num = detail.questions[indexApp].details + 1
    let strNum = num.toString()
    resAdd.questions[indexApp].details.push({
      id: strNum,
      count: strNum,
      detailChoice: '',
      correctValue: false
    })
    setDetail({
      ...resAdd
    })
  }

  const questionNameChange = event => {
    setDetail({
      ...detail,
      [event.target.name]: event.target.value
    })
  }

  const changeQuestionsHandler = (event, indexApp) => {
    const resChange = detail
    resChange.questions[indexApp].questionDetail = event.target.value
    setDetail({
      ...resChange
    })
  }

  const changeDetailsHandler = (event, indexApp, index) => {
    const changeDetail = detail
    changeDetail.questions[indexApp].details[index].detailChoice = event.target.value
    setDetail({
      ...changeDetail
    })
  }

  const deleteChoicesHandler = (event, indexApp, index) => {
    const resDelete = detail
    resDelete.questions[indexApp].details.splice(index, 1)
    setDetail({
      ...resDelete
    })
  }

  const deleteQuestionsHandler = (event, indexApp) => {
    console.log(event + '   ' + indexApp)
    const resDeleteQuestion = detail
    resDeleteQuestion.questions.splice(indexApp, 1)

    setDetail({
      ...resDeleteQuestion
    })
  }

  const onCancel = () => {
    setDetail({
      questionName: '',
      questions: [
        {
          countsQuiz: '1',
          questionDetail: '',
          details:
            [
              { id: '1', count: '1', detailChoice: '', correctValue: false },
              { id: '2', count: '2', detailChoice: '', correctValue: false },
            ]
        },
        {
          countsQuiz: '2',
          questionDetail: '',
          details:
            [
              { id: '1', count: '1', detailChoice: '', correctValue: false },
              { id: '2', count: '2', detailChoice: '', correctValue: false },
            ]
        }
      ],
    })
  }

  const duplicateQuestionsHandler = (event, indexApp) => {
    const resNewDetail = detail
    const newQuestionCount = resNewDetail.questions.length + 1
    let strNewQuestionCount = newQuestionCount.toString()
    const resDuplication = { ...detail.questions[indexApp] }
    resDuplication.countsQuiz = strNewQuestionCount
    resNewDetail.questions.push({
      ...resDuplication
    })

    setDetail({
      ...resNewDetail
    })
  }

  const onSubmit = event => {
    event.preventDefault()

    // if (detail.questionName === '') {
    //   alert('Please Complete All Field')
    // } else {
    //   alert('Success')
    // }

    alert('Success')
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <form >
          <Headers inputForm={onSubmit} cancelForm={onCancel} />
          <div className='container'>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <div className={classes.root}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <div className='headerLabel'>
                          <label> Questionnaire Detail </label>
                        </div>
                        <TextField
                          error={detail.questionName === ""}
                          helperText={detail.questionName === "" ? 'Please fill in this field' : ' '}
                          name="questionName"
                          variant='outlined'
                          size='small'
                          color='secondary'
                          label='Name *'
                          fullWidth={true}
                          value={detail.questionName}
                          onChange={questionNameChange}
                          validators={['minNumber:0', 'maxNumber:255', 'matchRegexp:^[0-9]$']}
                        />
                      </Paper>
                    </Grid>
                  </Grid>
                </div>

                {
                  detail.questions.map((res, index) => {
                    return (
                      <Grid container spacing={1} key={index}>
                        <Grid item xs={12}>
                          <Paper className={classes.paper}>
                            <Choices
                              addChk={addChkHandler}
                              duplicateQuestion={duplicateQuestionsHandler}
                              change={changeQuestionsHandler}
                              questions={detail.questions}
                              changeDetail={changeDetailsHandler}
                              detail={detail}
                              deleteChoice={deleteChoicesHandler}
                              deleteQuestion={deleteQuestionsHandler}
                              resApp={res}
                              indexApp={index}
                              countQuestion={detail.questions[index].countsQuiz}
                            />
                          </Paper>
                        </Grid>
                      </Grid>
                    )
                  })
                }

                <AddQuestion handlerAddQuestion={addQuestions} />
              </Grid>
            </Grid>
          </div>
          <input type='submit' value='Save Task' className='btn btn-block' hidden />
        </form>
      </div>
    </ThemeProvider >
  );
}

export default App;
