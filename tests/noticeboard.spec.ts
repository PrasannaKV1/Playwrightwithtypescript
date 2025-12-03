import { test, expect } from '@playwright/test';

test('Verify admin is able to create the notice board  ', async ({ page }) => {
  await page.goto('https://newdbthree.thetopschool.com/');
  await page.getByRole('button', { name: 'Log in as Admin' }).click();
  await page.locator('input[name="userName"]').fill('dbthree05');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@12345');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'School' }).click();
  await page.getByRole('button', { name: 'Create notice' }).click();
  await page.getByTestId('content-input').click();
  function randomLetters(length: number) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

console.log(randomLetters(10)); // Example: AbXyKpQaRt

  await page.getByTestId('content-input').fill(randomLetters(10));
  await page.getByTestId('select-button').click();
  await page.getByRole('option', { name: 'Important' }).click();
  await page.getByRole('textbox', { name: 'Description*' }).click();
  await page.getByRole('textbox', { name: 'Description*' }).fill('sasasasass');
  await page.getByRole('radio', { name: 'Publish right now' }).check();
  await page.getByText('+ Attach Files').click();
  await page.setInputFiles('input[type="file"]', 'tests/uploads/istockphoto-598786236-612x612.jpg');
  await page.getByRole('button', { name: 'Send' }).click();
});