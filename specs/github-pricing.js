import {browser, expect, $} from '@wdio/globals';
import { faker } from '@faker-js/faker';


const githubPricing = require ('./pages/GitHub-pricing.js')

describe('GitHub Pricing', () => {
    it.skip('Select package with free pricing', async () => {
   
await githubPricing.open();
await browser.maximizeWindow();
await githubPricing.pricingLink.click();
await githubPricing.getforFreeBtn.waitForClickable({timeout: 5000});
await githubPricing.getforFreeBtn.click();

await browser.pause(5000);
await githubPricing.emailInput.setValue('Ocie96@gmail.com');
//await browser.pause(5000);
await githubPricing.continueforPass.waitForClickable({timeout: 5000});
await githubPricing.continueforPass.click();
await browser.pause(5000);
const lable1 = await githubPricing.labelPass;

console.log(lable1.getHTML);
await expect(lable1).toHaveText('Create a password*')

    });
  });

  describe('Test Suite Description', () => {
    it.skip ('Test Case Description', async () => {
        await githubPricing.open();
        await browser.maximizeWindow();
       // await browser.moveTo($('li:nth-of-type(2) > button'));
       const mouse = await $('li:nth-of-type(2) > button');
   await mouse.moveTo();
     await browser.pause(5000);
     await $('[href="https://resources.github.com/"]').click();
     await browser.pause(5000);
     await browser.switchWindow('https://resources.github.com/');
     await expect(browser).toHaveUrl('https://resources.github.com/');
  
    });
  });

  describe('Enterprise', () => {
    it.only('Enterprise', async () => {
        await githubPricing.open();
        await browser.maximizeWindow();

       const mouse = await githubPricing.solutionsOption;
   await mouse.moveTo();
     await browser.pause(2000);
     await $('a.HeaderMenu-dropdown-link[href="/enterprise"]').click();
     await browser.pause(5000);
    //  await browser.switchWindow('https://resources.github.com/');
    //  await expect(browser).toHaveUrl('https://resources.github.com/');
    await $('div.enterprise-lp a.Primer_Brand__Button-module__Button--primary___xIC7G > span.Primer_Brand__Button-module__Button__text___Z3ocU > span').click();
    await $('.pricing-recommended-plan').click();
    await browser.pause(2000);
    await browser.back();
    await browser.pause(2000);
    await $('.gutter-md-spacious > :nth-child(2)').click();
    await browser.pause(2000);
    const username = faker.internet.userName();
    const randomEmail = faker.internet.email();
    const company = faker.company.name();

    await $('#contact_request_name').setValue(username);
    await $('#contact_request_organization_name').setValue(company);
    await $('#contact_request_email').setValue(randomEmail);
    const radio1 = await $('input#contact_request_instance_type_gcp');
    await radio1.click();
    const radio2Yes = await $('#questions_yes');
    await radio2Yes.click();
    
    const textforQuestionsBox = faker.lorem.paragraph();
    const textArea = await $('#questions-list');
  await textArea.addValue(textforQuestionsBox);
    await browser.pause(5000);
    const dropdown = $('#contact_request_country');
    const selectedOption = await dropdown.getValue();
    //const selectedOption = await dropdown.getText();
    await expect (selectedOption).toEqual('US');
    console.log(selectedOption + " Yulia");
    const checkboxAgree = await $('#contact_request_agreed_to_terms');
    await checkboxAgree.click();
    await browser.pause(5000);
    });
  });

  describe('Test Suite Description', () => {
    it.skip('Test Case Description', async () => {
      await browser.url('https://enterprise.github.com/trial?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise&source=pricing-card-enterprise');
      await browser.maximizeWindow();
      // const company = faker.commerce.department();
      const company = faker.company.name();
      await $('#contact_request_organization_name').setValue(company);
      //await browser.pause(10000);
      const radio1 = await $('input#contact_request_instance_type_gcp');
      await radio1.click();
    const radio2Yes = await $('#questions_yes');
    await radio2Yes.click();

    const textforQuestionsBox = faker.lorem.paragraph();
    const textArea = await $('#questions-list');
  await textArea.addValue(textforQuestionsBox);

    const dropdown = $('#contact_request_country');
    const selectedOption = await dropdown.getValue();
    //const selectedOption = await dropdown.getText();
    await expect (selectedOption).toEqual('US');
    console.log(selectedOption + " Yulia");
    const checkboxAgree = await $('#contact_request_agreed_to_terms');
    await checkboxAgree.click();
    await browser.pause(5000);


    });
  });