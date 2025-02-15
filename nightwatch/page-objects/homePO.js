module.exports = {
    url: function() {
      return this.api.launchUrl;
    },
    elements: {
      btnSearch: {
        selector: 'button[type="search"]'
      },
      txtSearch: {
        selector: 'input[type="search"]'
      },
      txtEachProdDesc: {
        selector: 'h3'
      }
    },
    commands: [{
      async launchHomePage() {
        await this.navigate();
        await this.waitForElementVisible('@btnSearch', 15000);
      },
      async clickSearchButton() {
        await this.waitForElementVisible('@btnSearch', 500);
        await this.click('@btnSearch'); // Updated method to use the correct one
      },
      async typeSearch(text) {
        await this.waitForElementVisible('@txtSearch', 500);
        await this.setValue('@txtSearch', text);
      }
    }]
  };
  