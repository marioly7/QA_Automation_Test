exports.UpdatePage = class UpdatePage {
    
        constructor(page){
    
            this.page = page;
    
            this.options_button = page.getByRole('img', { name: 'Options' });
            this.update_button = page.getByRole('link', { name: 'Edit', exact: true });
            this.item_list = page.locator('#mainItemList li');
            this.item_list_container = page.locator('#mainItemList');
            this.edit_textbox = page.locator('#ItemEditTextbox');
            this.save_button = page.getByRole('img', { name: 'Save' });
            this.inbox_module = page.getByRole('cell', { name: 'Inbox', exact: true });
            this.module_title =  page.locator('#CurrentProjectTitle');
        }
    
        async gotoInboxModule(){
            await this.inbox_module.click();
        }
        
        async update(new_inbox_text){
        
            await this.options_button.click();
            await this.update_button.click();
            await this.edit_textbox.first().fill(new_inbox_text);
            await this.save_button.click();
        
        }
}
