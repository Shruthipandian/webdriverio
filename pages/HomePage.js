const HomePageLocators = require("../locators/HomePage");
const safeActions = require("../Utilities/SafeActions");

class HomePage {
    async open() {
        await browser.url('');
        browser.maximizeWindow();
        await safeActions.smartClick(HomePageLocators.acceptButton);
    }
    async navigateToCarConfigurator() {
        await safeActions.smartClick(HomePageLocators.menuItems);
        await safeActions.smartClick(HomePageLocators.buyButton);
        await safeActions.smartClick(HomePageLocators.carConfigurator);
    }
    async navigateToOurCars() {
        await safeActions.smartClick(HomePageLocators.Menu_our_car);

    }

}
module.exports = new HomePage();