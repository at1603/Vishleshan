import pkg from "symbl-node";
const { sdk } = pkg
import request from "request";
import mongoose from 'mongoose';
import InterviewAnalysisUser from "../../../../models/interviewAnalysisModel.js";
export const InterviewAnalysis = (req, res) => {

  const appId = process.env.APP_ID
  const appSecret = process.env.APP_SECRET
  const phoneNumber = "+16465588656"; // US Zoom Numbers are "+16465588656", or "+14086380968".
  const meetingName = "Zoom Test Meeting";
  const emailAddress = process.env.MY_EMAIL;

  const ZOOM_MEETING_ID = "7147450969";
  const ZOOM_PARTICIPANT_ID = "";
  const ZOOM_MEETING_PASSCODE = "123456";

  let dtmfSequence = `${ZOOM_MEETING_ID}#`;

  if (ZOOM_PARTICIPANT_ID) {
    dtmfSequence += `,,${ZOOM_PARTICIPANT_ID}#`;
  } else {
    dtmfSequence += `,,#`;
  }

  if (ZOOM_MEETING_PASSCODE) {
    dtmfSequence += `,,${ZOOM_MEETING_PASSCODE}#`;
  }
  console.log("4")
  sdk.init({
    appId: appId,
    appSecret: appSecret,
    basePath: "https://api.symbl.ai",
  }).then(async () => {
    console.log('SDK initialized.');
    console.log(dtmfSequence)
    try {
      sdk.startEndpoint({
        endpoint: {
          type: "pstn",
          phoneNumber: phoneNumber,
          dtmf: dtmfSequence,
        },
        languages: ['en-IN'],
        actions: [
          {
            invokeOn: "stop",
            name: "sendSummaryEmail",
            parameters: {
              emails: [
                emailAddress
              ],
            },
          },
        ],
        data: {
          session: {
            name: meetingName,
          },
        },
      }).then((connection) => {
        const connectionId = connection.connectionId;
        const conversationId = connection.conversationId
        addConversationId(conversationId, req)
        console.log("Successfully connected.", connectionId);
        console.log('Conversation ID', connection.conversationId);
        console.log('Full Conection Object', connection);
        console.log("Calling into Zoom now, please wait about 30-60 seconds.");
        res.status(200).json({ connectionId: connectionId })
      })
        .catch((err) => {
          console.error("Error while starting the connection", err);
        });
      console.log("1")
    } catch (e) {
      console.error(e);
    }
  })
    .catch(err => console.error('Error in SDK initialization.', err))
}

// ************** Generate AUTH_TOKEN for Interview Analysis *****************

const generateAuthToken = (callback) => {
  const authOptions = {
    method: 'post',
    url: "https://api.symbl.ai/oauth2/token:generate",
    body: {
      type: "application",
      appId: process.env.APP_ID,
      appSecret: process.env.APP_SECRET
    },
    json: true
  };

  request(authOptions, (err, body) => {
    if (err) {
      console.error('error posting json: ', err);
      throw err
    }
    callback(body.body)
  })
};

// *****************

const getConversation = (conversationId, authToken, res) => {

  request.get({
    url: `https://api.symbl.ai/v1/conversations/${conversationId}/messages`,
    headers: { 'Authorization': `Bearer ${authToken}` },
    json: true
  }, (err, response, body) => {
    console.log(body, "insideGetConversation");
    res.status(200).json({ message: body.messages })
  });
}

const addConversationId = async (conversationId, req) => {
  try {
    await InterviewAnalysisUser.create({ handlerId: req.userId, conversationId: conversationId });
    mongoose.connection.close()
  } catch (error) {
    console.log(error.message)
  }
}

export const InterviewAnalysisResult = (req, res) => {
  generateAuthToken((authToken) => {
    getConversation(req.body.conversationId, authToken.accessToken, res)
  })
}


export const stopInterviewAnalysis = (req, res) => {
  console.log(req.body)
  sdk.stopEndpoint({ connectionId: req.body.connectionId.connectionId })
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.error("Error while stopping the connection", err);
    });
}