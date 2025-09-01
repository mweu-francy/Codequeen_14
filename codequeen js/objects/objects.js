/* objects 
its a data type in js
have properties which  have values

*/
// this is how you declare an object. it is a variable that can hold other variables
const user={
    name: "Francisca Mweu",
    age:27,
    bio : "Front end developer. I like designing electronics",
    image: "pic.jpg"
};

//use javascript to update HTML with objeect values

document.getElementById("user-name").textContent =user.name;
document.getElementById("user-age").textContent ="Age" + " "+ user.age;
document.getElementById("user-bio").textContent =user.bio;
document.getElementById("user-image").src = user.image;
