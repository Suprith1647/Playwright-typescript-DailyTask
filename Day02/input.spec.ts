import test, { chromium } from  "@playwright/test";

test.describe("lear how to handel input fieldes", async () =>{
    // let browser:Browser;
    // let context: BrowserContext;
    // let page:Page;
    // test.beforeAll(async () =>{
    //     let browser = await chromium.launch({
    //         headless:false
    //     });
    //     let context = await browser.newContext()
    //     let page= await context.newPage()
    // })
    test("Enter your full name", async({page}) => {
      await page.goto("https://letcode.in/edit")
        //await page.type("id=fullName","suprith narayana")
        const name = page.locator("#fullName")
        await name.type("suprith narayana")
        
    })
})