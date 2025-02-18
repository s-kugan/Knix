module.exports = {
  elements: {
    dropdownSize: {
      selector: "#pdp_size_dropdown button",
    },
    optionSize: {
      selector: 'li[role="option"]',
    },
  },
  commands: [
    {
      async openSizeDropDown(size) {
        await this.waitForElementVisible("@dropdownSize", 8000);
        await this.click("@dropdownSize");
        await this.waitForElementVisible("@optionSize", 5000);
        await this.setValue("@optionSize", size);
        await this.setValue("@optionSize", this.api.Keys.ENTER);
      },
    },
  ],
};
