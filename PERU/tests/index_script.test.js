'use strict';
var fs = require('fs');
var $ = require('../node_modules/jquery');
window.$ = $;
var methods = require('../public/javascripts/index_script.js');

 test('opening navigation panel', () => {
	var html = fs.readFileSync('public/index.html', 'utf8');
	expect(html).toEqual(expect.anything());
	 
	document.body.innerHTML = html;
	methods.openNav();
	expect(
    document.getElementById("mySidepanel").style.width)
	.toEqual('250px');
 });
 
 test('closing navigation panel', () => {
	var html = fs.readFileSync('public/index.html', 'utf8');
	expect(html).toEqual(expect.anything());
	 
	document.body.innerHTML = html;
	methods.closeNav();
	expect(
    document.getElementById("mySidepanel").style.width)
	.toEqual('0px');
 });
 
 test('updates user info', () => {
	 methods.update_user_location_data();
	 expect($('.userloc2').html()).toEqual('No location selected.');
 });
 
  test('function b is called', () => {
  methods.b();
  expect(methods.b()).toBeTruthy();
});

  test('function b is called', () => {
  methods.b();
  expect(methods.b()).toBeTruthy();
});
 
 test('function d is called', () => {
  methods.d();
  expect(methods.d()).toBeTruthy();
});