const myButton = document.getElementById("myButton");

myButton.addEventListener("mouseover", function() {
  myButton.style.color = "#ffffff";
  myButton.style.fontWeight = "bold";
});

myButton.addEventListener("mouseout", function() {
  myButton.style.color = "#000000";
  myButton.style.fontWeight = "normal";
});
