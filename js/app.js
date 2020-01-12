$(document).ready(function () {
  /*
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("topnav").style.top = "0";
    } else if (document.getElementById("topnav").style.top !== "0" || document.getElementById("topnav").style.top !== "0px"){
      document.getElementById("topnav").style.top = "-40px";
    }
    prevScrollpos = currentScrollPos;
  }
  */

  $(".bottomnav a[href]").each(function () {
    if (this.href == document.URL) {
      $(this).addClass("current");
    }
  });

  /*document.querySelectorAll('a[href="'+document.URL+'"]').forEach(function(elem){elem.className += ' current'});

var getURL = window.location;
var baseURL = getURL .protocol + "//" + getURL.host + "/" + getURL.pathname.split('/')[1];

$(".bottomnav a").each(function(){
  window.console&&console.log(this);
  if(baseURL + $(this).attr('href') == ("/"+getURL.pathname.split('/')[1]) || ($(this).attr('href') == '/' && document.URL == baseURL)){
      $(this).css("background-color", "red");
      window.console&&console.log(this);
      window.console&&console.log(baseURL + $(this).attr('href'));
      
      
  }
});
*/


});