import mongoose from 'mongoose';
import AnalysisData from '../models/analysisDataModel';


export const getDataToCompare = async (conversationId1, conversationId2, req) => {
    await AnalysisData.findOne({ handlerId: req.userId, conversationIdData: { conversationId: conversationId1 } }).exec((err, response1) => {
        if (err) {
            console.log(err)
        }
        else {
            await AnalysisData.findOne({ handlerId: req.userId, conversationIdData: { conversationId: conversationId2 } }).exec((err, response2) => {
                if (err) {
                    console.log(err)
                }
                else {
                    mongoose.connection.close()
                    let data = {
                        performance1: response1,
                        performance2: response2
                    }
                    res.status(200).json(data)
                }
            })
        }
    })
}


export const getConversationList = () => {
    await AnalysisData.findOne({ handlerId: req.userId }).exec((err, response) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(response)
            res.status(200).json({ conversationIdData: { conversationId: response.analysisData.messages.messages[0].conversationId, createdAt: response.createdAt }, meetingName: 'meetingName' })
        }
    })
}