$( document ).ready(function() {

	// THERMIN-iZE!
	$('.thermin-demo').Thermin();

	// handle change of wavetype
	$('#osc-type').change(function(e){
		$('.thermin-demo').remove();
		$("#osc-type").parent().prepend("<div class='thermin-demo'></div>")
		var oscType = $("#osc-type option:selected").val();
		$('.thermin-demo').Thermin({
			"oscType": oscType
		});
	})
});