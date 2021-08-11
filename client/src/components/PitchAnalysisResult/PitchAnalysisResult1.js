// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
// import SummaryAnalysis from './SummaryAnalysis/SummaryAnalysis';
// import LanguageAnalysis from './LanguageAnalysis/LanguageAnalysis';
// import SentimentAnalysis from './SentimentAnalysis/SentimentAnalysis';

// import { Paper, Grid, Button, ButtonGroup, Typography } from '@material-ui/core';
// import useStyles from './styles';
// import './styles.css'

// console.log()
// const PitchAnalysisResult = () => {
//     const classes = useStyles();

//     const [gridSize, setGridSize] = useState(11)
//     const [selectedPage, setSelectedPage] = useState('summary')
//     const [summaryActive, setSummaryActive] = useState(true);
//     const [languageActive, setLanguageActive] = useState(false);
//     const [sentimentActive, setSentimentActive] = useState(false);

//     const analysisData = useSelector(state => state.pitchAnalysis.conversationData)

//     const handleGridChange = () => {
//         gridSize === 11 ? setGridSize(8) : setGridSize(11)
//     }

//     const handleSelectedPageSummary = () => {
//         setSummaryActive(true);
//         setLanguageActive(false)
//         setSentimentActive(false)
//         setSelectedPage('summary')
//     }
//     const handleSelectedPageLanguage = () => {
//         setSummaryActive(false);
//         setLanguageActive(true)
//         setSentimentActive(false)
//         setSelectedPage('language')
//     }
//     const handleSelectedPageSentiment = () => {
//         setSummaryActive(false);
//         setLanguageActive(false)
//         setSentimentActive(true)
//         setSelectedPage('sentiment')
//     }

//     console.log(analysisData)
//     return (
//         <>
//             <div style={{display: 'flex'}}>
//                 <div className={classes.buttonBundle}>
//                     <ButtonGroup color="primary" aria-label="outlined primary button group" className={classes.buttonGroup}>
//                         <Button onClick={handleSelectedPageSummary} id="summary" className={ `${classes.buttonLeft} ${summaryActive ? classes.buttonActive : null}` }>Analysis Summary</Button>
//                         <Button onClick={handleSelectedPageLanguage} id="language" className={languageActive ? classes.buttonActive : null} >Language Analysis</Button>
//                         <Button onClick={handleSelectedPageSentiment} id="sentiment" className={ `${classes.buttonRight} ${sentimentActive ? classes.buttonActive : null}` }>Sentiment Analysis</Button> 
//                     </ButtonGroup>
//                     <Button onClick={handleGridChange} className={classes.toggleGrid}>Cha</Button>
//                 </div>
//             </div>
//             <Grid container className={classes.gridContainer}>
//                 <Grid container item xs={gridSize} className={classes.leftGrid} spacing={1}>
//                     <>
//                         { selectedPage === 'summary' && <SummaryAnalysis /> }
//                         { selectedPage === 'language' && <LanguageAnalysis /> }
//                         { selectedPage === 'sentiment' && <SentimentAnalysis /> }

//                     </>
//                 </Grid>
//                 <Grid item xs={11 - gridSize} className={classes.rightGrid}>
//                 </Grid>
//             </Grid>
//         </>
//     )
// }


// export default PitchAnalysisResult;