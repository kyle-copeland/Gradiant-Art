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
		document.getElementById("gradient").height = screen.height;
		document.getElementById("gradient").width = screen.width;
		
		var canvas = document.getElementById(Gradient.id);
		var context = canvas.getContext("2d");
		var fixture = Gradient.genAngle(canvas,context);
		//TODO: Decide how many variations to do in terms of color
		Gradient.genColors(fixture,2);
		context.fillStyle = fixture;
		context.fillRect(0,0,canvas.width,canvas.height);
		
		Gradient.removeCanvas(canvas);
	},
	/**
	 * Generate colors used in gradient
	 */
	genColors: function(fixture,num) {
		num = num - 1;
		for(var i = 0; i <= num; i++) {
			fixture.addColorStop(i/num,Colors.getColor());
		}
	},
	/**
	 * Generate Angle of linear gradient
	 */
	genAngle: function(canvas,context) {
		var type = Math.floor(Math.random()*4);
		switch(type) {
			case 0: //top left to bottom right
				return context.createLinearGradient(0,0,canvas.width,canvas.height);
			case 1: // horizontal
				return context.createLinearGradient(0,0,canvas.width,0);
			case 2: //bottom left to top right
				return context.createLinearGradient(0,canvas.height,canvas.width,0);
			case 3: //vertical
				return context.createLinearGradient(0,0,0,canvas.height);
			default:
				alert("Error with Gradient Angle");
		}
	},
	/**
	 * Remove Canvas and replace with image.
	 * Gives users the option to download image
	 */
	removeCanvas: function(canvas) {
		var imgURL = canvas.toDataURL();
		document.getElementById("gradient-img").src = imgURL;
		document.getElementsByTagName("body")[0].removeChild(canvas);
	}
};