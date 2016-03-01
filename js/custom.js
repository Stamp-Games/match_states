!function(){
	$('.droppable').droppable({
		drop:checkAnswer,
		accept:$('img.correct')
	})

	function checkAnswer(e,ui){
		console.log(ui)
	}
	$('.draggable').draggable({ revert: "invalid" })
}()