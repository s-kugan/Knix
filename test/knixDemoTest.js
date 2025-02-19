let testdata = require("../data/data.json");

describe("Knix Home Page Test Cases", function () {
  this.retries(1);

  this.tags = ["knixproductpage", "knixregression"];

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
    let prodColour = await this.productDetail.getColor();

    await this.cart.addToBag();

    //Verify shopping cart contents by name,price and size of the product
    this.cart.expect.element("@txtCartContents").text.to.contain(prodDesc);
    this.cart.expect.element("@txtCartContents").text.to.contain(prodPrice);
    this.cart.expect
      .element("@txtCartContents")
      .text.to.contain(testdata.productSize.size);
    this.cart.expect.element("@txtCartContents").text.to.contain(prodColour);
  });

  it("Payment page : Check that the 'checkout' button leads to the 'Payment' page", async () => {
    await this.navigation.selectSwimWear();
    await this.productlist.selectFirstProductCategory();
    await this.productlist.selectFirstProductfromList();
    await this.productDetail.openSizeDropDown(testdata.productSize.size);

    //Add the product into the cart and click Checkout button
    await this.cart.addToBag();
    await this.cart.selectCheckout();

    //Verify that button for Shop and button for gPay and paynow buttons are available and visible.
    this.payment.expect.element("@btnshopPay").to.be.visible;
    this.payment.expect.element("@btnPaynow").to.be.visible;
    this.payment.expect.element("@btnGpay").to.be.visible;
  });

  it("Product Quantity:Ensure that the customer can increase the product quantity by clicking the + button verify quantity and sub-total", async () => {
    await this.navigation.selectSwimWear();
    await this.productlist.selectFirstProductCategory();
    let prodPrice = await this.productlist.getProductPrice();
    let qty = 2;
    let calSubtotal = prodPrice * qty;
    await this.productlist.selectFirstProductfromList();
    await this.productDetail.openSizeDropDown(testdata.productSize.size);
    await this.cart.addToBag();

    //Increase the product qty by clicking + button in the cart
    await this.cart.increaseProductQty();
    let retrieveQty = await this.cart.getTextboxQtyValue();

    //Verify product qty is increased correctly in the cart
    browser.verify.ok(qty, retrieveQty);

    //verify the quantity in the title
    this.cart.expect.element("@titleh2Cart").text.to.contain(qty);

    //Verify the sub-total according to the qty change
    if (retrieveQty == qty) {
      let subtotal = await this.cart.getSubTotal();
      browser.verify.ok(calSubtotal.toFixed(2), subtotal);
    }
  });

  it("Ensure that the customer can remove the product from Your Bag page.", async () => {
    await this.navigation.selectSwimWear();
    await this.productlist.selectFirstProductCategory();
    await this.productlist.selectFirstProductfromList();
    await this.productDetail.openSizeDropDown(testdata.productSize.size);
    await this.cart.addToBag();

    //Remove the product from the cart
    await this.cart.removeProduct();
    this.cart.expect.element("@txtCartContents").to.not.be.present;

    //Verify the texts for emptyness in the cart
    this.cart.expect
      .element("@txtContentEmpty")
      .text.to.contain(testdata.cart.empty);
    this.cart.expect
      .element("@txtContentEmpty")
      .text.to.contain(testdata.cart.potential);
  });

  afterEach(async function (browser) {
    await browser.end();
  });
});
