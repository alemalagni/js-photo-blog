// Script
const photo = document.getElementById("photoCollection");

for ( let i = 0; i < 6; i++ ) {
    fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then( response => response.json() )
    .then( data => {

        photo.innerHTML = photo.innerHTML + `
        <div id="${i+1}">
            <button class="cardPhoto"> 
                <div class="pin"></div>
                <div class="photo"><img src="${data[i].url}" alt="" style="width: 260px; display: block;"></div>
                <div class="caption"><span>${data[i].title}</span></div>
                <div class="caption date"><span>${data[i].date}</span></div>
            </button>
        </div>
        `;
    });
}

// Click Photo
const photoclick = document.querySelector("button")
const overlay = document.getElementById("overlay");


photoclick.addEventListener('click', function() {
        console.log("prova") //test
        overlay.style.display = "block";
    }
);