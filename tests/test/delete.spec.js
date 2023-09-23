import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { DeletePage } from '../../pages/delete';

test('test', async ({ page }) => {

    const Login = new LoginPage(page);
    const Delete = new DeletePage(page);

    await Login.gotoLoginPage();
    await expect(Login.login_with_text).toBeVisible();

    await Login.login("testtest@gmail.com", "testtest");
    await expect(Login.menu_bar).toBeVisible();

    await Delete.gotoInboxModule();
    await expect(Delete.module_title).toHaveText('Inbox');

    const size = await Delete.item_list.count();
    await expect(size).toBeGreaterThanOrEqual(1);
    let elementToDelete = await Delete.item_list.last();
    const itemId = await elementToDelete.getAttribute('itemid');

    if(elementToDelete) {
        await elementToDelete.hover();
        await expect(Delete.options_button).toBeVisible();
        await Delete.delete();
        await expect(Delete.item_list).toHaveCount(size - 1);     
        await page.getByText('Info. Item has been Deleted').click();     
        await expect(Delete.deleted_message).toBeVisible();
    } else {
        console.log(`No se encontró un elemento con el ID ${itemId}.`);
    }
  
});