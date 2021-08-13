import pkg from 'websocket';
import { stopInterviewAnalysis } from './zoomApi.js';
const { client: websocketClient } = pkg;
import symblpkg from "symbl-node";
// const { sdk, SpeakerEvent } = symblpkg
import WebSocket, { WebSocketServer } from 'ws';





export const listenToZoomCall = (req, res, connectionId, apiToken) => {
  console.log(connectionId, "yeeee")


  // websocket initialize and connect to receive events
  const ws = new websocketClient()



  ws.on('connectFailed', function (error) {
    console.log('Connect Error: ' + error.toString())
  })

  ws.on('connect', function (connection) {
    console.log('WebSocket Client Connected')
    const wss = new WebSocketServer({ port: 8000 });

    wss.on('connection', function connection(wsss) {
      console.log("openforconnection")
      wsss.on('message', function incoming(data) {

        wss.clients.forEach(function each(client) {
          if (client !== wsss && client.readyState === WebSocket.OPEN) {
            client.send(data);
            console.log('data', data);
          }
        });
      });
    });



    connection.on('error', function (error) {
      console.log("Connection Error: " + error.toString())
    });

    // handler for connection close
    connection.on('close', function () {
      console.log(`Connection Closed for connectionId:${connectionId}`)
      stopInterviewAnalysis(req, res, connectionId)
    });



    // handler for realtime message response
    connection.on('message', function (payload) {
      let data = payload.type === 'utf8' ? payload.utf8Data : payload.binaryData;
      data = JSON.parse(data);
      if (data.type === 'message' && data.message.hasOwnProperty('data')) {
        console.log('conversationId', data.message.data.conversationId);
      }
      if (data.type === 'message_response') {
        for (let message of data.messages) {
          console.log('Transcript (more accurate): ', message.payload.content);
        }
      }
    })

  })

  ws.connect(`wss://api.symbl.ai/session/subscribe/${connectionId}`, null, null, { 'X-API-Key': apiToken })
}
