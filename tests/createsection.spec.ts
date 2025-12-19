import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://newdbthree.thetopschool.com/');
  await page.getByRole('button', { name: 'Log in as Admin' }).click();
  await page.locator('input[name="userName"]').fill('dbthree0');
  await page.getByRole('textbox', { name: 'Username' }).fill('dbthree05');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@12345');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Log in as Admin' }).click();
  await page.locator('input[name="userName"]').fill('dbthree0');
  await page.getByRole('textbox', { name: 'Username' }).fill('dbthree05');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('T');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@12345');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://newdbthree.thetopschool.com/admin/dashboard');
  await page.getByRole('button', { name: 'Go to My School' }).click();
  await page.getByText('Academic Setup').click();
  await page.getByRole('tab', { name: 'Grades and subject' }).click();
  async function clickAddSection(page:any, gradeName:any) {
  await page
    .locator('tr', { hasText: gradeName })
    .locator('button:has-text("+")')
    .click();
}

// usage
await clickAddSection(page, 'Grade 3');
await clickAddSection(page, 'UKG');

  await page.getByRole('textbox', { name: 'Section Name*' }).click();
  await page.getByRole('textbox', { name: 'Section Name*' }).press('CapsLock');
  function randomLowercase(length:number) {
    let str = "";

    for (let i = 0; i < length; i++) {
        let ch = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        str += ch;
    }

    return str;
}

console.log(randomLowercase(6));

  await page.getByRole('textbox', { name: 'Section Name*' }).fill(randomLowercase(6));
  await page.getByRole('textbox', { name: 'Section Name*' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Number of Students' }).click();
  await page.getByRole('textbox', { name: 'Number of Students' }).fill('210');
  await page.getByRole('combobox').first().click();
  await page.getByRole('menuitem', { name: 'Select All' }).getByRole('checkbox').check();
  await page.locator('.MuiBackdrop-root.MuiBackdrop-invisible').click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('menuitem', { name: 'Select All' }).getByRole('checkbox').check();
  await page.locator('.MuiBackdrop-root.MuiBackdrop-invisible').click();
  await page.getByRole('button', { name: 'Add Section' }).click();
});