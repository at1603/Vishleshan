import mongoose from "mongoose";

const analysisDataSchema = new mongoose.Schema({


    handlerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    conversationIdData: [{
        conversationId: {
            type: String,
            default: ''
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        meetingName: {
            type: String,
            default: ""
        },
        analysisData:
        {
            type: Object,
            default: null
        },
        url: {
            type: String,
            default: ''
        }
    }],



});

const AnalysisData = mongoose.model("AnalysisData", analysisDataSchema);

export default AnalysisData