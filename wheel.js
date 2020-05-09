var spinning = false;


function newWheel(segm){
theWheel = new Winwheel({
							 'numSegments'  : segm.length,         // Number of segments
        'outerRadius'    : 400,
							 'textFontSize' : 28,        // Font size.
							 'segments'     : segm       // Definition of all the segments.
							 ,
							 'animation' :               // Definition of the animation
							 {
									 'type'     : 'spinToStop',
									 'duration' : 15,
									 'spins'    : 4,
									 'callbackFinished' : 'alertPrize()',
									 'callbackAfter' : 'drawTriangle()'
							 }
					 });
}

newWheel([
	 {'fillStyle' : '#eae56f', 'text' : 'Prize 1'},
	 {'fillStyle' : '#89f26e', 'text' : 'Prize 2'},
	 {'fillStyle' : '#7de6ef', 'text' : 'Prize 3'},
	 {'fillStyle' : '#e7706f', 'text' : 'Prize 4'},
	 {'fillStyle' : '#eae56f', 'text' : 'Prize 5'},
	 {'fillStyle' : '#89f26e', 'text' : 'Prize 6'},
	 {'fillStyle' : '#7de6ef', 'text' : 'Prize 7'},
	 {'fillStyle' : '#e7706f', 'text' : 'Prize 8'}
])
function loadWheel(){
	console.log()

	var file = $("#fileWheel")[0].files[0];
	var reader = new FileReader();
	reader.readAsText(file, 'UTF-8');
	reader.onload = function(evt) {
		jsonWheel =JSON.parse(evt.target.result)
		console.log(jsonWheel);
		newWheel(jsonWheel);
	}
}
	function alertPrize()
	{
		// Call getIndicatedSegment() function to return pointer to the segment pointed to on wheel.
		var winningSegment = theWheel.getIndicatedSegment();

		// Basic alert of the segment text which is the prize name.
		spinning=false;
		alert(" winningSegment.text + " !");
		theWheel.rotationAngle = 0;
		theWheel.draw();
		drawTriangle();
	}


					 // Function to draw pointer using code (like in a previous tutorial).
			     drawTriangle();

			     function drawTriangle()
			     {
			         // Get the canvas context the wheel uses.
			         var ctx = theWheel.ctx;

			         ctx.strokeStyle = 'navy';     // Set line colour.
			         ctx.fillStyle   = '#FF0000';     // Set fill colour.
			         ctx.lineWidth   = 2;
			         ctx.beginPath();              // Begin path.
			         ctx.moveTo(405, 0);           // Move to initial position.
			         ctx.lineTo(435, 0);           // Draw lines to make the shape.
			         ctx.lineTo(420, 30);
			         ctx.lineTo(405, 0);
			         ctx.stroke();                 // Complete the path by stroking (draw lines).
			         ctx.fill();                   // Then fill.
			     }
function spin(){
	if(spinning)
		return;
	spinning=true;
	theWheel.startAnimation();
}

function exemple(){

	exportObj=[
		 {"fillStyle" : "yellow", "text" : "Prize 1"},
		 {"fillStyle" : "#89f26e", "text" : "Prize 2"},
		 {"fillStyle" : "#7de6ef", "text" : "Prize 3"},
		 {"fillStyle" : "red", "text" : "Prize 4"},
		 {"fillStyle" : "pink", "text" : "Prize 5"},
		 {"fillStyle" : "#89f26e", "text" : "Prize 6"},
		 {"fillStyle" : "#7de6ef", "text" : "Prize 7"},
		 {"fillStyle" : "blue", "text" : "Prize 8"}
	]

	var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
	var downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute("href",     dataStr);
	downloadAnchorNode.setAttribute("download", "RoueExemple.json");
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}


function load1(){
	alert("not available for the moment")
	/*
	var json=[
		 {"fillStyle" : "aqua", "text" : "1 jour"},
		 {"fillStyle" : "red", "text" : "1d6 jours"},
		 {"fillStyle" : "aqua", "text" : "6d6 heures"},
		 {"fillStyle" : "red", "text" : "3 jours"},
		 {"fillStyle" : "aqua", "text" : "1d20 X4 heures"},
		 {"fillStyle" : "red", "text" : "2 relances"},
		 {"fillStyle" : "aqua", "text" : "2 jours"},
		 {"fillStyle" : "lime", "text" : "Rien :P"},
		 {"fillStyle" : "red", "text" : "1d6 X12 heures"}
	];
	newWheel(json);
	*/
}
