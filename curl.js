const request = require("request");

module.exports = function (webAddress, done) {
  request(webAddress, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      done(body);
    }
  });
};
