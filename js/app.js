// Script
const photo = document.getElementById("photoCollection")

for ( let i = 0; i < 6; i++ ) {
    fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then( response => response.json() )
    .then( data => {
        
        photo.innerHTML = photo.innerHTML + `
        <div class="cardPhoto"> <!-- Foto 1 --> 
                <div class="pin"></div>
                <div class="photo"><span>600 x 600</span></div>
                <div class="caption"><span>Didascalia 1</span></div>
            </div>
        `;
    });
}