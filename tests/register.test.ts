import { test } from "@playwright/test";
import  registerPage  from "../Pages/register";

test('register new user',async ({page}) => {
   await page.goto('./index.php?route=account/register')
   const RegisterPage = new registerPage(page);

  await RegisterPage.fillFirstName();
  await RegisterPage.fillLastName();
  await RegisterPage.fillEmail();
  await RegisterPage.fillTelphone();
  await RegisterPage.fillPassword();
  await RegisterPage.fillConfirmPassword();
  await RegisterPage.markAgreeCheckbox();
  await RegisterPage.clickContinue();
  await RegisterPage.assertSuccessfulRegistration();
  await RegisterPage.clickContinue2();

   
})