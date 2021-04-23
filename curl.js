const request = require("request");

module.exports = function (webAddress) {
  request(webAddress, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(body);
      process.stdout.write("\nprompt > ");
    }
  });
};
