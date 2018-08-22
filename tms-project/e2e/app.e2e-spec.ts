import { TmsProjectPage } from './app.po';

describe('tms-project App', () => {
  let page: TmsProjectPage;

  beforeEach(() => {
    page = new TmsProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
