$(document).ready(function(){
	var dimensionY = 64;
	var dimensionX = 64;
  	var totalDim = 600;
  	var bord = 0;
  	var increment = 0.05;
  
  	var canvasGen = function(){
  		$('.container').empty();

		for(var i = 0; i < dimensionY; i++){
  			var row = ('row' + i);
			$('.container').append('<div class="row" id="' + row + '"> </div>');
			for(var n = 0; n < dimensionX; n++){
				$('#' + row).append('<div class="box"> </div>');
			}	
		}

		var boxDimX = Math.floor((totalDim - (2 * dimensionX * bord)) / dimensionX);
  		var boxDimY = Math.floor((totalDim - (2 * dimensionY * bord)) / dimensionY);
  			
  		$('.container').css("width", totalDim + "px");
  		$('.container').css("height", totalDim + "px");
 
 		$('.row').css("height", (boxDimY + (2 * bord)) + "px");
  		$('.row').css("width", totalDim + "px");
  
  		$('.box').css("width", boxDimX + "px");
  		$('.box').css("height", boxDimY + "px");
  		$('.box').css("border", bord + "px solid white");


    	$(".box").hover(function(){
  			var opa = parseFloat(($(this).css("opacity")));
    		opa += increment;
    		if(opa > 1) {
    		opa = 1;
    		}
  			$(this).css("opacity", opa);
  		});
  	}

  	canvasGen();

  	$('button').click(function() {
  		dimensionX = parseInt($('input[name=XDim]').val());
  		console.log(dimensionX);
    	dimensionY = parseInt($('input[name=YDim]').val());
    	totalDim = parseInt($('input[name=TotDim]').val());
    	canvasGen();
    });
});