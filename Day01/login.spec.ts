import test, { chromium } from "@playwright/test";

test.describe ('Launch Browser', () =>{

    test('Open Letscode', async ()=>{
        const browser = await chromium.launch({
            headless:false
        })
        const context = await browser.newContext({
            recordVideo :{
                dir : "./videos"
            }
        });
        const page = await context.newPage();
        await page.goto('https://letcode.in/')
        await page.click("text=Log in")
        await page.fill("input[name='email']", 'suprith.narayana@atmecs.com')
        await page.fill("input[name='password']",'12345678')
        await page.click('button:text("LOGIN")')
        await page.click("text=Sign out")
       await browser.close();
    })
})