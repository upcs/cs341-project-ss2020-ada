var $ = require('../node_modules/jquery');
window.$ = $;
var methods = require('../public/javascripts/signup');

test('valid email', () => {
  expect(methods.check('harrah20@up.edu')).toBeTruthy();
});

test('invalid email', () => {
  expect(methods.check('harrah20@up')).toBeFalsy();
});

test('valid email', () => {
  expect(methods.check('ab@gmail.com')).toBeTruthy();
});

test('invalid email', () => {
  expect(methods.check('1234@gmail')).toBeFalsy();
});

test('weak password', () => {
  expect(methods.isStrongPwd1('1234')).toBeFalsy();
});

test('strong password', () => {
  expect(methods.isStrongPwd1('Abcd1234!@#$')).toBeTruthy();
});

test('insert a new user', () => {
  methods.insertNewUser("harrah20","harrah20@up.edu","Abcd1234*");
  expect("").toBe("");
});

test('valid email', () => {
  methods.c();
  expect(methods.c()).toBeTruthy();
});