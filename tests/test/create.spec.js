import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { CreatePage } from '../../pages/create';

test('test', async ({ page }) => {

    const Login = new LoginPage(page);
    const Create = new CreatePage(page);
    const inbox_text = "inbox nuevo 18";

    await Login.gotoLoginPage();
    await expect(Login.login_with_text).toBeVisible();

    await Login.login("testtest@gmail.com", "testtest");
    await expect(Login.menu_bar).toBeVisible();

    await Create.gotoInboxModule();
    await expect(Create.module_title).toHaveText('Inbox');

    const size = await Create.item_list.count();

    await Create.create(inbox_text);
    await page.waitForTimeout(2000);
    const lastItem = await Create.item_list.last().innerText();;

    await expect(Create.item_list_container).toContainText(inbox_text);
    await expect(Create.item_list).toHaveCount(size + 1);
    await expect(lastItem).toMatch(inbox_text);

});