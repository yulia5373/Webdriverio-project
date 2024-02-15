class HomePage{
open()
{
    return browser.url('https://www.wildberries.by/');
}

};

//export default HomePage;

module.exports = new HomePage();

