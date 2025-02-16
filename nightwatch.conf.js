// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

/*******Import-browser-settings ********************************/
const chromeSettings = require("./browser_settings/chromeSettings");
const firefoxSettings = require("./browser_settings/firefoxSettings");
const edgeSettings = require("./browser_settings/edgeSettings");

const path = require("path");

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test'],

  output_folder: "tests_output",

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['nightwatch/page-objects/'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: ['nightwatch/custom-commands'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: ['nightwatch/custom-assertions'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',
  
  webdriver: {},

  test_workers: {
    enabled: false
  },

  test_settings: {
  chromeEnv: {
      disable_error_log: false,
      launch_url: 'https://knix.com/',

      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      },      
      desiredCapabilities: {
        browserName: 'chrome',
        loggingPrefs: {
          browser: "ALL",
          driver: "ALL",
          performance: "ALL",
          //server: "OFF",
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
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
          w3c: true,
          prefs: {
            "credentials_enable_service": false,
            "profile.password_manager_enabled": false,
            download: {
              prompt_for_download: false,
              directory_upgrade: true,
              default_directory: path.join(__dirname, "../../fileDownloads"),
            },
            plugins: {
              always_open_pdf_externally: true,
            },
          }
        }
      }, 
      webdriver: {
        start_process: true,
        server_path: '',
        port: 9515,
        host: 'localhost',
        ssl: false,
        default_path_prefix: '',
        cli_args: [
          
        ]
        
      },
     
      
  }, 
    
  firefoxEnv: {
    disable_error_log: false,
    launch_url: 'https://knix.com/',

    screenshots: {
      enabled: true,
      path: 'screens',
      on_failure: true
    },      
      desiredCapabilities: {
        browserName: "firefox",
        javascriptEnabled: true,
        platform: "ANY",
        acceptInsecureCerts: true,
        alwaysMatch: {
          "moz:firefoxOptions": {
            args: [
              "--kiosk",
              "--width=1920", 
              "--height=1080"
            ],
            prefs: {
              "browser.helperApps.alwaysAsk.force": false,
              "browser.download.folderList": 2,
              // "browser.privatebrowsing.autostart": true,
              "pdfjs.disabled": true,
              "browser.helperApps.neverAsk.openFile": "application/pdf,application/zip",
              "browser.helperApps.neverAsk.saveToDisk": "application/zip,application/octet-stream,image/jpeg,application/vnd.ms-outlook,text/html,application/pdf",
              "browser.download.manager.showWhenStarting": false,
              "browser.download.manager.useWindow": false,
              "browser.download.manager.showAlertOnComplete": false,
              "browser.download.dir": path.join(__dirname, "/fileDownloads"),
              "browser.download.downloadDir": path.join(__dirname, "/fileDownloads"),
              "browser.download.defaultFolder": path.join(__dirname, "/fileDownloads"),
            }
          }
  }
       
      },
      webdriver: {
        start_process: true,
        server_path: '',
        port: 4444,
        host: 'localhost',
        ssl: false,
        default_path_prefix: '',
        cli_args: [
          
        ]
      }
  },

  edgeEnv: {
    disable_error_log: false,
      launch_url: 'https://knix.com/',

      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      },      
     
    desiredCapabilities:{
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
      "ms:edgeOptions": {
        w3c: true,  // Updated to true to follow the W3C WebDriver standard
        args: [
          "start-fullscreen",
          "incognito",
          "disable-web-security",
          "ignore-certificate-errors",
          "no-sandbox",
          "disable-gpu",
          "window-size=1920,1080"
        ]
      }
    },

    webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
  },
    
   'android.real.firefox': {
      desiredCapabilities: {
        real_mobile: true,
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ],
          androidPackage: 'org.mozilla.firefox',
          // add the device serial to run tests on, if multiple devices are online
          // Run command: `$ANDROID_HOME/platform-tools/adb devices`
          // androidDeviceSerial: 'ZD2222W62Y'
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },

    'android.emulator.firefox': {
      desiredCapabilities: {
        real_mobile: false,
        avd: 'nightwatch-android-11',
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ],
          androidPackage: 'org.mozilla.firefox',
          // add the device serial to run tests on, if multiple devices are online
          // Run command: `$ANDROID_HOME/platform-tools/adb devices`
          // androidDeviceSerial: 'ZD2222W62Y'
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },
    
    'android.real.chrome': {
      desiredCapabilities: {
        real_mobile: true,
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ],
          androidPackage: 'com.android.chrome',
          // add the device serial to run tests on, if multiple devices are online
          // Run command: `$ANDROID_HOME/platform-tools/adb devices`
          // androidDeviceSerial: ''
        },
      },
    
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    'android.emulator.chrome': {
      desiredCapabilities: {
        real_mobile: false,
        avd: 'nightwatch-android-11',
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ],
          androidPackage: 'com.android.chrome',
          // add the device serial to run tests on, if multiple devices are online
          // Run command: `$ANDROID_HOME/platform-tools/adb devices`
          // androidDeviceSerial: ''
        },
      },
    
      webdriver: {
        start_process: true,
        // path to chromedriver executable which can work with the factory
        // version of Chrome mobile browser on the emulator (version 83).
        server_path: 'chromedriver-mobile/chromedriver.exe',
        cli_args: [
          // --verbose
        ]
      }
    },
    
    app: {
      selenium: {
        start_process: true,
        use_appium: true,
        host: 'localhost',
        port: 4723,
        server_path: '',
        // args to pass when starting the Appium server
        cli_args: [
          // automatically download the required chromedriver
          // '--allow-insecure=chromedriver_autodownload'
        ],
        // Remove below line if using Appium v1
        default_path_prefix: ''
      },
      webdriver: {
        timeout_options: {
          timeout: 150000,
          retry_attempts: 3
        },
        keep_alive: false,
        start_process: false
      }
    },
    
    'app.android.emulator': {
      extends: 'app',
      'desiredCapabilities': {
        // More capabilities can be found at https://github.com/appium/appium-uiautomator2-driver#capabilities
        browserName: null,
        platformName: 'android',
        // `appium:options` is not natively supported in Appium v1, but works with Nightwatch.
        // If copying these capabilities elsewhere while using Appium v1, make sure to remove `appium:options`
        // and add `appium:` prefix to each one of its capabilities, e.g. change 'app' to 'appium:app'.
        'appium:options': {
          automationName: 'UiAutomator2',
          // Android Virtual Device to run tests on
          avd: 'nightwatch-android-11',
          // While Appium v1 supports relative paths, it's more safe to use absolute paths instead.
          // Appium v2 does not support relative paths.
          app: `${__dirname}/nightwatch/sample-apps/wikipedia.apk`,
          appPackage: 'org.wikipedia',
          appActivity: 'org.wikipedia.main.MainActivity',
          appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
          // chromedriver executable to use for testing web-views in hybrid apps
          chromedriverExecutable: `${__dirname}/chromedriver-mobile/chromedriver.exe`,
          newCommandTimeout: 0
        }
      }
    },

    'app.android.real': {
      extends: 'app',
      'desiredCapabilities': {
        // More capabilities can be found at https://github.com/appium/appium-uiautomator2-driver#capabilities
        browserName: null,
        platformName: 'android',
        // `appium:options` is not natively supported in Appium v1, but works with Nightwatch.
        // If copying these capabilities elsewhere while using Appium v1, make sure to remove `appium:options`
        // and add `appium:` prefix to each one of its capabilities, e.g. change 'app' to 'appium:app'.
        'appium:options': {
          automationName: 'UiAutomator2',
          // While Appium v1 supports relative paths, it's more safe to use absolute paths instead.
          // Appium v2 does not support relative paths.
          app: `${__dirname}/nightwatch/sample-apps/wikipedia.apk`,
          appPackage: 'org.wikipedia',
          appActivity: 'org.wikipedia.main.MainActivity',
          appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
          // 'chromedriver' binary is required while testing hybrid mobile apps.
          // 
          // Set `chromedriverExecutable` to '' to use binary from `chromedriver` NPM package (if installed).
          // Or, put '--allow-insecure=chromedriver_autodownload' in `cli_args` property of `selenium`
          // config (see 'app' env above) to automatically download the required version of chromedriver
          // (delete `chromedriverExecutable` capability below in that case).
          chromedriverExecutable: '',
          newCommandTimeout: 0,
          // add device id of the device to run tests on, if multiple devices are online
          // Run command: `$ANDROID_HOME/platform-tools/adb devices` to get all connected devices
          // udid: '',
        }
      }
    },
    
    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for using the browserstack.com cloud service                    |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USERNAME                                                       |
    // - BROWSERSTACK_ACCESS_KEY                                                     |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////
    /* browserstack: {
      selenium: {
        host: 'hub.browserstack.com',
        port: 443
      },
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'bstack:options': {
          userName: '${BROWSERSTACK_USERNAME}',
          accessKey: '${BROWSERSTACK_ACCESS_KEY}'
        }
      },

      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 60000,
          retry_attempts: 3
        },
        keep_alive: true,
        start_process: false
      }
    },

    'browserstack.local': {
      extends: 'browserstack',
      desiredCapabilities: {
        'browserstack.local': true
      }
    },
    
    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true
        }
      }
    },
    
    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
    
    'browserstack.local_chrome': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    
    'browserstack.local_firefox': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        browserName: 'firefox'
      }
    },
    
    'browserstack.android.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        'bstack:options' : {
          osVersion: '12.0',
          deviceName: 'Samsung Galaxy S22'
        },
        browserName: 'chrome',
        'goog:chromeOptions': {
          // w3c: false
        }
      }
    },

    'browserstack.ios.safari': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'safari',
        'bstack:options' : {
          osVersion: "15.5",
          deviceName: "iPhone 13"
        },
        browserName: 'safari'
      }
    }, */
    
  },
  
};
