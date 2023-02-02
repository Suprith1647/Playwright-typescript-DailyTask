import {test} from "@playwright/test";

test("Download Files",async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox","Like,Share,comment & subs");
    await page.click("id=create")
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])
   const path = await download[0].path();
   console.log(path);
})