exports.LoginPage = class LoginPage{

    constructor(page){  
            
            this.page = page;

            this.login_link = page.locator('.HPHeaderLogin > a');
            this.login_with_text = page.getByText('Login with');
            this.email_textbox = page.locator('#ctl00_MainContent_LoginControl1_TextBoxEmail');
            this.password_textbox = page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword');
            this.submit_button = page.getByRole('button', { name: 'Submit' });
            this.menu_bar = page.locator('div').filter({ hasText: 'iPhone App | Upgrade to Pro | Settings | Logout' }).nth(2);
        }

        async gotoLoginPage(){
            await this.page.goto('https://todo.ly/');
            await this.login_link.click();
    
        }
    
        async login(email, password){
                
            await this.email_textbox.fill(email);
            await this.password_textbox.fill(password);
            await this.submit_button.click();
            
        }
}