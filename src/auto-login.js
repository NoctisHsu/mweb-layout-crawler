const autoLogin = async (page, loginUserName, loginPwd) => {
    console.log("auto login starting...");
    await page.hover('a[data-qe-id="member_icon"]');
    await page.click('a[data-qe-id="menu_login_reg"]');
    await page.waitForNavigation({ waitUntil: 'networkidle0' }),
    console.log("login user: ", loginUserName)
    await page.type('input[data-qe-id="reg_phone_txt"]', loginUserName.toString());
    await page.type('input[name="passwordInput"]', loginPwd);
    await page.click('button[data-qe-id="login_btn"]');
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    console.log("auto login completed");
}

module.exports = autoLogin;