const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});

fetchCoordsByIP(
  `2607:9880:1048:105:658f:bcf1:1609:92c`,
  (error, coordinates) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }

    console.log("Returned coordinates:", coordinates);
  }
);
