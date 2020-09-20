const axios = require('axios');

const getPrice = async (type, distance) => {
  try {
    let response = await axios.get(
      `https://am4tools.com/api/route/${type}/ticket?type=normal&flightRange=${distance}`
    );
    let { data } = response;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

exports.handler = (event, context, callback) => {
  let { type, distance } = event.queryStringParameters;
  getPrice(type, distance).then((res) => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify(res),
    }).catch((e) => {
      callback(e);
    });
  });
};
