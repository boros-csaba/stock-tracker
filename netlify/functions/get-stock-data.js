exports.handler = async (event) => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({ value: "OK" })
        };
    }
    catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error })
        };
    }
}