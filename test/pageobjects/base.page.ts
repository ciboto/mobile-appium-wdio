export default class BasePage {
  async $(selector: string) {
    return await browser.$(selector);
  }
}