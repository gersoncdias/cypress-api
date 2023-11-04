class loginPage {
    constructor() {
        this.campo_login = "[data-qa-selector='login_field']"
        this.campo_senha = "[data-qa-selector='password_field']"
        this.btn_login = "[data-qa-selector='sign_in_button']"
        this.avatar = '.header-user-avatar'
    }
}

module.exports = loginPage