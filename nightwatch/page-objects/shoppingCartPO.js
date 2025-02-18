module.exports = {
  elements: {
    btnAddToBag: {
      selector: "#pdp_atc",
    },
    txtCartContents: {
      selector: 'section[aria-labelledby="cart-contents"]',
    },
    btnCheckOut: {
      selector: "//a[contains(text(),'CHECKOUT NOW')]",
      locateStrategy: "xpath",
    },
  },
  commands: [
    {
      async addToBag() {
        await this.waitForElementVisible("@btnAddToBag", 8000);
        await this.click("@btnAddToBag");
      },
      async selectCheckout() {
        await this.waitForElementVisible("@btnCheckOut", 8000);
        await this.click("@btnCheckOut");
      },
    },
  ],
};
