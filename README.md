# Thermin.js

Thermin.js is an easily extendable and simple-to-incorporate jQuery plugin for a [theremin](https://en.wikipedia.org/wiki/Theremin). It is controlled by mouse position, where the x-axis is pitch and the y-axis is volume. 

## Usage

Therminjs is really easy to implement, simply include the `thermin.js` flie after jQurey in your document. Select any jQuery object and call `.Thermin()` on it. There are a few options you can alter when initializing, but the defaults are pretty standard. 

```$('#anything').Thermin({
	'oscType': 'sine', // or 'square', 'sawtooth' or 'triangle'
	'minFreq': 40 // min frequency
	'maxFreq': 2500 // max frequency
})```

## Contributing

I just threw this together because it seemed fun - I know there are others similar to it. Any contributions are welcomed, just create a pull request or you can suggest features by contacting me directly.