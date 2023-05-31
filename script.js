// $('#ripple').ripples({
// 	resolution: 512,
// 	dropRadius: 20,
// 	perturbance: 0.005,
// 	interactive: true
// });

// $('#ripple').ripples('play')

$(document).ready(function() {
	$('#ripple-container').ripples({
	  resolution: 512,
	  dropRadius: 20,
	  perturbance: 0.03
	});

	setInterval(createAutomaticRipple, 5000);

	function createAutomaticRipple() {
	  const containerWidth = $('#ripple-container').width();
	  const containerHeight = $('#ripple-container').height();
	  const x = Math.random() * containerWidth;
	  const y = Math.random() * containerHeight;

	  $('#ripple-container').ripples('drop', x, y, 20, 0.07);
	}
  });