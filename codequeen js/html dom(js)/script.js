//DOM Manipulations
const myHeading = document.getElementById("mainHeading");
console.log(myHeading);

const paragraph = document.querySelector("paragraph");
console.log(paragraph);

// using get elemenetbyclassname
const paragraph2 =document.getElementsByClassName("paragraph2");
console.log(paragraph2);

//changing the heading color
myHeading.style.color="blue";
myHeading.innerHTML = "This was changed from JS";
paragraph.textContent = "This was changed from js";
paragraph2[0].innerHTML =" this was changed frm JS";