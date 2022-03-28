import fetch from 'node-fetch';

exports.handler = async (event) => {
    try {
        const response = await fetch('https://yfapi.net/v8/finance/spark?interval=1d&range=max&symbols=SXR8.DE%2CIUSN.DE%2CSXRV.DE');

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    }
    catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error })
        };
    }
}