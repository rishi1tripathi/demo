import { TicketTypePage } from './app.po';

describe('ticket-type App', () => {
  let page: TicketTypePage;

  beforeEach(() => {
    page = new TicketTypePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
