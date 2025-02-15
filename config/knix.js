let test_settings = function (
    chromeSettings,
    edgeSettings,
    firefoxSettings
  ) {
    return {
      KnixStagingChrome: {
        launchUrl: "https://knix.com/",
        skip_testcases_on_fail: false,
        globals: {
         
         env: "Staging",         
        },  
        desiredCapabilities: chromeSettings,
      },
      KnixStagingEdge: {
        launchUrl: "https://knix.com/",
        skip_testcases_on_fail: false,
        globals: {
          env: "Staging",          
        },
        desiredCapabilities: edgeSettings,
      },
      KnixStagingFirefox: {
        skip_testcases_on_fail: false,
        launchUrl: "https://knix.com/",
        globals: {         
          env: "Staging",          
        },
        desiredCapabilities: firefoxSettings,
      },
      
    };
  };
  module.exports = {
    test_settings,
  };
  