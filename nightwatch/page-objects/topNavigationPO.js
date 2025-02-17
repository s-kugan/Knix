module.exports = {

    elements:{

        linkSwim:{
            selector:"#nav_l1_3"
        }

    },
    commands:[{

        async selectSwimWear(){
            await this.waitForElementVisible('@linkSwim', 8000);
            await this.click('@linkSwim');
        }

    }]


}