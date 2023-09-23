import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register';

test('test', async ({ page }) => {

  const Register = new RegisterPage(page);

  await Register.gotoRegisterPage();
  await expect(Register.terms_and_conditions_text).toBeVisible();

  const min = 100;
  const max = 5000;
  const random_integer = Math.floor(Math.random() * (max - min) + min);
  const random_email = `mariolyemail${random_integer}@gmail.com`;

  await Register.register('Marioly Vargas', random_email, 'abcde', 'Venezuela Standard Time');
  await expect(Register.menu_bar).toBeVisible();

});