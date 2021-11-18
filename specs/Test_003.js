const HomePage = require("../pages/HomePage");
const HomePageData = require("../testData/HomePageData");
const safeActions = require("../Utilities/SafeActions");

describe("Verify the buy item frommeny", () => {
    it("verify design your volvo page", async() => {
        await HomePage.open();
        await HomePage.navigateToCarConfigurator();
        await safeActions.verifyPageTitle(HomePageData.pageTitles.carConfiguratorPage);
    });
});