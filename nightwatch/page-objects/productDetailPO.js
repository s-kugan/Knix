module.exports = {
  elements: {
    dropdownSize: {
      selector: "#pdp_size_dropdown button",
    },
    optionSize: {
      selector: 'li[role="option"]',
    },
    radioProductColor: {
      selector: '#pdp_color_swatch button[aria-checked="true"]',
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
      async getColor() {
        await this.waitForElementVisible("@radioProductColor", 5000);
        let color = await this.getAttribute("@radioProductColor", "title");
        return color;
      },
    },
  ],
};
