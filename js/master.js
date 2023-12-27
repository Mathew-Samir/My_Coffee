// select landing page element

let landingPage = document.querySelector(".landing-page");

// get array of image

let imgsArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];





setInterval(()=>{
//get random number

    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // change background image url

    landingPage.style.backgroundImage = 'url("images/'+ imgsArray[randomNumber] +'")'
},10000);
