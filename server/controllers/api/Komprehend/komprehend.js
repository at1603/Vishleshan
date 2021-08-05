import request from "request";

const apiKey = process.env.API_KEY

export const getEmotionAnalysis = async (text, res) => {
    console.log("getEmotionalAnalysis")
    request.post({
        url: `https://apis.paralleldots.com/v5/emotion`,
        form: {
            api_key: 'y7R1EJEICDz342wqsFYzSaLzzHJTmPWZEUGC90RMC1M',
            text: "You have brought honour to our family and I am greatfull to you for that."
        },
        json: true
    }, (err, response, body) => {
        console.log("insideGetEmotions", body);
        // res.status(200).json({ message: body.messages })
    });
}




export const getSarcasmAnalysis = async (text, res) => {
    console.log("getEmotionalAnalysis")
    request.post({
        url: `https://apis.paralleldots.com/v4/sarcasm`,
        form: {
            api_key: 'y7R1EJEICDz342wqsFYzSaLzzHJTmPWZEUGC90RMC1M',
            text: "You have brought honour to our family and I am greatfull to you for that."
        },
        json: true
    }, (err, response, body) => {
        console.log("insideGetEmotions", body);
        // res.status(200).json({ message: body.messages })
    });
}

export const getIntentAnalysis = async (text, res) => {
    console.log("getEmotionalAnalysis")
    request.post({
        url: `https://apis.paralleldots.com/v4/new/intent`,
        form: {
            api_key: apiKey,
            text: "You have brought honour to our family and I am greatfull to you for that."
        },
        json: true
    }, (err, response, body) => {
        console.log("insideGetEmotions", body);
        // res.status(200).json({ message: body.messages })
    });
}





