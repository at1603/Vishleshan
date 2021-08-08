import pkg from 'websocket';
import { stopInterviewAnalysis } from './zoomApi.js';
const { client: websocketClient } = pkg;
import symblpkg from "symbl-node";
// const { sdk, SpeakerEvent } = symblpkg
// import WebSocket, { WebSocketServer } from 'ws';





export const listenToZoomCall = (req, res, connectionId, apiToken) => {
  console.log(connectionId, "yeeee")


  // websocket initialize and connect to receive events
  const ws = new websocketClient()



  ws.on('connectFailed', function (error) {
    console.log('Connect Error: ' + error.toString())
  })

  ws.on('connect', function (connection) {
    console.log('WebSocket Client Connected')
    // const wss = new WebSocketServer({ port: 8000 });

    // wss.on('connection', function connection(wsss) {
    //   console.log("openforconnection")
    //   wsss.on('message', function incoming(data) {
    //     const result = data.toString('ascii')
    //     const ans = JSON.parse(result)
    // if (result["flag"] == 1) {

    // }
    // if (ans["flag"] == 1) {
    //   console.log("connid", connectionId)
    //   const speakerEvent = new SpeakerEvent({
    //     type: SpeakerEvent.types.startedSpeaking,
    //     user: {
    //       userId: 'Interviewee@gmail.com',
    //       name: 'Interviewee',
    //     },
    //   })
    //   speakerEvent.timestamp = new Date().toISOString();
    //   console.log(speakerEvent, "mememe")

    //   sdk.pushEventOnConnection(
    //     `${connectionId}`,
    //     speakerEvent.toJSON(),
    //     (err) => {
    //       if (err) {
    //         console.error('Error during push event.', err);
    //       } else {
    //         console.log('Event pushed!');
    //       }
    //     }
    //   );
    //   speakerEvent.type = SpeakerEvent.types.stoppedSpeaking
    //   speakerEvent.timestamp = new Date().toISOString()

    //   sdk.pushEventOnConnection(
    //     `${connectionId}`,
    //     speakerEvent.toJSON(),
    //     (err) => {
    //       if (err) {
    //         console.error('Error during push event.', err)
    //       } else {
    //         console.log('Event pushed!')
    //       }
    //     },
    //   )
    // }
    // console.log('data', ans["flag"]);

    //     wss.clients.forEach(function each(client) {
    //       if (client !== wsss && client.readyState === WebSocket.OPEN) {
    //         // client.send(data);
    //         console.log('data', data);
    //       }
    //     });
    //   });
    // });



    connection.on('error', function (error) {
      console.log("Connection Error: " + error.toString())
    });

    // handler for connection close
    connection.on('close', function () {
      console.log(`Connection Closed for connectionId:${connectionId}`)
      stopInterviewAnalysis(req, res, connectionId)
    });

    // wsServer.on('request', function (request) {
    //   var userID = "sss";
    //   console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
    //   // You can rewrite this part of the code to accept only the requests from allowed origin
    //   const con = request.accept(null, request.origin);
    //   clients[userID] = con;
    //   console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));
    //   con.on('message', function (message) {
    //     if (message.type === 'utf8') {
    //       const dataFromClient = JSON.parse(message.utf8Data);
    //       const json = { type: dataFromClient.type };
    //       if (dataFromClient.type === typesDef.USER_EVENT) {
    //         console.log("pls mannnnnnnnnnnnnnnnnnnnnn")
    //       } else if (dataFromClient.type === typesDef.CONTENT_CHANGE) {
    //         editorContent = dataFromClient.content;
    //         json.data = { editorContent, userActivity };
    //       }
    //       sendMessage(JSON.stringify(json));
    //     }
    //   });
    //   // user disconnected
    //   con.on('close', function (con) {
    //     console.log((new Date()) + " Peer " + userID + " disconnected.");
    //     const json = { type: typesDef.USER_EVENT };
    //     userActivity.push(`${users[userID].username} left the document`);
    //     json.data = { users, userActivity };
    //     sendMessage(JSON.stringify(json));
    //   });
    // });

    /*
    // handler for realtime message response
    connection.on('message', function(payload) {
      const data = payload.type === 'utf8' ? payload.utf8Data : payload.binaryData;
      console.log(data)
    })
    */

  })

  ws.connect(`wss://api.symbl.ai/session/subscribe/${connectionId}`, null, null, { 'X-API-Key': apiToken })
}
