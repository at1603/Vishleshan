import request from "request";


export const getEmotionAnalysis = (text) => {
    console.log("getEmotionalAnalysis")
    return new Promise((resolve, reject) => {
        request.post({
            url: `https://apis.paralleldots.com/v5/emotion`,
            form: {
                api_key: process.env.API_KEY,
                text: text
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
            url: `https://apis.paralleldots.com/v4/sarcasm`,
            form: {
                api_key: process.env.API_KEY,
                text: text
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
            url: `https://apis.paralleldots.com/v4/new/intent`,
            form: {
                api_key: process.env.API_KEY,
                text: text
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
            url: `https://apis.paralleldots.com/v4/abuse`,
            form: {
                api_key: process.env.API_KEY,
                text: text
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




