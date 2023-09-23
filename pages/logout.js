exports.LogoutPage = class LogoutPage {

    constructor(page){  
            
        this.page = page;

        this.logout_button = page.getByRole('link', { name: 'Logout' });
        this.menu_bar = page.locator('.HPHeaderLogin > a');
        this.signup_button = page.locator('.HPHeaderSignup > a');
    }

    async logout(){      

        await this.logout_button.click();

    }
}