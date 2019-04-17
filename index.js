require('chromedriver'); //导入chrome浏览器 driver

const { Builder } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  let userName = '----------'; //支付宝账号
  let password = '**********'; // 支付宝密码
  let userNameArr = userName.split('');
  let pwdArr = password.split('');
  try {
    // await driver.get('https://www.baidu.com/');
    // driver.getCurrentUrl().then(b=>{console.log(b)});

    await driver.get('https://www.alipay.com/');
    await driver.findElement({xpath: "/html/body/div/div[1]/div/div[2]/a"}).click();
    // await driver.get('https://auth.alipay.com/login/index.htm');
    driver.findElement({ xpath: '//*[@id="J-loginMethod-tabs"]/li[2]' }).click();
    
    // driver.findElement({ xpath: '//*[@id="J-input-user"]' }).sendKeys(userName);
    // driver.findElement({ xpath: '//*[@id="password_rsainput"]' }).sendKeys(password);
    // await driver.findElement({ xpath: '//*[@id="J-login-btn"]' }).click();
    //点击账号密码登陆
    await driver.sleep(1000).then(function () {
      driver.findElement({ xpath: '//*[@id="J-loginMethod-tabs"]/li[2]' }).click();
    });
    //填充账号
    await driver.sleep(1000).then(function () {
      for (i in userNameArr) {
        (function (i) {
          driver.sleep(i * 200).then(function () {
            driver.findElement({ xpath: '//*[@id="J-input-user"]' }).sendKeys(userNameArr[i]);
          })
        })(i)
      }
    })
    //填充密码
    await driver.sleep(3 * 1000).then(function () {
      for (i in pwdArr) {
        (function (i) {
          driver.sleep(i * 500).then(function () {
            driver.findElement({ xpath: '//*[@id="password_rsainput"]' }).sendKeys(pwdArr[i]);
          })
        })(i)
      }
    })
    //点击登陆
    await driver.sleep(5 * 1000).then(function () {
      driver.findElement({ xpath: '//*[@id="J-login-btn"]' }).click();
    })
  } finally {
    // await driver.quit();
  }
})();
