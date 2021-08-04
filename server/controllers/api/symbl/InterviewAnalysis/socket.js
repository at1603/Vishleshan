import pkg from 'websocket';
import { stopInterviewAnalysis } from './zoomApi.js';
const { client: websocketClient } = pkg;

export const listenToZoomCall = (req, res, connectionId, apiToken) => {

    // websocket initialize and connect to receive events
    const ws = new websocketClient()

    ws.on('connectFailed', function (error) {
        console.log('Connect Error: ' + error.toString())
    })

    ws.on('connect', function (connection) {
        console.log('WebSocket Client Connected')

        connection.on('error', function (error) {
            console.log("Connection Error: " + error.toString())
        });

        // handler for connection close
        connection.on('close', function () {
            console.log(`Connection Closed for connectionId:${connectionId}`)
            stopInterviewAnalysis(req, res, connectionId)
        });

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
