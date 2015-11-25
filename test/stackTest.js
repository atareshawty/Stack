var Stack = require('../stack.js');
var assert = require('assert');
var test = require('testit');

test('constructor', function() {
	test('creates empty stack with length 0 and null top', function() {
		var stack = new Stack();
		assert(stack.length() === 0);
		assert(stack.top() === null);
	});	
});

test('push', function() {
	test('to empty stack creates length == 1 with top equal to data', function() {
		var stack = new Stack();
		stack.push(15);
		assert(stack.length() === 1);
		assert(stack.top() === 15);
	});
	
	test('to stack with previous data makes new top', function() {
		var stack = new Stack();
		stack.push(10);
		stack.push(100);
		assert(stack.top() === 100);
	});
	
	test('push 1000 elements and maintain top and length', function() {
		var stack = new Stack();
		for (var i = 0; i < 1000; i++) {
			stack.push(i);
			assert(stack.length() === (i + 1));
			assert(stack.top() === i);
		}
	});
});

test('pop', function() {
	test('from an empty stack returns null', function() {
		var stack = new Stack();
		assert(stack.pop() === null);
	});
	
	test('from stack of size 1 returns only element and new top is null', function() {
		var stack = new Stack();
		stack.push(15);
		assert(stack.pop() === 15);
		assert(stack.top() === null);
		assert(stack.length() === 0);
	});
	
	test('from stack of size 1000 and maintains length and top throughout', function() {
		var stack = new Stack();
		for (var i = 0; i < 1000; i++) {
			stack.push(i);
		}
		
		for (var k = 1000; i > 2; k--) {
			assert(stack.pop() === k - 1);
			assert(stack.top() === k - 2);
			assert(stack.length() === k - 1);		
		}
	});
});

test('length', function() {
	test('new stack has length = 0', function() {
		var stack = new Stack();
		assert(stack.length() === 0);
	});
	
	test('pushing to empty stack makes length = 1', function() {
		var stack = new Stack();
		stack.push(1);
		assert(stack.length() === 1);
	});
	
	test('pushing to empty stack 1000 times maintains length along the way', function() {
		var stack = new Stack();
		for (var i = 0; i < 1000; i++) {
			stack.push(i);
			assert(stack.length() === i + 1);
		}
	});
});
