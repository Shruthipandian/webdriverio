const HomePage = require("../pages/HomePage");
const HomePageData = require("../testData/HomePageData");
const safeActions = require("../Utilities/SafeActions");
const HomePageLocator = require("../locators/HomePage");

describe("Verify the Volvo Home Page Nav Bar", () => {
    it("Verify navigation bar", async() => {
        await HomePage.open();
        await safeActions.verifyPageTitle(HomePageData.pageTitles.homePageTitle);
        await safeActions.isDisplayed(HomePageLocator.MenuItems);
        await safeActions.isDisplayed(HomePageLocator.Menu_our_car);
        await safeActions.isDisplayed(HomePageLocator.homepagevideo);
        await HomePage.navigateToCarConfigurator();
        await safeActions.verifyPageTitle(HomePageData.pageTitles.carConfiguratorPage);
    });
});
