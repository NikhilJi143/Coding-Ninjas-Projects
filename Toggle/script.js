// // var para1 = document.getElementById('para1');
// // para1.innerHTML = "Welcome";


// // $('#para1').html('Welcome');
// // $('#para1').hide();

 
// /*   //// $ sign means///

//   function $(query){
//     return document.querySelector(query);
//   }

// */    

// // $('p').css('color', 'blue');
// // $('p').css('fontSize', '30px');

// $('p').css({
//   fontSize: "30px",
//   color: "red"
// });

// $('body').css({
//   height: "100%",
//   width: "100%",
//   backgroundColor: "cyan"
// });

// $('div').css({
//   height: "12rem",
//   width: "15rem",
//   backgroundColor: "blue"
// });

// // $('div').click(function(){
// //   alert("div Clicked");
// // });

// $('div').on('click',function(){
//   var element = $(this);
//   element.width(element.width() + 10 + "px")
//   // alert("div Clicked");
// });

// $('a').on('click',function(event){
//   event.preventDefault();
//   alert("Anchor tag Clicked");
// })

// let toggle = document.querySelector(".toggle");
// function animat(){
//   toggle.classList.toggle("active");
// }


// To Active Click button 
$(document).ready(function() {
  var toggle = $(".toggle");

  toggle.click(function() {
    toggle.toggleClass("active");
  });
});


$(document).ready(function() {
  // Check if the user has a preferred theme stored
  var preferredTheme = localStorage.getItem('theme');
  
  // If a preferred theme is found, apply it
  if (preferredTheme === 'dark') {
    setLightMode();
  } else {
    setLightMode();
  }
  
  // Handle the click event of the toggle button
  $('#toggle-button').click(function() {
    if ($('body').hasClass('dark-mode')) {
      setLightMode();
    } else {
      setDarkMode();
    }
  });
  
  // Function to set the dark mode
  function setDarkMode() {
    $('body').removeClass('light-mode').addClass('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
  
  // Function to set the light mode
  function setLightMode() {
    $('body').removeClass('dark-mode').addClass('light-mode');
    localStorage.setItem('theme', 'light');
  }
});