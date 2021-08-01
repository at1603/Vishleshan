import mongoose from "mongoose";

const interviewAnalysisUserSchema = new mongoose.Schema({


    handlerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    conversationId: [String],
    authToken: {
        accessToken: {
            type: String,
            default: ""
        },
        expiresIn: {
            type: Number,
            default: 86400
        }
    }

});

const InterviewAnalysisUser = mongoose.model("InterviewAnalysisUser", interviewAnalysisUserSchema);

export default InterviewAnalysisUser