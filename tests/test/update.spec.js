import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { UpdatePage } from '../../pages/update';

test('test', async ({ page }) => {

    const Login = new LoginPage(page);
    const Update = new UpdatePage(page);

    await Login.gotoLoginPage();
    await expect(Login.login_with_text).toBeVisible();

    await Login.login("testtest@gmail.com", "testtest");
    await expect(Login.menu_bar).toBeVisible();

    await Update.gotoInboxModule();
    await expect(Update.module_title).toHaveText('Inbox');

    const project_id = "11189611";
    const new_inbox_text = "update inbox test 2";
    const size = await Update.item_list.count();
    const items = await Update.item_list.all();


    let elementToUpdate;
    for (const item of items) {
        const itemId = await item.getAttribute('itemid');
            if (itemId === project_id) {
                elementToUpdate = item;
                break;
            }
    }    

    if (elementToUpdate) {
        await elementToUpdate.hover();
        await expect(Update.options_button).toBeVisible();
        await Update.update(new_inbox_text);
        await expect(Update.item_list).toHaveCount(size);
        await page.waitForTimeout(2000);
        const updatedElement = await Update.item_list.locator(`[itemid="${project_id}"]`).first();
        await expect(updatedElement).toContainText(new_inbox_text);
    } else {
        console.log(`No se encontró un elemento con el ID ${project_id}.`);
    }

});