import { generateAuthToken, getActionItems, getAnalytics, getConversationData, getEntities, getFollowUps, getQuestions, getSpeechToText, getSummary, getTopics } from '../ConversationApi/apiCalls.js';
import mongoose from 'mongoose';
import request from 'request';
import multer from 'multer'
import ytdl from 'ytdl-core';
import fs from 'fs'
import { getAbuseAnalysis, getEmotionAnalysis, getIntentAnalysis, getSarcasmAnalysis } from '../../Komprehend/komprehend.js';
import AnalysisData from '../../../../models/analysisDataModel.js';

const startPitchAnalysis = async (authToken, path, meetingName, callback) => {


    console.log("entered")
    let data = {}
    const check = async (jobId, conversationId) => {
        request.get({
            url: `https://api.symbl.ai/v1/job/${jobId}`,
            headers: { 'Authorization': `Bearer ${authToken}` },
            json: true
        }, async (err, response, body) => {
            console.log(body);
            if (body.status === 'in_progress' || body.status === 'scheduled') {
                check(jobId, conversationId)
            }
            if (body.status === 'completed') {

                let [conversationData, messages, questions, analytics, actionItems, entities, followUps, topics, summary] =
                    [getConversationData(conversationId, authToken),
                    getSpeechToText(conversationId, authToken),
                    getQuestions(conversationId, authToken),
                    getAnalytics(conversationId, authToken),
                    getActionItems(conversationId, authToken),
                    getEntities(conversationId, authToken),
                    getFollowUps(conversationId, authToken),
                    getTopics(conversationId, authToken),
                    getSummary(conversationId, authToken)
                    ]
                await Promise.allSettled([conversationData, messages, questions, analytics, actionItems, entities, followUps, topics, summary])
                    .then(async result => {
                        let i
                        const properties = ['conversationData', 'messages', 'questions', 'analytics', 'actionItems', 'entities', 'followUps', 'topics', 'summary']
                        for (i = 0; i < 9; i++) {
                            data[properties[i]] = result[i].value
                        }
                        console.log(data)
                        let ans = {
                            'emotion': [],
                            'sarcasm': [],
                            'intent': [],
                            'profaneWord': [],
                        }
                        let texts = []
                        for (i = 0; i < data.messages.messages.length; i++) {
                            texts.push(data.messages.messages[i].text)
                        }
                        let [emotion, sarcasm, intent, profaneWord] = [getEmotionAnalysis(texts), getSarcasmAnalysis(texts), getIntentAnalysis(texts), getAbuseAnalysis(texts)]
                        await Promise.allSettled([emotion, sarcasm, intent, profaneWord])
                            .then(async response => {
                                console.log(response, "yyyyy")
                                ans['emotion'].push(response[0].value)
                                ans['sarcasm'].push(response[1].value)
                                ans['intent'].push(response[2].value)
                                ans['profaneWord'].push(response[3].value)
                                data['extraAnalysis'] = ans
                                callback(null, data)
                            })
                        // for (i = 0; i < data.messages.messages.length; i++) {
                        // let emotion = await getEmotionAnalysis(data.messages.messages[i].text)
                        // let sarcasm = await getSarcasmAnalysis(data.messages.messages[i].text)
                        // let intent = await getIntentAnalysis(data.messages.messages[i].text)
                        // let profaneWord = await getAbuseAnalysis(data.messages.messages[i].text)

                        // }

                    })
                fs.unlink(path, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                })

            }

        });
    }


    console.log(path)
    const videoFileStream = fs.createReadStream(path);

    const params = {
        'name': meetingName,
        // <Optional, string| your_conversation_name | Your meeting name. Default name set to conversationId.>

        'confidenceThreshold': 0.5,
        // <Optional, double| confidence_threshold | Minimum required confidence for the insight to be recognized.>

        // 'webhookUrl': "https://yourdomain.com/jobs/callback",
        // <Optional, string| your_webhook_url| Webhook url on which job updates to be sent. (This should be post API)>",

        'customVocabulary': ['Assignment', 'Company', 'Code', 'Edward', 'John'],
        // <Optional, list| custom_vocabulary_list> |Contains a list of words and phrases that provide hints to the speech recognition task.

        'detectPhrases': true,
        // <Optional, boolean| detect_phrases> |Accepted values are true & false. It shows Actionable Phrases in each sentence of conversation. These sentences can be found in the Conversation's Messages API.

        'languageCode': "en-US",
        // <Optional, boolean| language_code> |code of language of recording.
        'enableSeparateRecognitionPerChannel': true,
        'enableSpeakerDiarization': true,
        'diarizationSpeakerCount': 2,
        'enableSummary': true,
        // "channelMetadata": [
        //     {
        //         "channel": 1,
        //         "speaker": {
        //             "name": "Robert Bartheon",
        //             "email": "robertbartheon@example.com"
        //         }
        //     },
        //     {
        //         "channel": 2,
        //         "speaker": {
        //             "name": "Arya Stark",
        //             "email": "aryastark@example.com"
        //         }
        //     }
        // ]
    }

    const videoOption = {
        url: 'https://api.symbl.ai/v1/process/video',
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'video/mp4'
        },
        qs: params,
        json: true,
    };

    const responses = {
        400: 'Bad Request! Please refer docs for correct input fields.',
        401: 'Unauthorized. Please generate a new access token.',
        404: 'The conversation and/or it\'s metadata you asked could not be found, please check the input provided',
        429: 'Maximum number of concurrent jobs reached. Please wait for some requests to complete.',
        500: 'Something went wrong! Please contact support@symbl.ai'
    }

    videoFileStream.pipe(request.post(videoOption, (err, response, body) => {
        const statusCode = response.statusCode;
        if (err || Object.keys(responses).indexOf(statusCode.toString()) !== -1) {
            throw new Error(responses[statusCode]);
        }
        console.log('Status code: ', statusCode);
        console.log('Body', body.conversationId);
        console.log('JobId', body.jobId);


        check(body.jobId, body.conversationId)




    }));
}



