# Thermin

[Demo](https://cdn.rawgit.com/axprin/thermin.js/master/index.html)

Thermin.js is an easily extendable and simple-to-incorporate JavaScript library and/or jQuery plugin for a [theremin](https://en.wikipedia.org/wiki/Theremin). It is controlled by mouse position within a selected element, where the x-axis is pitch and the y-axis is volume. 

## Usage (pure JavaScript)

Include the `thermin.js` file in the head of your document. Then, simply call `Thermin()` and pass any options you want. You must pass in an `id` that corresponds to a DOM element with the same id. There are a few options you can alter when initializing, but the defaults are pretty standard. 

```
$('#anything').Thermin({
	'id': 'thermin-demo', // id of a DOM element
	'oscType': 'sine', // or 'square', 'sawtooth' or 'triangle'
	'minFreq': 40, // min frequency
	'maxFreq': 2500 // max frequency
})
```

## Usage (jQurey plugin)

Include the `jquery.thermin.js` file after jQurey in your document. Select any jQuery object and call `.Thermin()` on it. There are a few options you can alter when initializing, but the defaults are pretty standard. 

```
$('#anything').Thermin({
	'oscType': 'sine', // or 'square', 'sawtooth' or 'triangle'
	'minFreq': 40, // min frequency
	'maxFreq': 2500 // max frequency
})
```

## Contributing

I just threw this together because it seemed fun - I know there are others similar to it. Any contributions are welcomed, just create a pull request or you can suggest features by contacting me directly.