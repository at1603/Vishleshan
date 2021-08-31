import request from "request";


export const getEmotionAnalysis = (text) => {
    return new Promise((resolve, reject) => {
        request.post({
            url: `https://apis.paralleldots.com/v5/emotion_batch`,
            form: {
                api_key: process.env.API_KEY1,
                text: JSON.stringify(text)
            },
            json: true
        }, (err, response, body) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("insideGetEmotions", body);
                resolve(body)
            }

            // res.status(200).json({ message: body.messages })
        });
    })

}




export const getSarcasmAnalysis = (text) => {
    console.log("getSarcasmAnalysis")
    return new Promise((resolve, reject) => {
        request.post({
            url: `https://apis.paralleldots.com/v4/sarcasm_batch`,
            form: {
                api_key: process.env.API_KEY2,
                text: JSON.stringify(text)
            },
            json: true
        }, (err, response, body) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("insideGetSarcasm", body);
                resolve(body)
            }
            // res.status(200).json({ message: body.messages })
        });
    })

}

export const getIntentAnalysis = (text) => {
    console.log("getIntentAnalysis")
    return new Promise((resolve, reject) => {
        request.post({
            url: `https://apis.paralleldots.com/v4/intent_batch`,
            form: {
                api_key: process.env.API_KEY3,
                text: JSON.stringify(text)
            },
            json: true
        }, (err, response, body) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("insideGetIntent", body);
                resolve(body)
            }
            // res.status(200).json({ message: body.messages })
        });
    })

}


export const getAbuseAnalysis = (text) => {
    console.log("getAbuseAnalysis")
    return new Promise((resolve, reject) => {
        request.post({
            url: `https://apis.paralleldots.com/v4/abuse_batch`,
            form: {
                api_key: process.env.API_KEY4,
                text: JSON.stringify(text)
            },
            json: true
        }, (err, response, body) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("insideGetAbuse", body);
                resolve(body)
            }
            // res.status(200).json({ message: body.messages })
        });
    })

}




