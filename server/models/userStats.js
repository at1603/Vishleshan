import mongoose from 'mongoose'

const userStatsSchema = mongoose.Schema({
    highestOverallScore: { type: Number, default: 0 },
    pitchAnalysisCount: { type: Number, default: 0 },
    interviewAnalysisCount: { type: Number, default: 0 },
    currentOverallScore: { type: Nubmer, default: 0 },
    averageMeetingTime: { type: Number, default: 0},
    averageOverallEmotion: { type: Number, default: 0}
})

const UserStats = mongoose.model('UserStats', userStatsSchema)

export default UserStats