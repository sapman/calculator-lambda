exports.handler = async (event) => {
    try {
        const httpEvent = event.requestContext.http;
        // Handle get requests
        if (httpEvent.method === 'GET') {
            return {
                statusCode: 200,
                body: JSON.stringify("I am a calculator"),
            }
        }
        // Handle post requests
        if (httpEvent.method === 'POST') {
            // Get the array
            const body = JSON.parse(event.body)
            const arr = body.array;
            // Check that there is an array
            if (!arr) {
                throw "no array was given";
            }
            
            // Calculate the sum and returns to the client
            const sum = arr.reduce((acc, cur) => acc + cur,0);
            return {
                statusCode: 200,
                body: JSON.stringify({
                    sum,
                }),
            }
        }
    } catch (e) {
        // Error handler
        return {
            statusCode: 200,
            body: JSON.stringify(e.toString())
        };
    }
};
