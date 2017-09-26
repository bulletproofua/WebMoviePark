import { WebMovieParkPage } from './app.po';

describe('web-movie-park App', () => {
  let page: WebMovieParkPage;

  beforeEach(() => {
    page = new WebMovieParkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
