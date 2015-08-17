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
		var colors = Gradient.genColors(2);
		gradient.addColorStop(0,colors[0]);
		gradient.addColorStop(1,colors[1]);
		ctx.fillStyle = gradient;
		ctx.fillRect(0,0,canvas.width,canvas.height);
	},
	/**
	 * Return array of RGB colors
	 * param num -> number of colors to return
	 */
	genColors: function(num) {
		var colors = [];
		for(var i = 0; i < num; i++) {
			colors.push(Colors.getColor());
		}
		return colors;
	},
	genAngle: function() {
	
	}
};