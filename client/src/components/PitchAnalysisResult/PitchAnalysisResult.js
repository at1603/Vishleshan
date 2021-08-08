import React from 'react'
import { useSelector } from 'react-redux';

console.log()
const PitchAnalysisResult = () => {
    const analysisData = useSelector(state => state.pitchAnalysis.conversationData)
    console.log(analysisData)
    return (
        <div>
            This is pitch Analysis Result
        </div>
    )
}


export default PitchAnalysisResult;