import { KamiWebPage } from './app.po';

describe('kami-web App', function() {
  let page: KamiWebPage;

  beforeEach(() => {
    page = new KamiWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
