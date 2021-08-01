import pkg from "symbl-node";
const { sdk } = pkg
import dotenv from 'dotenv';


export const InterviewAnalysis = () => {
  const appId = process.env.APP_ID
  const appSecret = process.env.APP_SECRET
  const phoneNumber = "+16465588656"; // US Zoom Numbers are "+16465588656", or "+14086380968".
  const meetingName = "Zoom Test Meeting";
  const emailAddress = "test@gmail.com";

  const ZOOM_MEETING_ID = "sss";
  const ZOOM_PARTICIPANT_ID = "";
  const ZOOM_MEETING_PASSCODE = "789";

  let dtmfSequence = `${ZOOM_MEETING_ID}#`;

  if (ZOOM_PARTICIPANT_ID) {
    dtmfSequence += `,,${ZOOM_PARTICIPANT_ID}#`;
  } else {
    dtmfSequence += `,,#`;
  }

  if (ZOOM_MEETING_PASSCODE) {
    dtmfSequence += `,,${ZOOM_MEETING_PASSCODE}#`;
  }

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
        console.log("Successfully connected.", connectionId);
        console.log('Conversation ID', connection.conversationId);
        console.log('Full Conection Object', connection);
        console.log("Calling into Zoom now, please wait about 30-60 seconds.");
      })
        .catch((err) => {
          console.error("Error while starting the connection", err);
        });
    } catch (e) {
      console.error(e);
    }
  }).catch(err => console.error('Error in SDK initialization.', err));
}

