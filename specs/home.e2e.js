
// //import {browser, expect, $} from '@wdio/globals';

// // // describe('Wildberries homepage', () => {
// // //     it('Access url, verify url and title', async () => {
    
// // // await browser.url('/');
// // // await browser.maximizeWindow();
// // // await expect(browser).toHaveUrl('https://ozon.by/');
// // // await expect(browser).toHaveTitle('OZON — интернет-магазин. Миллионы товаров по выгодным ценам');
// // //     });

// // //     it('Search content and verify text', async ()=>
// // //     {

// // //         const searchInput = await $('input[name="text"][placeholder="Искать на Ozon"]');
// // // await searchInput.addValue('трусы');
// // // await expect ($('input[name="text"][placeholder="Искать на Ozon"]')).toHaveValueContaining('трусы');
// // // await $('div.ag15-a').click();
// // // await $('svg.a2435-e9').click();

// // // await expect ($('div.w3v > strong')).toHaveTextContaining('трусы');


// // //     });

// // //  it('Access url, verify url and title', async () => {
    
// // // await browser.url('/');
// // // await browser.maximizeWindow();
// // // await expect(browser).toHaveUrl('https://ozon.by/');
// // // await expect(browser).toHaveTitle('OZON — интернет-магазин. Миллионы товаров по выгодным ценам');
// // //     });
// // //   });

// //   describe(
// //     'Autossugest', () => {
// //     it.only('Access url, verify url and title', async () => {
    
// // await browser.url('https://ozon.by/');
// // await browser.maximizeWindow();
// // await expect ($('div.ud2 a.j0a.d1u.ud1')).toBeDisplayed();
// // await expect ($('div.ud2 a.j0a.d1u.ud1')).toHaveTextContaining('Стать продавцом');
// // const expectedText = await ($('div.ud2 a.j0a.d1u.ud1')).getValue();
// // await expect (expectedText).toHaveTextContaining('lll');
// // //const text = await $('div.ud2 a.j0a.d1u.ud1').getText();
// // //await expect (text).toHaveTextContaining('kkk')
// // //await $('input[name="text"][placeholder="Искать на Ozon"]').click();
// // //await expect ($('div.j0a.aj1.ae3c.tsHeadline600Medium > span')).toHaveTextContaining('Рекомендуем для вас');
// // //console.log(await $('div.cad7 > div:first-child') .getText());
// // //await $('div.cad7 > div:first-child').click();
// // //await expect ($('h1.lp3')).toHaveTextContaining('Семена цветов бальзамин Махровый "Афина", смесь, О, 5 шт 1 упак.');
// //     });

   

// //   });

// //   describe(
// //     'Autossugest', () => {
// //     it('Access url, verify url and title', async () => {

// //         const searchDropdown = await $('div.search-list.search-catalog');
// //         const firstElementinSearch = await $('div.search-list.search-catalog > div:first-child > div');
        
    
// // await browser.url('https://www.wildberries.by/');
// // await browser.maximizeWindow();
// // await $('input.search-component-input').click();
// // await expect (searchDropdown).toBeDisplayed();

// // await browser.keys('ArrowDown');
// // const expectedText = firstElementinSearch.getHTML();
// // await browser.keys('Enter');
// // await expect ($('.page__title')).toHaveTextContaining(expectedText);

// //     });

   

// //   });



// //   describe(
// //     'Autossugest', () => {
// //     it.only('Add the item in a cart', async () => {

// //         const searchDropdown = await $('div.search-list.search-catalog');
// //         const firstElementinSearch = await $('div.card-grid > div:first-child');
// //         const addtoCartButton = await $('.card-grid > div:first-child button[data-tag="basketBtn"]');
// //         const cartIcon = await $('a.user-menu__btn[href="/basket"]');
        
        
    
// // await browser.url('https://www.wildberries.by/');
// // await browser.maximizeWindow();
// // await $('input.search-component-input').addValue('iphone');
// // await browser.pause(5000);
// // await browser.keys('Enter');

// // const priceofFirstItem = await browser.execute(() => {
// //   return document.querySelector('.card-grid > div:first-child span[data-tag="salePrice"]').textContent
// // })
// // await expect(priceofFirstItem).toEqual('34');
// // });



// // await expect (addtoCartButton).toBeDisplayed();
// // await addtoCartButton.click();

// // await browser.pause(5000);


// //     });

   

// //   });


//   describe('Autossugest', () => {
//     it.only('Add the item in a cart', async () => {
//       const searchDropdown = await $('div.search-list.search-catalog');
//       const firstElementinSearch = await $('div.card-grid > div:first-child');
//       const addtoCartButton = await $('.card-grid > div:first-child button[data-tag="basketBtn"]');
//       const cartIcon = await $('a.user-menu__btn[href="/basket"]');
//       const priceInCart = await $('user-menu__btn');
//       const quantityPlusButton = await $('button.quantity__plus');
  
//       await browser.url('https://www.wildberries.by/');
//       await browser.maximizeWindow();
//       await $('input.search-component-input').addValue('iphone');
//       await browser.pause(5000);
//       await browser.keys('Enter');
  
//       const priceofFirstItem = await browser.execute(() => {
//         return document.querySelector('.card-grid > div:first-child span[data-tag="salePrice"]').textContent;
//       });



//       await expect(priceofFirstItem).toEqual('2 340,62 р.');
  
//       await expect(addtoCartButton).toBeDisplayed();
//       await addtoCartButton.click();
  
     

//       await cartIcon.click();

//       const priceinCart = await browser.execute(() => {
//         return document.querySelector('div.b-item-price__lower').textContent;
//       });

//       await expect(priceofFirstItem).toEqual('2 340,62 р.');

//       await expect (priceofFirstItem).toEqual(priceinCart);

//       await quantityPlusButton.click();

//       const priceinCartUpdated = await browser.execute(() => {
//         return document.querySelector('div.b-item-price__lower').textContent;
//       });

//       await expect (priceinCartUpdated).not.toEqual(priceinCart);
//     });
//   });

