const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Launch browser in non-headless mode for debugging
  const page = await browser.newPage();
  const timeout = 10000; // Increase timeout if necessary
  page.setDefaultTimeout(timeout);

  try {
    await page.goto('https://voco.ee');

    // Wait for the button with text 'ESITA AVALDUS' to appear on the page and become clickable
    const buttonSelector = 'button:has-text("ESITA AVALDUS")'; // CSS selector to match button with specific text
    await page.waitForSelector(buttonSelector, { visible: true });

    // Click on the button with text 'ESITA AVALDUS'
    const button = await page.$(buttonSelector);
    await button.click();

    console.log('Clicked on the button "ESITA AVALDUS" on voco.ee');

  } catch (err) {
    console.error('Error: ', err);
  } finally {
    await browser.close();
  }
})();
