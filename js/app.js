// Script
const photo = document.getElementById("photoCollection")

for ( let i = 0; i < 6; i++ ) {
    fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then( response => response.json() )
    .then( data => {

        photo.innerHTML = photo.innerHTML + `
        <div class="cardPhoto"> 
                <div class="pin"></div>
                <div class="photo"><img url=${data[i]} alt=""></div>
                <div class="caption"><span>${data[i].title}</span></div>
            </div>
        `;
    });
}