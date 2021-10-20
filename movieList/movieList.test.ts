import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can create a movie', async () => {
    await driver.sleep(1000)

    await driver.findElement(By.name('q')).sendKeys(`The Lord of the Rings\n`)

    await driver.sleep(1000)

    await driver.findElement(By.name('q')).sendKeys(`The Hobbit\n`)

    await driver.sleep(1000)

    await driver.findElement(By.name('q')).sendKeys(`The Hobbit\n`)

    await driver.sleep(2000)

    await driver.findElement(By.xpath('(//li)[1]')).click()

    await driver.sleep(2000)
})