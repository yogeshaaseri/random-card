let details = document.querySelector(".details"); 
let imgContainer = document.querySelector(".img-container");
let getUserBtn = document.getElementById("get-user-btn");

let url ="https://random-data-api.com/api/v2/users?response_type=json";

let getuser = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        // console.log(data.first_name);
        // console.log(data.last_name);
        // console.log(data.avatar);
        // console.log(data.employment.title);
        // console.log(data.address.city);
        // console.log(data.id);

        imgContainer.innerHTML =` <img src = ${data.avatar} >`
        details.innerHTML = `
        <h3>${data.first_name} ${data.last_name} </h3>
        <h3>${data.employment.title}</h3>
        <h4><i class="fa-solid fa-location-dot"></i> ${data.address.city}</h4>
        `

        let randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
        // console.log(randomColor);
        document.documentElement.style.setProperty("--theme-color", randomColor);
    });
};
window.addEventListener("load", getuser);
getUserBtn.addEventListener("click",getuser);