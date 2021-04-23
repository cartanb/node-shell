const request = require("request");

module.exports = function (webAddress) {
  request(webAddress, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      return body;
    }
  });
};
