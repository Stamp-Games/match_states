!function(){
	var states =['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new_hampshire', 'new_jersey', 'new_mexico', 'new_york', 'north_carolina', 'north_dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode_island', 'south_carolina', 'south_dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west_virginia', 'wisconsin', 'wyoming'];
	var remainingStates = states;
	var score = 0;
	var count = 0;
	function randomNumber() {
   		return Math.floor(Math.random() * states.length);
	}
	

	function switchState(e,ui){
		
		$('#correct').show();
		score++;
		$('#score').text(score);
		if (!remainingStates){
			$('body').addClass('win');
			setTimeout(function(){$('#correct').fadeOut('fast');},1000);
			return
		}
		var rand = remainingStates ? randomNumber() : 0;
		var currentState = remainingState.splice(randomNumber(),1);
		var otherStates =[];
		var nums = [];
		while (nums.length < 3){
			var num = randomNumber();
			if(nums.indexOf(num) < 0){
				nums.push(num)
			}
		}
		for(var i in nums){
			otherStates.push(states[nums[i]])
		}
		otherStates.push(currentState);
		
		 var scrambledStates = [];
		 while(otherStates.length){
		 	scrambledStates.push(otherStates.splice(Math.floor(Math.random() * otherStates.length),1)[0])
		 }	

		$('#stateImageHolder img').attr('src','images/'+currentState+'.jpg');
		$('#stampImageHolder').empty();
		for(var i in scrambledStates){
			$('#stampImageHolder').append('<img src="images/'+scrambledStates[i]+'-stamp.jpg" class="draggable stamp" >');
		}
		$('#stampImageHolder img[src*='+currentState+']').addClass('correct');
		$('.draggable').draggable({ revert: "invalid" });
		$( ".droppable" ).droppable( "destroy" );
		$('.droppable').droppable({
			drop:switchState,
			accept:$('img.correct')
		})

		setTimeout(function(){$('#correct').fadeOut('fast');},1000);

	}
	$('.droppable').droppable({
		drop:switchState,
		accept:$('img.correct')
	})
	$('.draggable').draggable({ revert: "invalid" });
	$('#startOver').click(function(){
		location.reload();
	})
}()
