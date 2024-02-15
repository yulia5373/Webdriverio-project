


class HomePage {
    open(url) {
        return browser.url(url);
    }

    get searchInput() {
        return $('input.search-component-input');
    }
    pressEnter() {
        return browser.keys('Enter');
    }

}

//export default HomePage;

module.exports = new HomePage();

