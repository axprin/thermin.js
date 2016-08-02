$( document ).ready(function() {

	// THERMIN-iZE!
	$('.thermin-demo').Thermin();

	// handle change of wavetype
	$('#osc-type').change(function(e){
		$('.thermin-demo').remove();
		$("#select-wrapper").parent().append("<div class='thermin-demo'></div>")
		var oscType = $("#osc-type option:selected").val();
		$('.thermin-demo').Thermin({
			"oscType": oscType
		});
	})
});