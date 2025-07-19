// HTML & CSS Progress
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlSpeed = 30;

let progressHtml = setInterval(() => {
  htmlStartValue++;
  htmlValue.textContent = ${htmlStartValue}%;
  htmlProgress.style.background = conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed ${htmlStartValue * 3.6}deg);
  if (htmlStartValue === htmlEndValue) clearInterval(progressHtml);
}, htmlSpeed);

// JavaScript Progress
let jsProgress = document.querySelector(".javascript"),
  jsValue = document.querySelector(".javascript-progress");

let jsStartValue = 0,
  jsEndValue = 75,
  jsSpeed = 30;

let progressJS = setInterval(() => {
  jsStartValue++;
  jsValue.textContent = ${jsStartValue}%;
  jsProgress.style.background = conic-gradient(#6f34fe ${jsStartValue * 3.6}deg, #ededed ${jsStartValue * 3.6}deg);
  if (jsStartValue === jsEndValue) clearInterval(progressJS);
}, jsSpeed);

// PHP Progress
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpSpeed = 30;

let progressPHP = setInterval(() => {
  phpStartValue++;
  phpValue.textContent = ${phpStartValue}%;
  phpProgress.style.background = conic-gradient(#26c997 ${phpStartValue * 3.6}deg, #ededed ${phpStartValue * 3.6}deg);
  if (phpStartValue === phpEndValue) clearInterval(progressPHP);
}, phpSpeed);

// ReactJS Progress
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  reactSpeed = 30;

let progressReact = setInterval(() => {
  reactStartValue++;
  reactValue.textContent = ${reactStartValue}%;
  reactProgress.style.background = conic-gradient(#3f396d ${reactStartValue * 3.6}deg, #ededed ${reactStartValue * 3.6}deg);
  if (reactStartValue === reactEndValue) clearInterval(progressReact);
}, reactSpeed);
// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
