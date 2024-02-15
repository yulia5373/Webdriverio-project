
// //import 'core-js/stable';

// import {browser, expect, $} from '@wdio/globals';

// import HomePage from '../pages/home-page.js';
// const homePage = new HomePage();
// // describe('Test Suite Description', () => {

// //     it('Test Case Description', async () => {
// //       // Test logic goes here

// //       await browser.url('https://practice.sdetunicorns.com/');
// a
// //       const headingText = await $('h1.elementor-heading-title');

// //       //const headingText = await a.getText();
// //     await expect (headingText).toHaveText('2Think different. Make different.');
// //       //(await $('h1.elementor-heading-title')).click();
// //       browser.pause(5000);
// //     });
// //   });


  describe('wild', () => {

    before(async()=>{
      //await browser.url('https://www.wildberries.by/');
      await homePage.open();
      

    });

    it('Test Case Description', async () => {
      await expect(browser).toHaveUrl('https://www.wildberries.by/');
    });
    it('wild', async () => {

  //await HomePage.open();
       // await browser.maximizeWindow();
        const text1 = await $('a[data-text="strBecomeASeller"]');
        //await browser.debug()
        
       await expect (text1).toHaveText('Стать продавцом');

    }
    );
  });




