const STRAVA_VERIFY_TOKEN = process.env.STRAVA_VERIFY_TOKEN;

module.exports.verify = async event => {
    const mode = event.queryStringParameters['hub.mode'];
    const challenge = event.queryStringParameters['hub.challenge'];
    const token = event.queryStringParameters['hub.verify_token'];

    if ( mode !== 'subscribe' || !challenge ) {
        console.error('Request not valid', event);
        return {
            statusCode: 400
        }

    } else if ( token !== STRAVA_VERIFY_TOKEN ) {
        console.error('Token not valid', token);
        return {
            statusCode: 403
        }
    }

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"hub.challenge": challenge})
    };

};

module.exports.run = async event => {
    console.log('event', event);

    return {
        statusCode: 200
    };
};
