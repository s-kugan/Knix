module.exports = {
  elements: {
    btnAddToBag: {
      selector: "#pdp_atc",
    },
    txtCartContents: {
      selector: 'section[aria-labelledby="cart-contents"]',
    },
  },
  commands: [
    {
      async addToBag() {
        await this.waitForElementVisible("@btnAddToBag", 8000);
        await this.click("@btnAddToBag");
      },
    },
  ],
};
