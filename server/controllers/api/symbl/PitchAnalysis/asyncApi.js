import { generateAuthToken, getActionItems, getAnalytics, getEntities, getFollowUps, getQuestions, getSpeechToText, getSummary, getTopics } from '../ConversationApi/apiCalls.js';

import request from 'request';
// const webhookUrl = WEBHOOK_URL;

import multer from 'multer'



import fs from 'fs'

const startPitchAnalysis = async (authToken, path, res) => {

    const check = async (jobId, conversationId) => {
        request.get({
            url: `https://api.symbl.ai/v1/job/${jobId}`,
            headers: { 'Authorization': `Bearer ${authToken}` },
            json: true
        }, (err, response, body) => {
            console.log(body);
            if (body.status === 'in_progress' || body.status === 'scheduled') {
                check(jobId, conversationId)
            }
            if (body.status === 'completed') {
                console.log(conversationId, "mssss")
                getSpeechToText(conversationId, authToken, res)
                getActionItems(conversationId, authToken, res)
                getFollowUps(conversationId, authToken, res)
                getTopics(conversationId, authToken, res)
                getQuestions(conversationId, authToken, res)
                getEntities(conversationId, authToken, res)
                getAnalytics(conversationId, authToken, res)
                getSummary(conversationId, authToken, res)

                fs.unlink(path, (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }
                })


            }
        });

    }




    const videoFileStream = fs.createReadStream('public/zoom_0.mp4');

    const params = {
        'name': "Business Meeting",
        // <Optional, string| your_conversation_name | Your meeting name. Default name set to conversationId.>

        'confidenceThreshold': 0.5,
        // <Optional, double| confidence_threshold | Minimum required confidence for the insight to be recognized.>

        // 'webhookUrl': "https://yourdomain.com/jobs/callback",
        // <Optional, string| your_webhook_url| Webhook url on which job updates to be sent. (This should be post API)>",

        // 'customVocabulary': ['Platform', 'Discussion', 'Targets'],
        // <Optional, list| custom_vocabulary_list> |Contains a list of words and phrases that provide hints to the speech recognition task.

        'detectPhrases': true,
        // <Optional, boolean| detect_phrases> |Accepted values are true & false. It shows Actionable Phrases in each sentence of conversation. These sentences can be found in the Conversation's Messages API.

        'languageCode': "en-US",
        // <Optional, boolean| language_code> |code of language of recording.
        'enableSeparateRecognitionPerChannel': true,
        'enableSpeakerDiarization': true,
        'diarizationSpeakerCount': 2
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



export const getVideoData = (req, res) => {
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

        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            console.log("ss")
            const path = 'public/zoom_0.mp4'
            generateAuthToken((authToken) => {
                console.log(authToken, "bbb")
                startPitchAnalysis(authToken.accessToken, path, res)

            })

        })

    } catch (error) {
        console.log(error)
    }
    console.log(req.body);
}