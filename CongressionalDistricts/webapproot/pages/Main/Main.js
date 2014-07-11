dojo.declare("Main", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	cbExportCSVClick: function(inSender) {
		jojo = this.almanaccongressDojoGrid.toCSV(true);
        alert(jojo);
	},
	_end: 0
});