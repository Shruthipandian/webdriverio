const HomePage = require("../pages/HomePage");
const HomePageData = require("../testData/HomePageData");
const safeActions = require("../Utilities/SafeActions");
const ourCarLocators = require("../locators/ourCars")

describe("Verify our cars Menu", () => {
    it("Verify the different cars menu", async() => {
        await HomePage.open();
        await HomePage.navigateToOurCars();

        await safeActions.isDisplayed(ourCarLocators.electric);
        await safeActions.smartClick(ourCarLocators.electric);
        await safeActions.smartClick(ourCarLocators.hybrids);
        await safeActions.smartClick(ourCarLocators.mild_hybrids);
        await safeActions.isDisplayed(ourCarLocators.electric_c40_recharge);
        await safeActions.isDisplayed(ourCarLocators.electric_XC40_recharge);
    });

    it("Verify the different electric cars ", async() => {


        await safeActions.isDisplayed(ourCarLocators.electric);
        await safeActions.smartClick(ourCarLocators.electric);
        await safeActions.isDisplayed(ourCarLocators.electric_c40_recharge);
        await safeActions.isDisplayed(ourCarLocators.electric_XC40_recharge);
    });
});