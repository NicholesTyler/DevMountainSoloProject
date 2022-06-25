import { By } from "selenium-webdriver"
import { Driver } from "selenium-webdriver/chrome";
import { BasePage } from "./basePage"
import { page } from "./PageObject"

const arcteryx = new page()

beforeEach(async () => {
    await arcteryx.navigate();
}); 
afterAll(async () => {
    await arcteryx.driver.quit();
})
test('Check Order Tracking',async () => {
    await arcteryx.click(arcteryx.declineCookies)
    await arcteryx.driver.sleep(10000)
    await arcteryx.setInput(arcteryx.orderEmail, "nicholes.ben@gmail.com\n")
    await arcteryx.setInput(arcteryx.orderNumber, "5504549\n")
    await arcteryx.click(arcteryx.lookUpMyTracking)
})
test('Log into Account.',async () => {
    await arcteryx.driver.sleep(10000)
    await arcteryx.setInput(arcteryx.emailAddress, "manpizza695@gmail.com\n")
    await arcteryx.setInput(arcteryx.passWord, "Abc1234!\n")
    await arcteryx.click(arcteryx.logInButton)
    
})
test('Add item to the cart.',async () => {
    await arcteryx.click(arcteryx.shopMens)
    await arcteryx.click(arcteryx.tShirt)
    await arcteryx.click(arcteryx.tShirtColor)
    await arcteryx.click(arcteryx.tShirtSize)
    await arcteryx.click(arcteryx.addToCart)
    await arcteryx.click(arcteryx.viewCart)
})
test('Remove item from the cart.',async () => {
    await arcteryx.click(arcteryx.shopMens)
    await arcteryx.click(arcteryx.tShirt)
    await arcteryx.click(arcteryx.tShirtColor)
    await arcteryx.click(arcteryx.tShirtSize)
    await arcteryx.click(arcteryx.addToCart)
    await arcteryx.click(arcteryx.viewCart)
    await arcteryx.click(arcteryx.removeItem)
})
test('Add a promocode.',async () => {
    await arcteryx.click(arcteryx.shopMens)
    await arcteryx.click(arcteryx.tShirt)
    await arcteryx.click(arcteryx.tShirtColor)
    await arcteryx.click(arcteryx.tShirtSize)
    await arcteryx.click(arcteryx.addToCart)
    await arcteryx.click(arcteryx.viewCart)
    await arcteryx.click(arcteryx.haveACode)
    await arcteryx.setInput(arcteryx.promoCode, "LAYERUP25\n")
})