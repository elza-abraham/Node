const request = require('request')
module.exports = (done, url) => {
  request(url, (err, res, body) => {
    if (err) {
      done(err);
    } else {
      done(body);
    }
  })
}
