/// <reference types="sled-test-runner" />
import { Page } from 'puppeteer';

describe('happy flow', () => {
  let _page: Page;

  const SLED_DEFAULT_MSID = 'eeaf3519-1406-45f0-a8ea-a59a4ecbc1a6';
  const APP_ENTRY_POINT = 'home'; // FIXME - set your own bizmgr entry point URI

  beforeEach(async () => {
    const { page } = await sled.newPage({
      authType: 'free-user'
    });
    _page = page;
    await _page.goto('https://www.wix.com/dashboard/' + SLED_DEFAULT_MSID + '/' + APP_ENTRY_POINT);
  });

  it('should render dashboard home for autheticated user', async () => {
    const selector = '[data-hook="home"]'; // FIXME - set your own element's selector
    await _page.waitForSelector(selector);
    const text = await _page.$eval(selector, (e: HTMLElement) => e.innerText);
    expect(text).toBe('Dashboard'); // FIXME - set your own element's text
  });
  
});
