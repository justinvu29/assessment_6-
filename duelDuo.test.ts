
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Bots show when clicking all bots button', async () => {
    const allBotsBtn = await driver.findElement(By.id('see-all'))
    allBotsBtn.click()
    await driver.sleep(2000)

    const displayCard = await driver.findElement(By.className('bot-card')).isDisplayed()
    expect(displayCard).toBe(true)
})

test('Bots show when clciking draw button', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    await driver.sleep(2000)

    const displayCard = await driver.findElement(By.className('bot-card')).isDisplayed()
    expect(displayCard).toBe(true)
})