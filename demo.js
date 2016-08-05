$( document ).ready(function() {

	// THERMIN-iZE!
	// $('.thermin-demo').Thermin();
	Thermin({
		'id':'thermin'
	});

	// handle change of form inputs
	$('form#select-wrapper').change(function(e){
		$('.thermin-demo').remove();
		
		$("#select-wrapper").parent().append("<div class='thermin-demo' id='thermin'></div>")

		var oscType = $("#osc-type option:selected").val();
		var minFreq = $("#minFreqInputId").val();
		var maxFreq = $("#maxFreqInputId").val();

		// $('.thermin-demo').Thermin({
		// 	"oscType": oscType,
		// 	"minFreq": minFreq,
		// 	"maxFreq": maxFreq
		// });
		Thermin({
			"id": "thermin",
			"oscType": oscType,
			"minFreq": minFreq,
			"maxFreq": maxFreq
		});
	})
});