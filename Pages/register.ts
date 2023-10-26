import { Page, expect } from "@playwright/test";

function generateRandomName(): string {
   const randomNumber = Math.floor(Math.random() * 1000);
   const randomName = `testUser${randomNumber}`;
   return randomName;
 }
 
 function generateFakeEmail(): string {
   const randomString = Math.random().toString(36).substring(2, 8);
   const fakeEmail = `fake${randomString}@test.com`;
   return fakeEmail;
 }


 

export default class registerPage{
   
   
   constructor (public page: Page){

   }

   async fillFirstName(){
       const firstName = generateRandomName()
       await this.page.locator('#input-firstname').fill(firstName)
       //expect(this.page.locator('#input-firstname')).toContainText(firstName)
   }

   async fillLastName(){
     const lastName = generateRandomName()
      await this.page.locator('#input-lastname').fill(lastName)
      //expect(this.page.locator('#input-lastname')).toContainText(lastName)
   }

   async fillEmail(){
      const email = generateFakeEmail()
      await this.page.locator('#input-email').fill(email)
     // expect(this.page.locator('#input-email')).toContainText(email)
   }

   async fillTelphone(){
      await this.page.locator('#input-telephone').fill('1234567890')
   }

   async fillPassword(){
      await  this.page.locator('#input-password').fill('Password@123')
   }

   async fillConfirmPassword(){
      await  this.page.locator('#input-confirm').fill('Password@123')
   }

   async markAgreeCheckbox(){
      await this.page.getByText('I have read and agree to the Privacy Policy').click();
   }

   async clickContinue(){
      await  this.page.getByRole('button', {name:'Continue' }).click()
   }

   async assertSuccessfulRegistration(){
      await expect(this.page.getByText(' Your Account Has Been Created!')).toContainText(' Your Account Has Been Created!')
   }

   
   async clickContinue2(){
      await  this.page.getByRole('link', {name:'Continue' }).click()
   }

}