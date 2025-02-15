const path = require("path");

let firefoxSettings = {
  browserName: "firefox",
  javascriptEnabled: true,
  platform: "ANY",
  acceptInsecureCerts: true,
  alwaysMatch: {
    "moz:firefoxOptions": {
      w3c: false,
      args: ["--headless", "--width=1920", "--height=1080"],
      prefs: {
        "browser.helperApps.alwaysAsk.force": false,
        "browser.download.folderList": 2,
        //'browser.privatebrowsing.autostart':true,
        "pdfjs.disabled": true,
        "browser.helperApps.neverAsk.openFile":
          "application/pdf,application/zip",
        "browser.helperApps.neverAsk.saveToDisk":
          "application/zip,application/octet-stream,image/jpeg,application/vnd.ms-outlook,text/html,application/pdf",
        "browser.download.manager.showWhenStarting": false,
        "browser.download.manager.useWindow": false,
        "browser.download.manager.showAlertOnComplete": false,
        "browser.download.dir": path.join(__dirname + "/fileDownloads"),
        "browser.download.downloadDir": path.join(__dirname + "/fileDownloads"),
        "browser.download.defaultFolder": path.join(
          __dirname + "/fileDownloads"
        ),
      },
    },
  },
};

module.exports = firefoxSettings;
