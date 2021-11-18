"use strict";

const assert = require("chai").assert;

class SafeActions {

    async verifyPageTitle(pageTitle_) {
        browser.pause(3000);
        await expect(browser).toHaveTitle(pageTitle_);
    }

    async smartClick(locator_) {
        try {
            const ele = $(locator_);
            this.scrollIntoElement(locator_)
            await ele.click();
            return this;
        } catch (e) {
            if (e.name !== null) {
                assert.fail("Failed to click " + e);
            }
        }
    }

    async setValue(locator_, text_) {
        try {
            const ele = $(locator_);
            this.waitForVisible(locator_, "");
            await ele.setValue(text_);
            return this;
        } catch (e) {
            if (e.name !== null) {
                assert.fail("Failed to enter text " + e);
            }
        }
    }

    async scrollIntoElement(locator_) {
        try {
            const ele = $(locator_);
            this.waitForVisible(locator_, "");
            await ele.scrollIntoView();
            return this;
        } catch (e) {
            if (e.name !== null) {
                assert.fail("Failed to scroll " + e);
            }
        }
    }

    async isDisplayed(locator_) {
        try {
            const ele = $(locator_);
            return this;
        } catch (e) {
            if (e.name !== null) {
                assert.fail("Failed to display " + e);
            }
        }
    }

    async isExisting(locator_) {
        try {
            const ele = $(locator_);
            return this;
        } catch (e) {
            if (e.name !== null) {
                assert.fail("Failed to display " + e);
            }
        }
    }
    async waitForVisible(locator_, time_) {
        try {
            const elem = $(locator_);
            let options = { timeout: 3000 };
            if (typeof time_ == "undefined") {
                console.log("Using default timeout of 3000ms");
            } else {
                options.timeout = time_;
            }
            const waitForDisplayed = await elem.waitForDisplayed(options);
            if (time_ !== "") {
                console.log("Waited " + time_ + "ms to be displayed");
            }
            return waitForDisplayed;
        } catch (e) {
            if (e.name !== null) {
                assert.fail("Element is not displayed \n" + e);
            }
        }
    };
}

module.exports = new SafeActions();