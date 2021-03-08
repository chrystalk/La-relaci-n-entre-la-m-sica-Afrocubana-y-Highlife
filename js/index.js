/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

/* Link Pages in Menu
function linkPage(){
	var home= document.getElementById("Home")
	home.href= "./html/index.html"
	var music= document.getElementById("Music")
	music.href= "./html/my-music.html"
	var moodboards= document.getElementById("Moodboards")
	moodboards.href= "./html/moodboards.html"
	var contact= document.getElementById("Contact")
	contact.href= "./html/contact.html"
}
*/
