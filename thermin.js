(function () {
	Thermin = function(options) {
		if (!options.id) {
			throw "Thermin needs to be instantiated with an id!!";
		}
		
		// sets default options
		options = {
			id: options.id,
			maxFreq: 2500,
			minFreq: 40,
			oscType: 'sine'
		};

		// some variable definitions
		var x, y;
		var domEl = document.getElementById(options.id);
		var height = domEl.clientHeight;
		var width = domEl.clientWidth;
		var pitch, volume;
		var audioCtx, oscillator, gainNode;
		var isPlaying = false;

		/*******
		METHODS: 
		*******/

		// initializes new audio object and starts to play sound
		startSound = function() {
			audioCtx = new (window.AudioContext || window.webkitAudioContext)();
			oscillator = audioCtx.createOscillator();
			oscillator.type = options.oscType;
			oscillator.start();
			gainNode = audioCtx.createGain();
			isPlaying = true;
		};

		// lets user know if theremin is in action
		isPlaying = function() {
			return isPlaying;
		};

		// closes audio object and stops sound
		stopSound = function() {
			oscillator.stop();
			audioCtx.close();
			isPlaying = false;
		};

		// uses the mouse position (at x) and returns the pitch or the minimum frequency
		getPitch = function(x) {
			var val = Math.floor((options.maxFreq/width) * x);
			if (val > options.minFreq) return val;
			else return options.minFreq;
		};

		// uses the mouse postion (at y) and returns the volume (from 0 to 1)
		getVolume = function(y) {
			return 1 - ((100/height * y)/100);
		};

		// sets the pitch and volume based on mouse position
		changeSound = function(pitch, volume) {
			oscillator.frequency.value = pitch;
			oscillator.connect(gainNode);
			gainNode.gain.value = volume;
			gainNode.connect(audioCtx.destination);
		};

		/*****
		EVENTS: 
		*****/

		// event to handle mouse move - both pitch change and volume change:
		domEl.onmousemove = function(e){
			x = e.pageX - this.offsetLeft;
			y = e.pageY - this.offsetTop;
			pitch = getPitch(x);
			volume = getVolume(y);
			changeSound(pitch, volume);
		};

		// event to handle mouse enter:
		domEl.onmouseover = function() { 
			startSound();
		};

		// event to handle mouse leave:
		domEl.onmouseout = function() { 
			stopSound();
		};
	}
})();