 class LoginFail {
        constructor() {
          this.usernameFail = "~Username input field"
          this.passwordFail = "~Password input field"
          this.loginButtonFail = "~Login button"
          this.alertError = "//android.view.ViewGroup[@content-desc='generic-error-message']/android.wiget.TextView"
        }

        async userLoginFail(username, password) {
            await $(this.usernameFail).setValue(username)
            await $(this.passwordFail).setValue(password)
            await $(this.loginButtonFail).click()
    }
    }


    export default new LoginFail();