import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class page extends BasePage {
    search: By = By.className("header-search")
    searchBar: By = By.xpath('//a[@id="search"]')
    logIn: By = By.xpath('//a[@href="/us/en/account/login"]')
    emailAddress: By = By.id("email-login")
    passWord: By = By.id("password-login")
    logInButton: By = By.className("sc-lbxAil kLTYux button sc-eKBdFk lewLda button--Outdoor button--Standard")
    declineCookies: By = By.id("reject-all-cookies")
    shopWomens: By = By.xpath(('(//a[@class="standard__cta-button button--white text--center tk-urw-din"])[1]'))
    shopMens: By = By.xpath(('(//a[@class="standard__cta-button button--white text--center tk-urw-din"])[2]'))
    tShirt: By = By.xpath(('(//a[@class="es__Anchor-rtyj27-14 kdebfv qa--product-tile__link"])[1]'))
    tShirtColor: By= By.xpath(('(//button[@class="Colour__ColourListItem-tbw1s9-2 itrGXy  "])[1]'))
    tShirtSize: By = By.xpath(('(//button[@class="Size__SizeListValue-sliccf-3 kOtQwH    "])[2]'))
    addToCart: By = By.xpath('(//button[@class="es__ButtonWrapper-sc-1637uwf-1 joJFLS button button--Outdoor button--Add-To-Cart"])')
    viewCart: By = By.xpath('//a[@href="/cart"]')
    removeItem: By = By.xpath('//button[@class="sc-eltcbb jPCQfy qa-cart-item-remove"]')
    cartInfo: By = By.xpath ('//a[@id="cartItems"]')
    orderTracking: By = By.xpath('//a[@href="/us/en/help/order-tracking"]')
    orderEmail: By = By.id("email")
    orderNumber: By = By.id("orderNumber")
    lookUpMyTracking: By = By.className("sc-lbxAil kLTYux button sc-eKBdFk lewLda button--Outdoor button--Standard")
    haveACode: By = By.className("sc-jUEnpm cCSKON qa-promo-code-input-toggle")
    promoCode: By = By.id("promoCode")
    applyCode: By = By.xpath('(//button[@class="sc-gsTCUz kLwHEZ button sc-bXDlPE jFuWAH button--Outdoor button--Apply-Promo"]')

    constructor() {
        super({url: "https://arcteryx.com/us/en/"});
    }
}