class ourCarsLocators {
    constructor() {

        this.electric = "//*[@id='site-nav-cars-menu-section-tab-0']/h2";
        this.electric_c40_recharge = "//em[text()='C40 Recharg']";
        this.electric_XC40_recharge = "//em[text()='XC40_Recharge']";
        this.hybrids = "//*[@id='site-nav-cars-menu-section-tab-1']/h2";
        this.mild_hybrids = "//*[@id='site-nav-cars-menu-section-tab-2']/h2";


    }
}
module.exports = new ourCarsLocators();