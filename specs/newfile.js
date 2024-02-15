//test
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