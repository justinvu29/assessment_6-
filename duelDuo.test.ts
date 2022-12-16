
import { Builder, Capabilities, By } from "selenium-webdriver"
const {putBotBack} = require('./public')


require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:4000/')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('removes Duo', async () => {
    await putBotBack()
})

test('draw button displays choices'), async () => {
    const butt = 
}