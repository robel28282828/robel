
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('#mobile-nav');



menu_btn.addEventListener('click', function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  mobile_menu.style.display = mobile_menu.classList.contains('is-active') ? 'block' : 'none';
});


const toggleButton = document.getElementById("toggleButton");
const toggleButt = document.getElementById("toggleButt");
const greyElements1 = document.querySelectorAll("#box-1-1 .grey");
const greyElements2 = document.querySelectorAll("#box-1-2 .grey");

toggleButton.addEventListener("click", function() {
  greyElements1.forEach(function(element) {
    element.classList.toggle("grey");
  });
});

toggleButt.addEventListener("click", function() {
  greyElements2.forEach(function(element) {
    element.classList.toggle("grey");
  });
});

function handleMediaQuery(mediaQuery, greyElements) {
  if (mediaQuery.matches) {
  
    greyElements.forEach(function(element) {
      element.classList.add("grey");
    });
  } else {

    greyElements.forEach(function(element) {
      element.classList.remove("grey");
    });
  }
}

const mediaQuery1 = window.matchMedia("(max-width: 600px)");
handleMediaQuery(mediaQuery1, greyElements1);
mediaQuery1.addListener(function(mediaQuery) {
  handleMediaQuery(mediaQuery, greyElements1);
});

const mediaQuery2 = window.matchMedia("(max-width: 600px)");
handleMediaQuery(mediaQuery2, greyElements2);
mediaQuery2.addListener(function(mediaQuery) {
  handleMediaQuery(mediaQuery, greyElements2);
});

// Check if the viewport width is at most 600 pixels
if (window.innerWidth <= 600) {
  // Create an <hr> element
  var hrElement = document.createElement('hr');
  
  // Append the <hr> element to the 'add' div
  var addDiv = document.getElementById('add');
  addDiv.appendChild(hrElement);
}