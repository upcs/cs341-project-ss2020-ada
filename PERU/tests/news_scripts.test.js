global.window = { location: { pathname: null } };
const change_page = require('../public/javascripts/news_scripts.js');
 test('changing pages correctly', () => {
 expect(global.window.location.pathname).toEqual('/');
 });