import { test, expect } from '@playwright/test';
import { LogoutPage } from '../../pages/logout';
import { LoginPage } from '../../pages/login';

test('test', async ({ page }) => {

    const Login = new LoginPage(page);
    const Logout = new LogoutPage(page);

    await Login.gotoLoginPage();
    await expect(Login.login_with_text).toBeVisible();

    await Login.login("testtest@gmail.com", "testtest");
    await expect(Login.menu_bar).toBeVisible();

    await Logout.logout();
    await expect(Logout.signup_button).toBeVisible();
});