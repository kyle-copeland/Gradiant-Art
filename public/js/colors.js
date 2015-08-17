var HEX = 16;
var Colors = {
	getColor: function() {
		var hue = Math.floor(Math.random()*256);
		//TODO: mess around with saturation and value
		return Colors.hsvToRgb(hue,.3,1);
	},
	/**
	 * adapted from http://en.wikipedia.org/wiki/HSL_color_space
	 * TODO: Understand the science behind this
	 */
	hsvToRgb: function(h, s, v){
		//chroma
		var c = v*s;
		var r, g, b;
		var H = h/60;

		var x = c*(1- Math.abs(H%2 -1))
		
		if(0 <= H && H <1) {
			r = c, g = x, b = 0;
		} else if( 1 <= H && H < 2) {
			r = x, g = c, b = 0;
		} else if( 2 <= H && H < 3) {
			r = 0, g = c, b = x;
		} else if( 3 <= H && H < 4) {
			r = 0, g = x, b = c;
		} else if( 4 <= H && H < 5) {
			r = x, g = 0, b = c;
		} else if( 5 <= H && H < 6) {
			r = c, g = 0, b = x;
		}
		var m = v - c;
		r = r + m, g = g + m, b = b + m;
		r = Math.round(r*255), g = Math.round(g*255), b = Math.round(b*255);
		return "#"+r.toString(HEX)+g.toString(HEX)+b.toString(HEX);
	}
}