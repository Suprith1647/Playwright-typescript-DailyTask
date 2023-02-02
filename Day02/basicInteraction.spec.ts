import {expect, test} from "@playwright/test";

//  test("Interaction with inputs",async ({page}) =>{

// await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
// const messageInput = page.locator("input#user-message")
// console.log(await messageInput.getAttribute("placeholder"));
// expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")
// console.log(await messageInput.inputValue());
// await messageInput.type("hi suprith");
// await page.waitForTimeout(5000);

// })
 test("sum", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator('#sum1')
    const sum2input = page.locator('#sum2')

    const getValuesBtn = page.locator("//button[text()='Get values']")
    let num1 = 121;
    let num2 =546;
    await sum1input.type(""+ num1);
    await sum2input.type(""+ num2);
    await getValuesBtn.click()
    const result = page.locator("#addmessage")
    console.log(await result.textContent());
    let expectedResult = num1+num2;
    expect(result).toHaveText(""+expectedResult)

 })
// test("checkbox", async({page})=>{
//     await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
//    const singlCheckbox = page.locator("id=isAgeSelected")
//     expect(singlCheckbox).not.toBeChecked();
//     await singlCheckbox.check();
//     expect(singlCheckbox).toBeChecked();
// })