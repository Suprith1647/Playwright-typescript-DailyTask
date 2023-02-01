import { chromium, test } from "@playwright/test";

test("login test demo", async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]")
    //await page.click("text=Login")
    await page.click("'Login'")     
    await page.fill("input[name='email']", "suprith.narayana@atmecs.com")
    await page.fill("input[type='password']", "Suprith@4440")
    await page.click("input[type='submit']");
    await page.waitForTimeout(5000);
    await browser.close();

    // const newContext = await browser.newContext()
   
    // const newPage = await newContext.newPage();
    // await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
    // await page.waitForTimeout(5000);

})