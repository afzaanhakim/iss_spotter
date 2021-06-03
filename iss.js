/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require("request");
const fetchMyIP = function (callback) {
  let URL = "https://api.ipify.org/?format=json";

  request(URL, (error, response, body) => {
    const IP = JSON.parse(body).ip;
    if (IP) {
      return callback(null, IP);
    }

    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
  });
};

module.exports = { fetchMyIP };
