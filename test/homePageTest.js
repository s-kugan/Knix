
let testdata = require("../data/data.json");

describe("Knix Home Page Test Cases", function () {
  //this.retries(1);

  this.tags = ["knixhomepage", "knixregression"];

  beforeEach(async (browser)=> {
    this.homepage = await browser.page.homePO();
    await this.homepage.launchHomePage();
    
  });

  it("Search for a product and ensure it returns relevant results.", async (browser) => {
    // Call the custom command to close the pop-up window
    await this.homepage.selectShopUS();

    await this.homepage.clickSearchButton();
    await this.homepage.typeSearch(testdata.product.search);
    
    
    this.homepage.waitForElementVisible('@txtEachProdDesc', 10000);  // Wait for the element to be visible    
    this.homepage.expect.element('@txtEachProdDesc').text.to.contain(testdata.product.search);
    this.homepage.verifySearchValue(testdata.product.search); 
    
    
  });

  afterEach(async function (browser) {
    await browser.end();
  });
});
