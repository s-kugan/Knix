const path = require("path");

let chromeSettings = {
  browserName: "chrome",
  loggingPrefs: {
    browser: "ALL",
    driver: "ALL",
    performance: "ALL",
    //server: "OFF",
  },
  acceptInsecureCerts: true,
  "goog:chromeOptions": {
    args: [
      "start-fullscreen",
      "incognito",
      "--no-sandbox",
      "--disable-infobars",
      "--disable-gpu",
      "disable-web-security",
      "ignore-certificate-errors",
      //"window-size=1920,1080",
      "disable-setuid-sandbox",
      "whitelist-ips",
      "disable-dev-shm-usage",
    ],

    w3c: false,

    prefs: {
      "profile.default_content_settings.cookies": 2,
      // disable chrome's annoying password manager
      "profile.password_manager_enabled": false,
      credentials_enable_service: false,
      password_manager_enabled: false,
      download: {
        prompt_for_download: false,
        directory_upgrade: true,
        default_directory: path.join(__dirname + "../../fileDownloads"),
      },
      plugins: {
        always_open_pdf_externally: true,
      },
    },
  },
};
module.exports = chromeSettings;
