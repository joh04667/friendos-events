import { browser, by, element } from 'protractor';

export class FriendosEventsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('friendo-root h1')).getText();
  }
}
