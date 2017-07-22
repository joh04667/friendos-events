import { FriendosEventsPage } from './app.po';

describe('friendos-events App', () => {
  let page: FriendosEventsPage;

  beforeEach(() => {
    page = new FriendosEventsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to friendo!!');
  });
});
