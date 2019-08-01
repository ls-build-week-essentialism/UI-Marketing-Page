

let buttonevent = document.querySelector(".join-btn");
buttonevent.addEventListener("mouseover", function() {
  buttonevent.style.color = "red";
  buttonevent.style.backgroundColor = "white";
});

buttonevent.addEventListener("mouseleave", function() {
  buttonevent.style.color = "white";
  buttonevent.style.backgroundColor = "red";
});


let buttoneventTwo = document.querySelector(".join-btn2");
buttoneventTwo.addEventListener("mouseover", function() {
  buttoneventTwo.style.color = "red";
  buttoneventTwo.style.backgroundColor = "white";
});

buttoneventTwo.addEventListener("mouseleave", function() {
  buttoneventTwo.style.color = "white";
  buttoneventTwo.style.backgroundColor = "red";
});