export const sendVideoData = async (req, res) => {
    try {
        // console.log(__dirname)
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'public')
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname)
            }
        })
        var upload = multer({ storage: storage }).single('file')
        console.log(upload, "checkfor empty file")
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            console.log("ss")
            let path = `public/${req.body.fileName}`
            let url = ''
            if (req.file == undefined) {
                url = req.body.url
                var stream = ytdl('https://www.youtube.com/watch?v=rObJIDwsPY4&ab_channel=HarshPandey')
                    .pipe(fs.createWriteStream('./public/video.mp4'))
                stream.on('finish', () => {
                    generateAuthToken((authToken) => {
                        console.log("jjjjjjjjjjjjjj")


                        startPitchAnalysis(authToken.accessToken, path, req.body.meetingName, async (err, data) => {
                            if (err) {
                                console.log(err)
                            }
                            else {
                                try {
                                    const existingUser = await AnalysisData.findOne({ handlerId: req.userId })
                                    if (!existingUser) {
                                        try {
                                            const messageData = data.messages.messages
                                            let i;
                                            for (i = 0; i < messageData.length; i++) {
                                                let tempEmotion = data.extraAnalysis.emotion[0].emotion[i]
                                                let tempIntent = data.extraAnalysis.intent[0].intent[i].intent
                                                let tempProfane = data.extraAnalysis.profaneWord[0].abuse[i]
                                                let tempSarcasm = data.extraAnalysis.sarcasm[0][i]
                                                messageData[i].emotion = Object.keys(tempEmotion).reduce((a, b) => tempEmotion[a] > tempEmotion[b] ? a : b)
                                                messageData[i].intent = Object.keys(tempIntent).reduce((a, b) => tempIntent[a] > tempIntent[b] ? a : b)
                                                messageData[i].profane = Object.keys(tempProfane).reduce((a, b) => tempProfane[a] > tempProfane[b] ? a : b)
                                                messageData[i].sarcasm = Object.keys(tempSarcasm).reduce((a, b) => tempSarcasm[a] > tempSarcasm[b] ? a : b)
                                            }
                                            //Creating the Final data
                                            await AnalysisData.create({ handlerId: req.userId, conversationIdData: { conversationId: data.messages.messages[0].conversationId, createdAt: Date.now(), meetingName: req.body.meetingName, analysisData: data, url: url } });
                                            res.status(200).json(data)
                                        }
                                        catch (error) {
                                            console.log(error.message)
                                            res.status(500).json({ message: error })
                                        }
                                    }
                                    else {
                                        try {
                                            const messageData = data.messages.messages
                                            let i;
                                            for (i = 0; i < messageData.length; i++) {
                                                let tempEmotion = data.extraAnalysis.emotion[0].emotion[i]
                                                let tempIntent = data.extraAnalysis.intent[0].intent[i].intent
                                                let tempProfane = data.extraAnalysis.profaneWord[0].abuse[i]
                                                let tempSarcasm = data.extraAnalysis.sarcasm[0][i]
                                                messageData[i].emotion = Object.keys(tempEmotion).reduce((a, b) => tempEmotion[a] > tempEmotion[b] ? a : b)
                                                messageData[i].intent = Object.keys(tempIntent).reduce((a, b) => tempIntent[a] > tempIntent[b] ? a : b)
                                                messageData[i].profane = Object.keys(tempProfane).reduce((a, b) => tempProfane[a] > tempProfane[b] ? a : b)
                                                messageData[i].sarcasm = Object.keys(tempSarcasm).reduce((a, b) => tempSarcasm[a] > tempSarcasm[b] ? a : b)
                                            }
                                            await AnalysisData.updateOne({ _id: existingUser._id }, { $push: { conversationIdData: { conversationId: data.messages.messages[0].conversationId, createdAt: Date.now(), meetingName: req.body.meetingName, analysisData: data, url: url } } }).exec(function (err, response) {
                                                if (err) {
                                                    console.log(err)
                                                }
                                                else {
                                                    // mongoose.connection.close()
                                                    console.log("done............................................................", data)
                                                    res.status(200).json(data)
                                                }
                                            })
                                        } catch (error) {
                                            console.log(error)
                                            res.status(500).json({ message: error })
                                        }

                                    }
                                }
                                catch (error) {
                                    console.log(error.message)
                                    res.status(500).json({ message: error })

                                }

                            }
                        })

                    })
                })
            }
            else {
                generateAuthToken((authToken) => {
                    console.log("jjjjjjjjjjjjjj")


                    startPitchAnalysis(authToken.accessToken, path, req.body.meetingName, async (err, data) => {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            try {
                                const existingUser = await AnalysisData.findOne({ handlerId: req.userId })
                                if (!existingUser) {
                                    try {
                                        console.log(data.extraAnalysis, "//////////////")
                                        const messageData = data.messages.messages
                                        let i;
                                        for (i = 0; i < messageData.length; i++) {
                                            let tempEmotion = data.extraAnalysis.emotion[0].emotion[i]
                                            let tempIntent = data.extraAnalysis.intent[0].intent[i].intent
                                            let tempProfane = data.extraAnalysis.profaneWord[0].abuse[i]
                                            let tempSarcasm = data.extraAnalysis.sarcasm[0][i]
                                            messageData[i].emotion = Object.keys(tempEmotion).reduce((a, b) => tempEmotion[a] > tempEmotion[b] ? a : b)
                                            messageData[i].intent = Object.keys(tempIntent).reduce((a, b) => tempIntent[a] > tempIntent[b] ? a : b)
                                            messageData[i].profane = Object.keys(tempProfane).reduce((a, b) => tempProfane[a] > tempProfane[b] ? a : b)
                                            messageData[i].sarcasm = Object.keys(tempSarcasm).reduce((a, b) => tempSarcasm[a] > tempSarcasm[b] ? a : b)
                                        }
                                        //Creating the Final data
                                        await AnalysisData.create({ handlerId: req.userId, conversationIdData: { conversationId: data.messages.messages[0].conversationId, createdAt: Date.now(), meetingName: req.body.meetingName, analysisData: data, url: url } });
                                        res.status(200).json(data)
                                    }
                                    catch (error) {
                                        console.log(error.message)
                                        res.status(500).json({ message: error })
                                    }
                                }
                                else {
                                    try {
                                        console.log(data.extraAnalysis, "///////////////////////////")
                                        const messageData = data.messages.messages
                                        let i;
                                        for (i = 0; i < messageData.length; i++) {
                                            let tempEmotion = data.extraAnalysis.emotion[0].emotion[i]
                                            let tempIntent = data.extraAnalysis.intent[0].intent[i].intent
                                            let tempProfane = data.extraAnalysis.profaneWord[0].abuse[i]
                                            let tempSarcasm = data.extraAnalysis.sarcasm[0][i]
                                            messageData[i].emotion = Object.keys(tempEmotion).reduce((a, b) => tempEmotion[a] > tempEmotion[b] ? a : b)
                                            messageData[i].intent = Object.keys(tempIntent).reduce((a, b) => tempIntent[a] > tempIntent[b] ? a : b)
                                            messageData[i].profane = Object.keys(tempProfane).reduce((a, b) => tempProfane[a] > tempProfane[b] ? a : b)
                                            messageData[i].sarcasm = Object.keys(tempSarcasm).reduce((a, b) => tempSarcasm[a] > tempSarcasm[b] ? a : b)
                                        }
                                        await AnalysisData.updateOne({ _id: existingUser._id }, { $push: { conversationIdData: { conversationId: data.messages.messages[0].conversationId, createdAt: Date.now(), meetingName: req.body.meetingName, analysisData: data, url: url } } }).exec(function (err, response) {
                                            if (err) {
                                                console.log(err)
                                            }
                                            else {
                                                // mongoose.connection.close()
                                                console.log("done............................................................", data)
                                                res.status(200).json(data)
                                            }
                                        })
                                    } catch (error) {
                                        console.log(error)
                                        res.status(500).json({ message: error })
                                    }

                                }
                            }
                            catch (error) {
                                console.log(error.message)
                                res.status(500).json({ message: error })

                            }

                        }
                    })

                })
            }


        })

    } catch (error) {
        console.log(error)
    }
    console.log(req.body);
}

