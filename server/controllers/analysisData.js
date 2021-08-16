import mongoose from 'mongoose';
import AnalysisData from '../models/analysisDataModel.js';


export const getDataToCompare = async (req, res) => {
    const { conversationId1, conversationId2 } = req.params;
    await AnalysisData.findOne({ handlerId: req.userId }, { conversationIdData: { $elemMatch: { conversationId: conversationId1 } } }).exec(async (err, response1) => {
        if (err) {
            console.log(err)
        }
        else {
            await AnalysisData.findOne({ handlerId: req.userId }, { conversationIdData: { $elemMatch: { conversationId: conversationId2 } } }).exec((err, response2) => {
                if (err) {
                    console.log(err)
                }
                else {
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


export const getConversationList = async (req, res) => {
    await AnalysisData.findOne({ handlerId: req.userId }).exec((err, response) => {
        if (err) {
            console.log(err)
            res.status(404).json({ message: err.message });
        }
        else {
            if (response == null) {
                res.status(204).json({ message: "Please upload a video to generate analysis data!" })
            }
            else {
                console.log(response)
                res.status(200).json({ conversationIdData: response.conversationIdData })

            }
        }
    })
}

export const fetchAnanlysisData = async (req, res) => {
    await AnalysisData.findOne({ handlerId: req.userId }, { conversationIdData: { $elemMatch: { conversationId: req.params.conversationId } } }).exec(async (err, response) => {
        if (err) {
            console.log(err)
            res.status(204).json({ message: "Please upload a video to generate analysis data!" })
        }
        else {
            console.log(response.conversationIdData[0].analysisData, "in fetch ggggg")
            res.status(200).json({ analysisData: response.conversationIdData[0].analysisData })
        }
    })
}