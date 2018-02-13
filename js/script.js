// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
$( document ).ready(function() {
var mySong = {
	title:"rockstar",
	artist:"post malone",
	songlink:"https://www.youtube.com/results?search_query=rockstar+post+malone",
	songlength:"3 minutes"
};


function addSongToList(mySong){                                      
	$("#songs").append("<p>title: " + mySong.title + "</p>");
	$('#songs').append("<p>artist: " + mySong.artist + "</p>");
	$('#songs').append("<p>songlink: " + mySong.songlink + "</p>");
	$('#songs').append("<p>songlength: " + mySong.songlength + "</p>");
} 

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

];



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  
	 $("button").click(function(){
		var songNameInput= $("#songName").val();
		var song={
			title:songNameInput
		};
		addSongToList(song);
	});



});

function displayList(){


  
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
console.log( "ready!" );
})