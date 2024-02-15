
//import {browser, expect, $} from '@wdio/globals';
// describe('Test Suite Description', () => {
//   it('Test Case Description', async () => {
//     Test logic goes here
//   });
// });

//npx wdio

describe('Autossugest', () => {
    it.only('Add the item in a cart', async () => {
      const searchDropdown = await $('div.search-list.search-catalog');
      const firstElementinSearch = await $('div.card-grid > div:first-child');
      const addtoCartButton = await $('.card-grid > div:first-child button[data-tag="basketBtn"]');
      const cartIcon = await $('a.user-menu__btn[href="/basket"]');
      const priceInCart = await $('user-menu__btn');
      const quantityPlusButton = await $('button.quantity__plus');
  
      await browser.url('https://www.wildberries.by/');
      await browser.maximizeWindow();
      await $('input.search-component-input').addValue('iphone');
      await browser.pause(5000);
      await browser.keys('Enter');


      // // const priceofFirstItem = $('.card-grid > div:first-child span[data-tag="salePrice"]');

      // // await expect(priceofFirstItem).toHaveText('2 340,62 р.');
  
      // const priceofFirstItem = await browser.execute(() => {
      //   return document.querySelector('.card-grid > div:first-child span[data-tag="salePrice"]').textContent;
      // });



      // await expect(priceofFirstItem).toEqual('2 340,62 р.');
  
      // await expect(addtoCartButton).toBeDisplayed();
      // await addtoCartButton.click();
  
     

      // await cartIcon.click();

      // const priceinCart = await browser.execute(() => {
      //   return document.querySelector('div.b-item-price__lower').textContent;
      // });

      // await expect(priceofFirstItem).toEqual('2 340,62 р.');

      // await expect (priceofFirstItem).toEqual(priceinCart);

      // await quantityPlusButton.click();

      // const priceinCartUpdated = await browser.execute(() => {
      //   return document.querySelector('div.b-item-price__lower').textContent;
      // });

      // await expect (priceinCartUpdated).not.toEqual(priceinCart);
    });
  });

