exports.CreatePage = class CreatePage {

    constructor(page){  
            
        this.page = page;

        this.new_item_textbox = page.locator('#NewItemContentInput');
        this.add_button = page.getByRole('button', { name: 'Add' });
        this.item_list = page.locator('#mainItemList li');
        this.item_list_container = page.locator('#mainItemList');
        this.inbox_module = page.getByRole('cell', { name: 'Inbox', exact: true });
        this.module_title =  page.locator('#CurrentProjectTitle');
    }

    async gotoInboxModule(){
        await this.inbox_module.click();
    }

    async create(inbox_text){      

        await this.inbox_module.click();
        await this.new_item_textbox.click();
        await this.new_item_textbox.fill(inbox_text);
        await this.add_button.click();

    }
}