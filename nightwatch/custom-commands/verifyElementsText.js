// nightwatch/page-objects/homePO.js

module.exports = {
  elements: {
    txtEachProdDesc: {
      selector: 'h3.max-w-prose.font-medium' // Adjust the selector if necessary
    }
  },
  commands: [{
    async verifySearchValue(searchText) {
      const browser = this.api;

      // Wait for the element to be visible
      await browser.waitForElementVisible('@txtEachProdDesc', 5000);

      // Get all elements that match the selector
      const productElements = await browser.element.findAll('h3.max-w-prose.font-medium');

      console.log('productElements***', productElements);

      for (const elem of productElements) {
        console.log('elem***', elem);
        const prodText = await elem.getText();
        console.log('prodText***', prodText);

        if (prodText !== undefined && prodText !== null) {
          browser.verify.ok(
            prodText.includes(searchText),
            `${prodText} contains searched value ${searchText}`
          );
        }
      }
    }
  }]
};
