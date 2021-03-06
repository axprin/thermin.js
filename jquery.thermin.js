(function () {
	$.fn.Thermin = function(options) {

		// namespace and extends $!
		var TH = $.fn.Thermin;

		// some variable definitions
		var x, y;
		var height = this.height();
		var width = this.width();
		var pitch, volume;
		var audioCtx, oscillator, gainNode;
		var isPlaying = false;

		// sets default options
		options = $.extend({
			maxFreq: 2500,
			minFreq: 40,
			oscType: 'sine'
		}, options);

		/*******
		METHODS: 
		*******/

		// initializes new audio object and starts to play sound
		TH.startSound = function() {
			audioCtx = new (window.AudioContext || window.webkitAudioContext)();
			oscillator = audioCtx.createOscillator();
			oscillator.type = options.oscType;
			oscillator.start();
			gainNode = audioCtx.createGain();
			isPlaying = true;
		};

		// lets user know if theremin is in action
		TH.isPlaying = function() {
			return isPlaying;
		};

		// closes audio object and stops sound
		TH.stopSound = function() {
			oscillator.stop();
			audioCtx.close();
			isPlaying = false;
		};

		// uses the mouse position (at x) and returns the pitch or the minimum frequency
		TH.getPitch = function(x) {
			var val = Math.floor((options.maxFreq/width) * x);
			if (val > options.minFreq) return val;
			else return options.minFreq;
		};

		// uses the mouse postion (at y) and returns the volume (from 0 to 1)
		TH.getVolume = function(y) {
			return 1 - ((100/height * y)/100);
		};

		// sets the pitch and volume based on mouse position
		TH.changeSound = function(pitch, volume) {
			oscillator.frequency.value = pitch;
			oscillator.connect(gainNode);
			gainNode.gain.value = volume;
			gainNode.connect(audioCtx.destination);
		};

		/*****
		EVENTS: 
		*****/

		// event to handle mouse move - both pitch change and volume change:
		this.mousemove(function(e){
			x = e.pageX - this.offsetLeft;
			y = e.pageY - this.offsetTop;
			pitch = TH.getPitch(x);
			volume = TH.getVolume(y);
			TH.changeSound(pitch, volume);
		});

		// event to handle mouse enter:
		this.mouseenter(function(e) {
			TH.startSound();
		});

		// event to handle mouse leave:
		this.mouseleave(function(e) {
			TH.stopSound();
		});
	}
})();