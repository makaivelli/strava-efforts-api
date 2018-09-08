module.exports.run = async event => {
    console.log('event', event);

    return {
        statusCode: 202,
        headers: {'Content-Type': 'text/plain'},
        body: 'Webhook received'
    };

};
