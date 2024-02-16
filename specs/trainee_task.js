//const faker = require('faker');
import { faker } from '@faker-js/faker';
import traineePOM from './pages/traineePOM.js';
const HomePage = require ('./pages/traineePOM.js')


describe('TX=X=Sign-up in GitHub', () => {
    it.only('Click Sign-up and fill username and password', async () => {


        await traineePOM.open();
        await browser.maximizeWindow();
        const username = faker.internet.userName();
        const randomEmail = faker.internet.email();
        const password = faker.internet.password();
      await $('main > div:nth-of-type(1) dl input').setValue('Ocie96@gmail.com');
    //   await browser.keys('Enter');
    //     await browser.pause(5000);
       await $('div.home-campaign-hero button').click();
       // await browser.pause(5000);
const continueBtn = await $('button[data-continue-to="password-container"]');

       await continueBtn.waitForClickable();
       await browser.pause(2000);
       await continueBtn.click();
       await browser.pause(2000);
       await $('#password').setValue('Paridasa123!!!');
       await browser.pause(2000);
       await $('button[data-continue-to="username-container"]').click();
       await browser.pause(2000);
       await $('#login').setValue('yr-wowkw');
       await browser.pause(2000);
       await $('button[data-continue-to="opt-in-container"]').click();
       await browser.pause(2000);
       await $('button[data-continue-to="captcha-and-submit-container"]').click();
       await browser.pause(2000);
       const text = await $('div#root h2[data-theme="home.title"]');
       const mess = await text.getText();
       console.log("Yulya "+ mess);
       await browser.pause(2000);
await expect (mess).toEqual('Пожалуйста‚ решите эту задачу‚ чтобы мы знали‚ что вы реальный человек');
       //await $('#password').setValue('Paris12354!!**')
// await browser.waitUntil(async ()=> {
// const emailinInput = await $('#email');
// let attr = await emailinInput.getAttribute('value');
// console.log(attr);
// return attr === randomEmail;

// }
// );
await browser.pause(5000);

    });
  });
  
 