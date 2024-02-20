


class githubPricing {
    open() {
        return browser.url('https://github.com/');
    }

    get pricingLink()

{return $('div.header-menu-wrapper a[href="/pricing"]');}

get getforFreeBtn ()
    {
        return $('[test_selector="plan-input-free"]');
    }

    get emailInput()
    {
        return $('input#email')
    }

      
    get labelPass ()
    {return $('#password-container label')}

    get continueforPass()
    {return $('button[data-continue-to="password-container"]')}

    get solutionsOption()
    {return $('li:nth-of-type(2) > button')}




}


module.exports = new githubPricing();

