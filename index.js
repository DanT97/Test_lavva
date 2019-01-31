var btn = document.querySelector('#plus_btn');
btn.addEventListener('click',method1);
btn.addEventListener('click',method2);
btn.addEventListener('click',disableScroll);
function method2(){
  div = document.getElementById('second_cont_alternative');
  div.style.display = "block";
  
}
function method1(){
    div = document.getElementById('second_cont');
    div.style.display = "none";
}
function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}


var btn = document.querySelector('#x_btn');
btn.addEventListener('click',method3);
btn.addEventListener('click',method4);
btn.addEventListener('click',enableScroll);
function method3(){
  div = document.getElementById('second_cont_alternative');
  div.style.display = "none";
}
function method4(){
    div = document.getElementById('second_cont');
    div.style.display = "flex";
}
function enableScroll() {
  if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null; 
  window.onwheel = null; 
  window.ontouchmove = null;  
  document.onkeydown = null;  
}
//****************************SliderJS
$(document).ready(function(){

  $("#slideshow > div:gt(0)").hide();

  var buttons = "";
  
  var slidesl = $('.slideitem').length
  var d = "<li class=\"dot active-dot\">&bull;</li>";
  for (var i = 1; i < slidesl; i++) {
    d = d+"<li class=\"dot\">&bull;</li>";
  }	
  var dots = "<ul class=\"slider-dots\">" + d + "</ul\>";
  
  $("#slideshow").append(dots).append(buttons);
  var interval = setInterval(slide, 3000);
  
  function intslide(func) {
    if (func == 'start') { 
     interval = setInterval(slide, 3000);
    } else {
      clearInterval(interval);		
      }
  }
  
  function slide() {
  }
    
  function sact(a, ix, it) {
          var currentSlide = $('.current');
          var nextSlide = currentSlide.next('.slideitem');
          var prevSlide = currentSlide.prev('.slideitem');
          var reqSlide = $('.slideitem').eq(ix);
  
          var currentDot = $('.active-dot');
          var nextDot = currentDot.next();
          var prevDot = currentDot.prev();
          var reqDot = $('.dot').eq(ix);
      
          if (nextSlide.length == 0) {
            nextDot = $('.dot').first();
              nextSlide = $('.slideitem').first();
              }
  
          if (prevSlide.length == 0) {
            prevDot = $('.dot').last();
              prevSlide = $('.slideitem').last();
              }
        
      if (a == 'next') {
        var Slide = nextSlide;
        var Dot = nextDot;
        }
        else if (a == 'prev') {
          var Slide = prevSlide;
          var Dot = prevDot;
          }
          else {
            var Slide = reqSlide;
            var Dot = reqDot;
            }
  
          currentSlide.fadeOut(it).removeClass('current');
          Slide.fadeIn(it).addClass('current');
      
        currentDot.removeClass('active-dot');
        Dot.addClass('active-dot');
  }	
  
  $('.next').on('click', function(){
      intslide('stop');						
      sact('next', 0, 400);
      intslide('start');						
    });//next
  
  $('.prev').on('click', function(){
      intslide('stop');						
      sact('prev', 0, 400);
      intslide('start');						
    });//prev
  
  $('.dot').on('click', function(){
      intslide('stop');
      var index  = $(this).index();
      sact('dot', index, 400);
      intslide('start');						
    });//prev
  //slideshow
  });
  // Cache selectors
var lastId,
topMenu = $("#top-menu"),
topMenuHeight = topMenu.outerHeight()+15,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
var href = $(this).attr("href"),
  offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
$('html, body').stop().animate({ 
  scrollTop: offsetTop
}, 300);
e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
// Get container scroll position
var fromTop = $(this).scrollTop()+topMenuHeight;

// Get id of current scroll item
var cur = scrollItems.map(function(){
 if ($(this).offset().top < fromTop)
   return this;
});
// Get the id of the current element
cur = cur[cur.length-1];
var id = cur && cur.length ? cur[0].id : "";

if (lastId !== id) {
   lastId = id;
   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href='#"+id+"']").parent().addClass("active");
}                   
 
  /*
  JQUERY SLIDER BY JohnRostislavovich - https://codepen.io/JohnRostislavovich
  ALL YOU HAVE TO DO:
  -copy the whole code html, css & js
  -include jquery lib
  -change the images
  */
});