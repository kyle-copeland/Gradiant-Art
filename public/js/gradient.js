var Gradient = {
	/**
	 * ID of Canvas to generate gradient
	 */
	id:'gradient',
	init: function() {
		Gradient.generate();
	},
	/**
	 * Generate gradient
	 */
	generate: function() {
		var canvas = document.getElementById(Gradient.id);
		var ctx = canvas.getContext("2d");
		var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
		gradient.addColorStop(0,"#00FF00");
		gradient.addColorStop(1,"#FFFFFF");
		ctx.fillStyle = gradient;
		ctx.fillRect(0,0,canvas.width,canvas.height);
	},
	genColor: function() {
	
	},
	genAngle
	
	

};