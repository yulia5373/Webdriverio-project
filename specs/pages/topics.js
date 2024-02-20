


class Topics {
    openExploreUrl() {
        return browser.url('https://github.com/explore');
    }
get topicsLink()
{
    return $('div.site-subnav a:nth-of-type(2)');
}

get topicsHeader()
{
    return $('div.py-6 h1');
}

}


module.exports = new Topics();