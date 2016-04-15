//jQuery plugin for background image
$.backstretch( 'img/bkgrd.jpg' );

//jQuery plugin for skills bar
$( '.skillbar' ).skillBars( {
} );

//Event listener that listens for a mouseover on "reading" which will display new <p> text
var reading = document.getElementById( 'reader' );
reading.addEventListener( 'mouseover', function() {
    var myReading = document.createElement( 'p' );
		myReading.innerHTML = '<p>My favorite book series is Harry Potter!</p>';
		document.getElementsByClassName( 'reading' )[ 0 ].appendChild( myReading );
} );

//Event listener that listens for a mouseover on "traveling" which will display new <p> text
var traveling = document.getElementById( 'traveler' );
traveling.addEventListener( 'mouseover', function() {
    var myTraveling = document.createElement( 'p' );
		myTraveling.innerHTML = '<p>My favorite vacation was to Disney World in December 2012 where I got engaged!</p>';
		document.getElementsByClassName( 'traveling' )[ 0 ].appendChild( myTraveling );
} );

//Event listener that listens for a mouseover on "frozen yogurt" which will display new <p> text
var froyo = document.getElementById( 'frozen' );
froyo.addEventListener( 'mouseover', function() {
    var myFroYo = document.createElement( 'p' );
		myFroYo.innerHTML = '<p>I love tart flavored frozen yogurt with boba toppings!</p>';
		document.getElementsByClassName( 'froyo' )[ 0 ].appendChild( myFroYo );
} );

//Event listener that listens for a mouseover on "movies" which will display new <p> text
var movie = document.getElementById( 'movies' );
movie.addEventListener( 'mouseover', function() {
    var myMovie = document.createElement( 'p' );
    myMovie.innerHTML = '<p>My top three favorite movies are: Up, Twister, and any Harry Potter movie.</p>';
		document.getElementsByClassName( 'movies' )[ 0 ].appendChild( myMovie );
} );

//Event listener that listens for a mouseover on "tv shows" which will display new <p> text
var tvshow = document.getElementById( 'tv' );
tvshow.addEventListener( 'mouseover', function() {
    var myTv = document.createElement( 'p' );
    myTv.innerHTML = '<p>My top three favorite TV shows are: Sons of Anarchy, 24, and Prison Break.</p>';
    document.getElementsByClassName( 'shows' )[ 0 ].appendChild( myTv );
} );

//Event listener that listens for a mouseover on "country music" which will display new <p> text
var music = document.getElementById( 'music' );
music.addEventListener( 'mouseover', function() {
    var myMusic = document.createElement( 'p' );
    myMusic.innerHTML = '<p>I have been to more than 10 country concerts.</p>';
    document.getElementsByClassName( 'country' )[ 0 ].appendChild( myMusic );
} );

//Event listener that listens for a mouseover on "running" which will display new <p> text
var run = document.getElementById( 'run' );
run.addEventListener( 'mouseover', function() {
    var myRun = document.createElement( 'p' );
		myRun.innerHTML = '<p>Running helps to clear my head and is an outlet for me.</p>';
		document.getElementsByClassName( 'running' )[ 0 ].appendChild( myRun );
} );

//Event listener that listens for a mouseover on "puzzles" which will display new <p> text
var puzzles = document.getElementById( 'puzzle' );
puzzles.addEventListener( 'mouseover', function() {
    var myPuzzle = document.createElement( 'p' );
		myPuzzle.innerHTML = '<p>Puzzles are a way I spend time with my family.</p>';
		document.getElementsByClassName( 'puzzles' )[ 0 ].appendChild( myPuzzle );
} );
