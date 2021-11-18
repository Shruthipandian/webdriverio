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
/*
describe("Verify the Volvo Home Page Test1", () => {
    it("to click learn more button in Volvo Home Page", async() => {
        await HomePage.open();
        await safeActions.verifyPageTitle(HomePageData.pageTitles.learnmore_btn);
    });
});
describe("Verify the Volvo Home Page Test1", () => {
    it("should detect if an element is clickable", async() => {
        const el = await $('#ModelIntro-1')
        let clickable = await el.isClickable();
        console.log(clickable); // outputs: true or false

        // wait for element to be clickable
        await browser.waitUntil(() => el.isClickable())

    });
});
describe("Verify the Volvo Home Page Test1", () => {
    it('should detect if an element is displayed', async() => {
        let elem = await $('ImageWithText-1');
        let isDisplayed = await elem.isDisplayed();
        console.log(isDisplayed);
    });
});





describe("Verify the Volvo Home Page Test2", () => {
    it("Verify the video in Volvo Home Page", async() => {
        await HomePage.open();
        await safeActions.verifyPageTitle(HomePageData.pageTitles.homePageTitle);


        await safeActions.verifyPageTitle(HomePageData.pageTitles.homepagevideo);
    });
});
*/