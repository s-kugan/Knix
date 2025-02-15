const path = require("path");

let edgeSettings = {
  browserName: "MicrosoftEdge",
  loggingPrefs: {
    browser: "ALL",
    driver: "ALL",
    performance: "ALL",
    server: "OFF",
  },
  javascriptEnabled: true,
  platform: "ANY",
  acceptInsecureCerts: true,
  acceptSslCerts: true,
  avoidProxy: true,
  edgeOptions: {
    w3c: false,
    args: [
      "incognito",
      "disable-web-security",
      "ignore-certificate-errors",
      "no-sandbox",
      "disable-gpu",
      "window-size=1920,1080",
    ],
  },
};

module.exports = edgeSettings;
