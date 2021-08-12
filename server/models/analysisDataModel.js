import mongoose from "mongoose";

const analysisDataSchema = new mongoose.Schema({


    handlerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    conversationIdData: [{
        conversationId: String,
        createdAt: {
            type: Date,
            default: Date.now()
        },
        meetingName: String
    }],
    analysisData: [
        {
            type: Object,
            default: null
        }]


});

const AnalysisData = mongoose.model("AnalysisData", analysisDataSchema);

export default AnalysisData