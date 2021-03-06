// index.js
const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function(passTimes) {
  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(
      `Predicted Future Passes:  ${datetime} for ${duration} seconds!`
    );
  }
};


module.exports = {printPassTimes}
