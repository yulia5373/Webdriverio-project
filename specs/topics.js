import {browser, expect, $} from '@wdio/globals';



const Topics = require ('./pages/topics.js')

describe('Topics tests', () => {
    it.skip('Open Topics and verify the page title', async () => {
      
//Open Explore Url
        await Topics.openExploreUrl();
        await browser.maximizeWindow();
        await Topics.topicsLink.click();
        const headerTopicText =await Topics.topicsHeader.getText();
        //console.log(`Yuliya and ${headerTopicText}`);
        await expect (headerTopicText).toEqual('Topics');
        //Check that URL contains some string 
        const currentUrl = await browser.getUrl();
        console.log(`Yulia ${currentUrl}`);
        await expect(currentUrl).toContain('topics');
        
    });
  });

  it.only('Select keyword in Search', async () => {
    await Topics.openExploreUrl();
    await browser.maximizeWindow();
    await Topics.topicsLink.click();
    await browser.pause(5000);

    //waitUntil
    // const topSearch = await $('button.header-search-button');
    // await browser.waitUntil (async function(){
      
    //     return topSearch.isClickable();
    // })
    const topSearch = await $('[data-target="qbsearch-input.hotkeyIndicator"]');
 //await expect(topSearch).toBeDisabled();
    await topSearch.click();

    const queryBuilder = await $('input#query-builder-test').addValue('webdriverio');
    await browser.keys('Enter');
   await $('div[title="TypeScript"]').click();
   await browser.pause(5000);
   const secondResult = await $('[data-testid="results-list"] > div:nth-of-type(2) h3 span');
   await secondResult.click();
   await browser.pause(5000); 
   const currentUrl2 = await browser.getUrl();
   console.log(`Yulia ${currentUrl2}`);
   await expect(currentUrl2).toContain('webdriverio');
  });