let testdata = require("../data/data.json");

describe("Knix Home Page Test Cases", function () {
  //this.retries(1);

  this.tags = ["knixhomepage", "knixregression"];

  beforeEach(async (browser) => {
    this.homepage = await browser.page.homePO();
    this.productlist = await browser.page.productListPO();
    this.navigation = await browser.page.topNavigationPO();

    await this.homepage.launchHomePage();

    //close the pop-up window
    await this.homepage.selectShopUS();
  });

  it("Search for a product and ensure it returns relevant results.", async (browser) => {
    await this.homepage.clickSearchButton();
    await this.homepage.typeSearch(testdata.product.search);
    this.productlist.verifySearchValue(testdata.product.search);
  });

  it("Verify that selected product from the product list page displays the name and price correctly in the product detail page", async (browser) => {
    await this.navigation.selectSwimWear();
    await this.productlist.selectFirstProductCategory();
    let prodDesc = await this.productlist.getProductDesc();
    let prodPrice = await this.productlist.getProductPrice();
    await this.productlist.selectFirstProductfromList();
    this.productlist.expect
      .element("@txtProdDetailDesc")
      .text.to.contain(prodDesc);
    this.productlist.expect
      .element("@txtProdDetailDesc")
      .text.to.contain(prodPrice);
  });

  afterEach(async function (browser) {
    await browser.end();
  });
});
