$(document).ready(function(){
   
   //Creates a number of 'cells' where our Tiger will be placed

   function createGrid (cells) {
   	var table = $('table');
   	table.append('<tr></tr>');
   	for (var j = 1; j <= cells; j++) {
   			$('tr').append('<td id="'+ j + '"></td>');
   	}
   }; 
   createGrid(50);

   //Creates a random number

   function genRamNum () {
   	var ran = parseInt(Math.random() * 100);
   	return ran;
   };

   // using random number generator and matching that number to the id of a cell, this function then places a Tiger into the cell that matches


   function placeTiger (n) {
   		$('td img').remove();
   		for(var i = 1; i <= n; i ++) {
   			var rand = genRamNum();
   			if($("#" + rand).children('img').length === 0) {
   				$('td').filter('#' + rand).append('<img class="tiger" src=img/tiger.gif>');

   		}
   			}
   }

   //This removes a Tiger from the window on a Mouseover Event

   $('td').on('mouseover', function() {
   		var a = $(this).children('img');
   		if(a.length > 0) {
   			$(a).remove();
   			checkWin();
   		}
   })
   var test = setInterval(placeTiger, 4000, 50);

   //If all the Tigers are removed before the setInterval time, this will display a messege and clears the setInterval.

   function checkWin () {
   	var footer = $('footer');
   	if ($('img.tiger').length === 0) {
   		footer.append('<h2>You Got Lucky!</h2><h3 class="new_game">Now that you didnt get bit in the ass be grateful</h3>')
   		clearInterval(test);
   	}
   }  





   $("button").click(function() {



   $(".title").hide();


   });




















});