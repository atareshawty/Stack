# JavaScript Stack
This is a stack implementation build on a singly null terminated linked list

## Use it

```js
var Stack = require('stack.js');
```

Create new Stack
```js
var stack = new Stack();
```

Push some data
```js
stack.push('Hi there!');
stack.push('');
stack.push('What\'s up?');
```


How much did you push?
```js
console.log(stack.length()); // 3
``` 

What's the top?
```js
console.log(stack.top()); // 'What's up?'
```

Popping
```js
while(stack.length() > 0) {
	console.log(stack.pop()); // 'What's up?, '', 'Hi there!'
}
```

## Credits
Author: Alex Tareshawty