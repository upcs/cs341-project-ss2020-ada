var $ = require('../node_modules/jquery');
window.$ = $;
var check = require('../public/javascripts/signup');





test('valid email', () => {
  expect(check('harrah20@up.edu')).toBeTruthy();
});

test('invalid email', () => {
  expect(check('harrah20@up')).toBeFalsy();
});

test('valid email', () => {
  expect(check('ab@gmail.com')).toBeTruthy();
});

test('invalid email', () => {
  expect(check('1234@gmail')).toBeFalsy();
});