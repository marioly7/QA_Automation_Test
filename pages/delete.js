exports.DeletePage = class DeletePage {

    constructor(page){

        this.page = page;

        this.options_button = page.getByRole('img', { name: 'Options' });
        this.delete_button = page.getByRole('link', { name: 'Delete', exact: true });
        this.item_list = page.locator('#mainItemList li');
        this.item_list_container = page.locator('#mainItemList');
        this.deleted_message = page.getByText('Info. Item has been Deleted');
        this.inbox_module = page.getByRole('cell', { name: 'Inbox', exact: true });
        this.module_title =  page.locator('#CurrentProjectTitle');
    }

    async gotoInboxModule(){
        await this.inbox_module.click();
    }

    async delete(){
    
        await this.options_button.click();
        await this.delete_button.click();
    
    }
}