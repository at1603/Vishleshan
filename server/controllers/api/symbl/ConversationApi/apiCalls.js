import request from "request";





// ************** Generate AUTH_TOKEN for Interview Analysis *****************

export const generateAuthToken = (callback) => {
    console.log("authtoken")
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

export const getSpeechToText = async (conversationId, authToken, res) => {
    console.log("getSpeechtoText")
    request.get({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}/messages?sentiment=true`,
        headers: { 'Authorization': `Bearer ${authToken}` },
        json: true
    }, (err, response, body) => {
        console.log("insideGetConversation", body);
        // res.status(200).json({ message: body.messages })
    });
}

export const getActionItems = (conversationId, authToken, res) => {
    console.log("actionItems")
    request.get({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}/action-items`,
        headers: { 'Authorization': `Bearer ${authToken}` },
        json: true
    }, (err, response, body) => {
        console.log("insideGetActionItems", body);
    });
}

export const getFollowUps = (conversationId, authToken, res) => {
    console.log("followUps")
    request.get({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}/follow-ups`,
        headers: { 'Authorization': `Bearer ${authToken}` },
        json: true
    }, (err, response, body) => {
        console.log("insideGetFollowUps", body);
    });
}

export const getTopics = (conversationId, authToken, res) => {
    console.log("topics")
    request.get({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}/topics?sentiment=true`,
        headers: { 'Authorization': `Bearer ${authToken}` },
        json: true
    }, (err, response, body) => {
        console.log("insideGetTopics", body);
    });
}

export const getQuestions = (conversationId, authToken, res) => {
    console.log("ques")
    request.get({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}/questions`,
        headers: { 'Authorization': `Bearer ${authToken}` },
        json: true
    }, (err, response, body) => {
        console.log("insideGetQuestions", body);
    });
}



export const getEntities = async (conversationId, authToken, res) => {
    console.log("entities")
    request.get({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}/entities`,
        headers: { 'Authorization': `Bearer ${authToken}` },
        json: true
    }, (err, response, body) => {
        console.log("insideGetEntitites", body);
    });
}


export const getAnalytics = (conversationId, authToken, res) => {
    console.log("analytics")
    request.get({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}/analytics`,
        headers: { 'Authorization': `Bearer ${authToken}` },
        json: true
    }, (err, response, body) => {
        console.log("insideGetAnalytics", body);
    });
}

export const getConversationData = (conversationId, authToken, res) => {
    console.log("getconversationData")
    request.get({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}`,
        headers: { 'Authorization': `Bearer ${authToken}` },
        json: true
    }, (err, response, body) => {
        console.log("insideGetConversationData", body);
    });
}

export const deleteConversation = (conversationId, authToken, res) => {
    console.log("deleteConversationData")
    request.delete({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}`,
        headers: { 'Authorization': `Bearer ${authToken}` },
        json: true
    }, (err, response, body) => {
        console.log("insideDeleteConversation", body);
    });
}

export const getMemberInformation = (conversationId, authToken, res) => {
    console.log("getMemberInfo")
    request.get({
        url: `https://api.symbl.ai/v1/conversations/${conversationId}/members`,
        headers: { 'Authorization': `Bearer ${authToken}` },
        json: true
    }, (err, response, body) => {
        console.log("insideGetMemberInformation", body);
    });
}