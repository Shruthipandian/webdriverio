class HomePageLocators {
    constructor() {
        this.acceptButton = "//button[@title='Accept']";
        this.menuItems = "//em[text()='Menu']";
        this.Menu_our_car = "//em[text()='Our Cars']";
        this.buyButton = "//em[text()='Buy']";
        this.carConfigurator = "//em[text()='Car Configurator']";
        this.learnmore_btn = "//*[@id='ModelIntro-1']/section/h2";
        this.homepagevideo = "//*[@id='movie_player']/div[3]/div[1]/a";


    }
}
module.exports = new HomePageLocators();