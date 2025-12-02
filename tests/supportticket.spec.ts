import { test, expect } from '@playwright/test';

test('Verify that user is able to raise the support-tciket ', async ({ page }) => {
  await page.goto('https://newdbthree.thetopschool.com/');
  await page.getByRole('button', { name: 'Log in as Admin' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('dbthree05');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@12345');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByText('My Profile').click();
  await page.getByRole('link', { name: 'Account & Support Account &' }).click();
  await page.getByRole('button', { name: '+ Raise New Ticket' }).click();
  await page.getByRole('combobox', { name: 'What would you like help with?' }).click();
  await page.getByRole('option', { name: 'My Profile' }).click();
  await page.getByRole('textbox', { name: 'Tell us a bit more about the' }).click();
  await page.getByRole('textbox', { name: 'Tell us a bit more about the' }).fill('dsdsdsdsd');
  await page.getByText('Add Attachments').click();
  await page.setInputFiles('input[type="file"]', 'tests/uploads/istockphoto-598786236-612x612.jpg');
  await page.getByRole('button', { name: 'Send Request' }).click();
});