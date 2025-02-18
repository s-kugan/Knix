let testdata = require("../data/data.json");

describe("Knix Home Page Test Cases", function () {
  //this.retries(1);

  this.tags = ["knixhomepage", "knixregression"];

  beforeEach(async (browser) => {
    this.homepage = await browser.page.homePO();
    this.productlist = await browser.page.productListPO();
    this.navigation = await browser.page.topNavigationPO();
    this.productDetail = await browser.page.productDetailPO();
    this.cart = await browser.page.shoppingCartPO();
    this.payment = await browser.page.paymentPO();

    await this.homepage.launchHomePage();

    //close the pop-up window
    await this.homepage.selectShopUS();
  });

  it("Search : Search for a product and ensure it returns relevant results.", async () => {
    await this.homepage.clickSearchButton();

    //verify searched product returned the result
    await this.homepage.typeSearch(testdata.product.search);
    this.productlist.verifySearchValue(testdata.product.search);
  });

  it("Product Detail Page : Verify that selected product from the product list page displays the name and price correctly in the product detail page", async () => {
    await this.navigation.selectSwimWear();
    await this.productlist.selectFirstProductCategory();
    let prodDesc = await this.productlist.getProductDesc();
    let prodPrice = await this.productlist.getProductPrice();
    await this.productlist.selectFirstProductfromList();

    //Verify product detail page by name and price of the product
    this.productlist.expect
      .element("@txtProdDetailDesc")
      .text.to.contain(prodDesc);
    this.productlist.expect
      .element("@txtProdDetailDesc")
      .text.to.contain(prodPrice);
  });

  it("Product Basket: Ensure that selected from product  (name ,price and size) are displayed accurately in the 'Your Bag' page", async () => {
    await this.navigation.selectSwimWear();
    await this.productlist.selectFirstProductCategory();
    let prodDesc = await this.productlist.getProductDesc();
    let prodPrice = await this.productlist.getProductPrice();
    await this.productlist.selectFirstProductfromList();
    await this.productDetail.openSizeDropDown(testdata.productSize.size);
    await this.cart.addToBag();

    //Verify shopping cart contents by name,price and size of the product
    this.cart.expect.element("@txtCartContents").text.to.contain(prodDesc);
    this.cart.expect.element("@txtCartContents").text.to.contain(prodPrice);
    this.cart.expect
      .element("@txtCartContents")
      .text.to.contain(testdata.productSize.size);
  });

  it("Payment page : Check that the 'checkout' button leads to the 'Payment' page", async () => {
    await this.navigation.selectSwimWear();
    await this.productlist.selectFirstProductCategory();
    await this.productlist.selectFirstProductfromList();
    await this.productDetail.openSizeDropDown(testdata.productSize.size);
    await this.cart.addToBag();
    await this.cart.selectCheckout();
    this.payment.expect.element("@btnshopPay").to.be.visible;
    this.payment.expect.element("@btnPaynow").to.be.visible;
    this.payment.expect.element("@btnGpay").to.be.visible;
  });

  afterEach(async function (browser) {
    await browser.end();
  });
});
