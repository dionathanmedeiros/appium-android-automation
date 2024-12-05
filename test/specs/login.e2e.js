import userData from '../data/userData.json' with { type: "json"}
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screen/menu.screen.js'
import LoginFail from '../screen/loginFail.screen.js'
import LoginSuccess from '../screen/loginSuccess.screen.js'


describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
                                         // Access Menu Aplication
     await MenuScreen.accessLoginScreen()
    })
                                        // Login attempt with wrong credentials
    it.skip('login fail in aplication', async () => {
     await LoginFail.userLoginFail(userData.userFail.username, userData.userFail.password)
     await expect($(LoginFail.alertError).toHaveText('Provided credentials do not match any user in this service.'))
    })
                                        // Login success in aplication
     it('login success in aplication', async () => {
     await LoginSuccess.userLoginSuccess(userData.userSuccess.username, userData.userSuccess.password)
     })
    })

