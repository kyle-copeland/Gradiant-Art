var Download = {
	init: function() {
		document.getElementById("download").addEventListener("click", function() {
			this.href = document.getElementById("gradient-img").src;
			this.download = "gradient-img";
		});
	}
}