exports.RegisterPage = class RegisterPage{

    constructor(page){

        this.page = page;

        this.signup_link = page.locator('.HPHeaderSignup > a');
        this.terms_and_conditions_text = page.getByText('I have read and agree to the Terms of Service.');
        this.fullname_textbox = page.locator('#ctl00_MainContent_SignupControl1_TextBoxFullName');
        this.email_textbox = page.locator('#ctl00_MainContent_SignupControl1_TextBoxEmail');
        this.password_textbox = page.locator('#ctl00_MainContent_SignupControl1_TextBoxPassword');
        this.timezone_dropdown = page.locator('#ctl00_MainContent_SignupControl1_DropDownTimezone');
        this.terms_and_conditions_checkbox = page.getByLabel('I have read and agree to the Terms of Service.')
        this.submit_button = page.getByRole('button', { name: 'Submit' });
        this.menu_bar = page.locator('div').filter({ hasText: 'iPhone App | Upgrade to Pro | Settings | Logout' }).nth(2);
    }

    async gotoRegisterPage(){
        await this.page.goto('https://todo.ly/');
        await this.signup_link.click();

    }

    async register(fullname, email, password, timezone){
            
        await this.fullname_textbox.fill(fullname);
        await this.email_textbox.fill(email);
        await this.password_textbox.fill(password);
        await this.timezone_dropdown.selectOption(timezone);
        await this.terms_and_conditions_checkbox.check();
        await this.submit_button.click();

        //await this.page.waitForTimeout(3000);
    }
}