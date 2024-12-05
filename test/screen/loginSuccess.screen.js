class LoginSuccess {
    constructor() {
      this.usernameSuccess = "~Username input field"
      this.passwordSuccess = "~Password input field"
      this.loginButtonSuccess = "~Login button"
    }

    async userLoginSuccess(username, password) {
        await $(this.usernameSuccess).setValue(username)
        await $(this.passwordSuccess).setValue(password)
        await $(this.loginButtonSuccess).click()
}
}


export default new LoginSuccess();