module.exports = {
    url: function() {
      return this.api.launchUrl;
    },
    elements: {
      btnSearch: {
        selector: 'button[type="search"]'
      },
      txtSearch: {
        selector: 'input[type="search"]'
      },
      btnSearchRound:{
        selector:'form  button svg circle'
      },     
      linkPopUpCanada:{
        selector:".spicegems_cr_modal-dialog #spicegems_cr_btn_yes"
      },
      linkPopUpUSA:{
        selector:".spicegems_cr_modal-dialog #spicegems_cr_btn_no"
      },
      txtEachProdDesc: {
        selector: "h3.max-w-prose.font-medium"
      },
    },
    commands: [{
      async launchHomePage() {
        await this.navigate();
        await this.waitForElementVisible('@btnSearch', 10000);
      },
      async selectShopCanada(){
        await this.waitForElementVisible('@linkPopUpCanada', 10000);
        await this.click('@linkPopUpCanada'); 
      },
      async selectShopUS(){
        await this.waitForElementVisible('@linkPopUpUSA', 8000);
        await this.click('@linkPopUpUSA'); 
      },
      async clickSearchButton() {
        await this.waitForElementVisible('@btnSearch', 500);
        await this.click('@btnSearch'); 
      },
      async typeSearch(text) {
        await this.waitForElementVisible('@txtSearch', 500);
        await this.setValue('@txtSearch', text);
        await this.click('@btnSearchRound');  
      },
      async verifySearchValue(searchText){
        const txtEachProdDesc = this.elements.txtEachProdDesc.selector;
        await this.waitForElementVisible('@txtEachProdDesc', 5000);
        const productElements = await browser.element.findAll(txtEachProdDesc);
        productElements.forEach(async(elem)=>{
          await this.waitForElementVisible(elem,5000);
          const prodText= await elem.getText();
          console.log('prodText***',prodText);
          if(prodText !== undefined && prodText !== null){
            await this.pause(500);
            browser.verify.ok(true,await prodText.includes(searchText),`${prodText} contains searched value ${searchText}`)
          }
        })
         


      }
    }]
  };
  