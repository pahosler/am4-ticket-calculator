const axios = require('axios');

const getPrice = async (type, distance) => {
  try {
    let response = await axios.get(
      `https://am4tools.com/api/route/${type}/ticket?type=normal&flightRange=${distance}`
    );
    let { data } = response;
    return data;
  } catch (error) {}
};

exports.handler = async (event, context, callback) => {
  let { type, distance } = event.queryStringParameters;
  let data = await getPrice(type, distance);
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    callback(newError(`Something went wrong: ${e}`), { statusCode: 400 });
  });
};
