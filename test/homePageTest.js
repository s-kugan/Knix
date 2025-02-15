
describe("Knix Home Page Test Cases", function () {
  this.retries(1);

  this.tags = ["knixhomepage", "knixregression"];

  beforeEach(async (browser)=> {
    this.homepage = await browser.page.homePO();
    await this.homepage.launchHomePage();
    
  });

  it("Search for a product and ensure it returns relevant results.", async (browser) => {
    await this.homepage.clickSearchButton();
    await this.homepage.typeSearch('High Rise');
    this.homepage.expect.elements('@txtEachProdDesc').text.to.contain("High Rise");
  });

  afterEach(async function (browser) {
    await browser.end();
  });
});
