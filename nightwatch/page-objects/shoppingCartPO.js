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
    btnRemove: {
      selector: "//button[contains(text(),'Remove')]",
      locateStrategy: "xpath",
    },
    txtContentEmpty: {
      selector: " section.grid.px-5",
    },
    btnIncreaseQty: {
      selector: 'button[name="increase-quantity"]',
    },
    btnDecreaseQty: {
      selector: 'button[name="decrease-quantity"]',
    },
    txtSubTotal: {
      selector: ".pr-1",
    },
    txtboxQty: {
      selector: ".px-2.text-center",
    },
  },
  commands: [
    {
      async addToBag() {
        await this.waitForElementVisible("@btnAddToBag", 8000);
        await this.click("@btnAddToBag");
      },
      async selectCheckout() {
        await this.waitForElementVisible("@btnCheckOut", 5000);
        await this.click("@btnCheckOut");
      },
      async removeProduct() {
        await this.waitForElementVisible("@btnRemove", 5000);
        await this.click("@btnRemove");
      },
      async increaseProductQty() {
        await this.waitForElementVisible("@btnIncreaseQty", 5000);
        await this.click("@btnIncreaseQty");
      },
      async decreaseProductQty() {
        await this.waitForElementVisible("@btnDecreaseQty", 5000);
        await this.click("@btnDecreaseQty");
      },
      async getTextboxQtyValue() {
        await this.waitForElementVisible("@txtboxQty", 5000);
        let qty = await this.getValue("@txtboxQty");
        console.log("qty***", qty);
        return qty;
      },
      async getSubTotal(text) {
        await this.waitForElementVisible("@txtSubTotal", 5000);
        const subTotalElement = await this.findByText(
          text /* {
          exact: true,
        } */
        );
        const subtotal = await subTotalElement.getText();
        console.log("subtotal***", subtotal);
        return subtotal;
      },
    },
  ],
};
