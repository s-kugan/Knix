module.exports = {
  elements: {
    txtEachProdDesc: {
      selector: "h3.max-w-prose.font-medium",
    },
    txtEachProdPrice: {
      selector: "#priceWrapper  span:nth-child(1)",
    },
    linkEachProdCategory: {
      //selector: "#mainContent .h-full.group",
      selector: 'a[class="h-full group"]',
    },
    txtProdDetailDesc: {
      selector: ".relative.grid.items-start .grid.gap-2 .hidden",
    },
  },
  commands: [
    {
      async verifySearchValue(searchText) {
        const txtEachProdDesc = this.elements.txtEachProdDesc.selector;
        await this.waitForElementVisible("@txtEachProdDesc", 5000);
        const productElements = await browser.element.findAll(txtEachProdDesc);
        productElements.forEach(async (elem) => {
          await this.waitForElementVisible(elem, 5000);
          const prodText = await elem.getText();
          if (prodText !== undefined && prodText !== null) {
            await this.pause(500);
            browser.verify.ok(
              true,
              await prodText.includes(searchText),
              `${prodText} contains searched value ${searchText}`
            );
          }
        });
      },
      async selectFirstProductCategory() {
        await this.waitForElementVisible("@linkEachProdCategory", 8000);
        await this.click("@linkEachProdCategory");
      },
      async selectFirstProductfromList() {
        await this.waitForElementVisible("@txtEachProdDesc", 8000);
        let result = await this.getElementSize("@txtEachProdDesc");
        console.log("result***", result);
        await this.moveToElement("@txtEachProdDesc", 0, 0);
        await this.click("@txtEachProdDesc");
      },
      async getProductPrice() {
        await this.waitForElementVisible("@txtEachProdPrice", 8000);
        let price = await this.getText("@txtEachProdPrice");
        return price;
      },
      async getProductDesc() {
        await this.waitForElementVisible("@txtEachProdDesc", 8000);
        let price = await this.getText("@txtEachProdDesc");
        return price;
      },
    },
  ],
};
